'use client'

import React, { useMemo } from 'react';

// typed mock data for schedule
type ScheduledEvent = { time: string; family: string; service: string };
const scheduledEvents: Record<string, ScheduledEvent[]> = {
  '2025-09-19': [{ time: '10:00 AM', family: 'The Perera Family', service: 'Childcare' }],
  '2025-09-20': [{ time: '9:00 AM', family: 'Mr. Silva', service: 'Elder Care' }],
  '2025-09-22': [{ time: '4:00 PM', family: 'The De Silva Family', service: 'Tutoring' }],
  '2025-09-25': [{ time: '3:00 PM', family: 'The Jayasuriya Family', service: 'Childcare' }],
};

export default function CaregiverSchedule() {
  const today = useMemo(() => new Date('2025-09-18'), []);
  const year = today.getFullYear();
  const month = today.getMonth();

  const monthName = today.toLocaleString('en-US', { month: 'long' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const renderCalendarDays = useMemo(() => {
    const days: React.ReactNode[] = [];
    // Add blank days for the start of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`blank-${i}`}
          className="border border-gray-200 dark:border-gray-700 h-16 sm:h-20 lg:h-24"
          aria-hidden
        />
      );
    }
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const eventsForDay = scheduledEvents[dateStr];
      const isToday = day === today.getDate();

      days.push(
        <div
          key={`day-${year}-${month + 1}-${day}`}
          className={`border border-gray-200 dark:border-gray-700 h-16 sm:h-20 lg:h-24 p-1 sm:p-2 flex flex-col ${isToday ? 'bg-primary-50 dark:bg-primary-900/30' : ''}`}
          role="gridcell"
          aria-selected={isToday}
          aria-label={`Day ${day}${eventsForDay ? `, ${eventsForDay.length} events` : ''}`}
        >
          <span className={`font-medium text-xs sm:text-sm ${isToday ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'}`}>{day}</span>
          {eventsForDay && eventsForDay.length > 0 && (
            <div className="mt-1 bg-secondary-500 text-white text-xs rounded-md px-1 py-0.5 truncate">
              <span className="hidden sm:inline">{eventsForDay[0].family}</span>
              <span className="sm:hidden w-2 h-2 bg-white rounded-full inline-block"></span>
            </div>
          )}
        </div>
      );
    }
    return days;
  }, [firstDay, daysInMonth, month, year, today]);

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Schedule</h2>
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-base sm:text-lg text-primary-600 dark:text-primary-400">{monthName} {year}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2">
        <div className="py-2">Sun</div>
        <div className="py-2">Mon</div>
        <div className="py-2">Tue</div>
        <div className="py-2">Wed</div>
        <div className="py-2">Thu</div>
        <div className="py-2">Fri</div>
        <div className="py-2">Sat</div>
      </div>
      
      <div className="grid grid-cols-7" role="grid" aria-label="Monthly calendar">
        {renderCalendarDays}
      </div>

      <div className="mt-4 sm:mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Upcoming Agenda</h3>
        <ul className="space-y-2 sm:space-y-3">
          {Object.entries(scheduledEvents).flatMap(([date, events]) => (
            events.map((event, index) => (
              <li key={`${date}-${index}`} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-start sm:items-center space-x-3 sm:space-x-4 hover:shadow-sm transition-shadow">
                <div className="text-center w-12 sm:w-16 flex-shrink-0">
                  <p className="font-bold text-primary-600 dark:text-primary-400 text-sm sm:text-base">{new Date(date).toLocaleDateString('en-US', { day: 'numeric' })}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</p>
                </div>
                <div className="border-l-2 border-primary-500 pl-3 sm:pl-4 min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">{event.family}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{event.service} at {event.time}</p>
                </div>
              </li>
            ))
          ))}
        </ul>
      </div>
    </div>
  );
}