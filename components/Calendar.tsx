import React, { useState } from 'react';

interface CalendarProps {
    onDateSelect: (date: Date) => void;
    checkInDate: Date | null;
    checkOutDate: Date | null;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, checkInDate, checkOutDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendarGrid = (date: Date) => {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startingDayOfWeek = firstDayOfMonth.getDay();
        const totalDays = lastDayOfMonth.getDate();

        const calendarDays = [];
        for (let i = 0; i < startingDayOfWeek; i++) {
            calendarDays.push(<div key={`empty-start-${i}`} className="text-center p-1"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const currentDay = new Date(date.getFullYear(), date.getMonth(), day);
            currentDay.setHours(0, 0, 0, 0);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const isPast = currentDay < today;
            const isCheckIn = checkInDate && currentDay.getTime() === checkInDate.getTime();
            const isCheckOut = checkOutDate && currentDay.getTime() === checkOutDate.getTime();
            const isInRange = checkInDate && checkOutDate && currentDay > checkInDate && currentDay < checkOutDate;

            let classNames = 'text-center p-1 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200 text-sm';

            if (isPast) {
                classNames += ' text-gray-300 cursor-not-allowed line-through';
            } else if (isCheckIn || isCheckOut) {
                classNames += ' bg-brand-dark text-white';
            } else if (isInRange) {
                classNames += ' bg-gray-200 rounded-none';
            } else {
                classNames += ' hover:bg-gray-100';
            }

            calendarDays.push(
                <div key={day} className="flex justify-center items-center">
                    <div className={classNames} onClick={() => !isPast && onDateSelect(currentDay)}>
                        {day}
                    </div>
                </div>
            );
        }
        return calendarDays;
    };

    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    return (
        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200 select-none">
            <div className="flex justify-between items-center mb-4 px-2">
                <button onClick={goToPreviousMonth} aria-label="Previous month" className="p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex-grow flex justify-around">
                    <div className="font-bold text-center">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <div className="font-bold text-center hidden sm:block">
                        {nextMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                </div>
                <button onClick={goToNextMonth} aria-label="Next month" className="p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <div className="flex gap-x-8">
                {/* Current Month Calendar */}
                <div className="w-full">
                    <div className="grid grid-cols-7 gap-1 text-xs text-center text-brand-light mb-2">
                        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-y-1">
                        {renderCalendarGrid(currentDate)}
                    </div>
                </div>
                {/* Next Month Calendar (for wider screens) */}
                <div className="w-full hidden sm:block">
                    <div className="grid grid-cols-7 gap-1 text-xs text-center text-brand-light mb-2">
                        {daysOfWeek.map(day => <div key={day + '2'}>{day}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-y-1">
                        {renderCalendarGrid(nextMonthDate)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
