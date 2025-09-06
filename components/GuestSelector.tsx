import React from 'react';
import type { GuestCount } from '../types';

interface GuestSelectorProps {
  guestCount: GuestCount;
  setGuestCount: (guestCount: GuestCount) => void;
  maxGuests: number;
}

const GuestTypeRow: React.FC<{
  title: string;
  subtitle: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  decrementDisabled: boolean;
  incrementDisabled: boolean;
}> = ({ title, subtitle, count, onIncrement, onDecrement, decrementDisabled, incrementDisabled }) => (
  <div className="flex justify-between items-center py-4">
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-brand-light">{subtitle}</p>
    </div>
    <div className="flex items-center space-x-4">
      <button
        onClick={onDecrement}
        disabled={decrementDisabled}
        className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:border-brand-dark transition-colors"
        aria-label={`Decrease number of ${title}`}
      >
        -
      </button>
      <span className="w-4 text-center text-lg">{count}</span>
      <button
        onClick={onIncrement}
        disabled={incrementDisabled}
        className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:border-brand-dark transition-colors"
        aria-label={`Increase number of ${title}`}
      >
        +
      </button>
    </div>
  </div>
);

const GuestSelector: React.FC<GuestSelectorProps> = ({ guestCount, setGuestCount, maxGuests }) => {
  const { adults, children, infants } = guestCount;
  const totalGuests = adults + children;

  const handleIncrement = (type: keyof GuestCount) => {
    setGuestCount({ ...guestCount, [type]: guestCount[type] + 1 });
  };

  const handleDecrement = (type: keyof GuestCount) => {
    setGuestCount({ ...guestCount, [type]: guestCount[type] - 1 });
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-10 w-96">
      <GuestTypeRow
        title="Adults"
        subtitle="Age 13+"
        count={adults}
        onDecrement={() => handleDecrement('adults')}
        onIncrement={() => handleIncrement('adults')}
        decrementDisabled={adults <= 1}
        incrementDisabled={totalGuests >= maxGuests}
      />
      <GuestTypeRow
        title="Children"
        subtitle="Ages 2-12"
        count={children}
        onDecrement={() => handleDecrement('children')}
        onIncrement={() => handleIncrement('children')}
        decrementDisabled={children <= 0}
        incrementDisabled={totalGuests >= maxGuests}
      />
      <GuestTypeRow
        title="Infants"
        subtitle="Under 2"
        count={infants}
        onDecrement={() => handleDecrement('infants')}
        onIncrement={() => handleIncrement('infants')}
        decrementDisabled={infants <= 0}
        incrementDisabled={infants >= 5} // Airbnb common limit for infants
      />
      <p className="text-xs text-brand-light pt-2">This place has a maximum of {maxGuests} guests, not including infants.</p>
    </div>
  );
};

export default GuestSelector;
