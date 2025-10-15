import React, { useState } from 'react';

const DatePickerModal = ({ isOpen, onClose, onApplyDates, initialDates = null }) => {
  const [startDate, setStartDate] = useState(initialDates?.startDate || null);
  const [endDate, setEndDate] = useState(initialDates?.endDate || null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    let firstDayOfWeek = firstDay.getDay();
    // Convert to Monday = 0, Sunday = 6
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const days = [];
    
    // Add empty cells for days before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const handleDateClick = (date) => {
    if (!date) return;

    if (!startDate || (startDate && endDate)) {
      // Start new selection
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      // Set end date
      if (date < startDate) {
        // If clicked date is before start, swap them
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const isDateInRange = (date) => {
    if (!startDate || !date) return false;
    if (!endDate) return isSameDay(date, startDate);
    return date >= startDate && date <= endDate;
  };

  const isStartDate = (date) => {
    return startDate && isSameDay(date, startDate);
  };

  const isEndDate = (date) => {
    return endDate && isSameDay(date, endDate);
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate();
    const month = monthNames[date.getMonth()].substring(0, 3);
    return `${day}. ${month}.`;
  };

  const addDays = (days) => {
    if (!startDate) return;
    const newEndDate = new Date(startDate);
    newEndDate.setDate(startDate.getDate() + days);
    setEndDate(newEndDate);
  };

  const handleApply = () => {
    if (startDate && endDate) {
      onApplyDates({ startDate, endDate });
      onClose();
    }
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const getNextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    return next;
  };

  if (!isOpen) return null;

  const nights = calculateNights();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center z-50 pt-4">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative bg-white w-[343px] rounded-2xl shadow-lg flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-white border-b border-[#eae5e0] px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#2b2926]">Datum</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="#2B2926" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex-1 px-4 py-4 overflow-y-auto max-h-[500px]">
          {/* First Month */}
          <div className="mb-6">
            <h3 className="text-center font-semibold text-base mb-3">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-xs text-gray-600 font-medium h-8 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  disabled={!date}
                  className={`
                    h-10 flex items-center justify-center text-sm rounded
                    ${!date ? 'invisible' : ''}
                    ${isStartDate(date) || isEndDate(date) ? 'bg-[#2b2926] text-white font-bold' : ''}
                    ${isDateInRange(date) && !isStartDate(date) && !isEndDate(date) ? 'bg-gray-200' : ''}
                    ${!isDateInRange(date) && date ? 'hover:bg-gray-100' : ''}
                    ${date && date < new Date().setHours(0,0,0,0) ? 'text-gray-300 cursor-not-allowed' : ''}
                  `}
                >
                  {date ? date.getDate() : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Second Month */}
          <div>
            <h3 className="text-center font-semibold text-base mb-3">{monthNames[getNextMonth().getMonth()]} {getNextMonth().getFullYear()}</h3>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-xs text-gray-600 font-medium h-8 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(getNextMonth()).map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  disabled={!date}
                  className={`
                    h-10 flex items-center justify-center text-sm rounded
                    ${!date ? 'invisible' : ''}
                    ${isStartDate(date) || isEndDate(date) ? 'bg-[#2b2926] text-white font-bold' : ''}
                    ${isDateInRange(date) && !isStartDate(date) && !isEndDate(date) ? 'bg-gray-200' : ''}
                    ${!isDateInRange(date) && date ? 'hover:bg-gray-100' : ''}
                  `}
                >
                  {date ? date.getDate() : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Select Buttons */}
          {startDate && !endDate && (
            <div className="flex gap-2 mt-4 justify-center">
              <button
                onClick={() => addDays(1)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50"
              >
                +1 Tag
              </button>
              <button
                onClick={() => addDays(2)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50"
              >
                +2 Tage
              </button>
              <button
                onClick={() => addDays(3)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50"
              >
                +3 Tage
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-[#eae5e0] px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm">
              {startDate && endDate ? (
                <>
                  <div className="font-semibold text-[#2b2926]">
                    {formatDate(startDate)} - {formatDate(endDate)}
                  </div>
                  <div className="text-gray-600">
                    {nights} {nights === 1 ? 'Nacht' : 'Nächte'}
                  </div>
                </>
              ) : startDate ? (
                <div className="text-gray-600">Enddatum auswählen</div>
              ) : (
                <div className="text-gray-600">Daten auswählen</div>
              )}
            </div>
            <button
              onClick={handleApply}
              disabled={!startDate || !endDate}
              className={`px-6 py-2.5 rounded-lg font-semibold text-base transition-colors ${
                startDate && endDate
                  ? 'bg-[#00809d] text-white hover:bg-[#006d8a]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Anwenden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;

