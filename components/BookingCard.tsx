import React, { useState, useEffect, useRef } from 'react';
import { VILLA_DETAILS } from '../constants';
import Calendar from './Calendar';
import GuestSelector from './GuestSelector';
import type { GuestCount } from '../types';

const BookingCard: React.FC = () => {
  const { pricePerNight } = VILLA_DETAILS;
  const whatsappNumber = VILLA_DETAILS.whatsappNumber;
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState<'check-in' | 'check-out' | null>(null);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [guestCount, setGuestCount] = useState<GuestCount>({ adults: 1, children: 0, infants: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
        setFocusedInput(null);
        setIsGuestSelectorOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateSelect = (date: Date) => {
    if (focusedInput === 'check-in') {
      setCheckInDate(date);
      if (checkOutDate && date >= checkOutDate) {
        setCheckOutDate(null);
      }
      setFocusedInput('check-out');
    } else if (focusedInput === 'check-out') {
      if (checkInDate && date > checkInDate) {
        setCheckOutDate(date);
        setIsCalendarOpen(false);
        setFocusedInput(null);
      } else {
        // If they select a checkout before checkin, reset checkin and set checkout
        setCheckInDate(null);
        setCheckOutDate(date);
        setFocusedInput('check-in');
      }
    }
  };

  const openCalendar = (input: 'check-in' | 'check-out') => {
    setFocusedInput(input);
    setIsCalendarOpen(true);
    setIsGuestSelectorOpen(false);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-CA'); // YYYY-MM-DD format
  };

  const nights = checkInDate && checkOutDate ? Math.max(0, Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))) : 0;
  const serviceFee = nights > 0 ? Math.round(pricePerNight * nights * 0.1) : 0;
  const total = nights > 0 ? (pricePerNight * nights) + serviceFee : 0;

  const totalGuests = guestCount.adults + guestCount.children;
  const guestText = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
  const infantText = guestCount.infants > 0 ? `, ${guestCount.infants} infant${guestCount.infants > 1 ? 's' : ''}` : '';

  const whatsappUrl = (() => {
    const ci = formatDate(checkInDate) || 'Not selected';
    const co = formatDate(checkOutDate) || 'Not selected';

    const msg = `Hi, I'm interested in booking the River's Edge Villa!\n
    Check-in: ${ci}\n
    Checkout: ${co}\n
    Guests: ${guestText}${infantText}\n
    Nights: ${nights}\n
    `;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  })();

  return (
    <div id="booking" className="w-full lg:w-2/5 lg:sticky top-28 self-start mt-8 lg:mt-0" ref={cardRef}>
      <div className="border border-gray-300 rounded-xl shadow-lg p-6 relative">
        {/*<div className="flex items-baseline mb-4">*/}
        {/*  <span className="text-2xl font-bold">₹{pricePerNight.toLocaleString('en-IN')}</span>*/}
        {/*  <span className="text-brand-light ml-1">/ night</span>*/}
        {/*</div>*/}

        <div className="grid grid-cols-2 gap-px border border-gray-400 rounded-lg overflow-hidden">
          <div className={`p-3 cursor-pointer ${focusedInput === 'check-in' ? 'bg-gray-100' : ''}`} onClick={() => openCalendar('check-in')}>
            <label htmlFor="check-in" className="block text-xs font-bold uppercase cursor-pointer">Check-in</label>
            <input readOnly type="text" id="check-in" value={formatDate(checkInDate)} placeholder="Add date" className="w-full border-none p-0 focus:ring-0 text-sm bg-transparent cursor-pointer" />
          </div>
          <div className={`p-3 border-l border-gray-400 cursor-pointer ${focusedInput === 'check-out' ? 'bg-gray-100' : ''}`} onClick={() => openCalendar('check-out')}>
            <label htmlFor="check-out" className="block text-xs font-bold uppercase cursor-pointer">Checkout</label>
            <input readOnly type="text" id="check-out" value={formatDate(checkOutDate)} placeholder="Add date" className="w-full border-none p-0 focus:ring-0 text-sm bg-transparent cursor-pointer" />
          </div>
          <div className="col-span-2 p-3 border-t border-gray-400 cursor-pointer" onClick={() => { setIsGuestSelectorOpen(!isGuestSelectorOpen); setIsCalendarOpen(false); }}>
            <div className="flex justify-between items-center">
              <div>
                <label htmlFor="guests" className="block text-xs font-bold uppercase">Guests</label>
                <span id="guests" className="text-sm">{guestText}{infantText}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isGuestSelectorOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        {isGuestSelectorOpen && (
          <GuestSelector
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            maxGuests={VILLA_DETAILS.specs.guests}
          />
        )}

        {isCalendarOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-10">
            <Calendar onDateSelect={handleDateSelect} checkInDate={checkInDate} checkOutDate={checkOutDate} />
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-brand-pink text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Reserve
        </a>

        {/*<div className="text-center text-sm text-brand-light mt-4">*/}
        {/*  {nights > 0 ? `You won't be charged yet` : ''}*/}
        {/*</div>*/}

        {/*{nights > 0 && (*/}
        {/*  <>*/}
        {/*    <div className="mt-6 space-y-3 text-sm">*/}
        {/*      <div className="flex justify-between">*/}
        {/*        <span className="underline">₹{pricePerNight.toLocaleString('en-IN')} x {nights} nights</span>*/}
        {/*        <span>₹{(pricePerNight * nights).toLocaleString('en-IN')}</span>*/}
        {/*      </div>*/}
        {/*      <div className="flex justify-between">*/}
        {/*        <span className="underline">Airbnb service fee</span>*/}
        {/*        <span>₹{serviceFee.toLocaleString('en-IN')}</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="border-t border-gray-200 mt-4 pt-4">*/}
        {/*      <div className="flex justify-between font-bold text-base">*/}
        {/*        <span>Total</span>*/}
        {/*        <span>₹{total.toLocaleString('en-IN')}</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default BookingCard;