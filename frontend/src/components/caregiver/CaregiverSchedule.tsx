 'use client'

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// typed mock data for schedule
type ScheduledEvent = { time: string; family: string; service: string };
const scheduledEvents: Record<string, ScheduledEvent[]> = {
  '2025-09-19': [{ time: '10:00 AM', family: 'The Perera Family', service: 'Childcare' }],
  '2025-09-20': [{ time: '9:00 AM', family: 'Mr. Silva', service: 'Elder Care' }],
  '2025-09-22': [{ time: '4:00 PM', family: 'The De Silva Family', service: 'Tutoring' }],
  '2025-09-25': [{ time: '3:00 PM', family: 'The Jayasuriya Family', service: 'Childcare' }],
};

export default function CaregiverSchedule() {
  // useMemo for the fixed demo date so it doesn't recreate on every render
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
          className="border border-gray-200 dark:border-gray-700 h-24"
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
          className={`border border-gray-200 dark:border-gray-700 h-24 p-2 flex flex-col ${isToday ? 'bg-primary-50 dark:bg-primary-900/30' : ''}`}
          role="gridcell"
          aria-selected={isToday}
          aria-label={`Day ${day}${eventsForDay ? `, ${eventsForDay.length} events` : ''}`}
        >
          <span className={`font-medium ${isToday ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'}`}>{day}</span>
          {eventsForDay && eventsForDay.length > 0 && (
            <div className="mt-1 bg-secondary-500 text-white text-xs rounded-md p-1 truncate">
              {eventsForDay[0].family}
            </div>
          )}
        </div>
      );
    }
    return days;
  }, [firstDay, daysInMonth, month, year, today]);

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Schedule</h2>
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-lg text-primary-600 dark:text-primary-400">{monthName} {year}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-300 text-sm mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      
      <div className="grid grid-cols-7" role="grid" aria-label="Monthly calendar">
        {renderCalendarDays}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Upcoming Agenda</h3>
        <ul className="space-y-3">
            <AnimatePresence initial={false}>
              {Object.entries(scheduledEvents).flatMap(([date, events]) => (
                events.map((event, index) => (
                  <motion.li key={`${date}-${index}`} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -6 }} transition={{ duration: 0.22 }} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center space-x-4 hover:shadow-sm">
                      <div className="text-center w-16">
                          <p className="font-bold text-primary-600 dark:text-primary-400">{new Date(date).toLocaleDateString('en-US', { day: 'numeric' })}</p>
                          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</p>
                      </div>
                      <div className="border-l-2 border-primary-500 pl-4">
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{event.family}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{event.service} at {event.time}</p>
                      </div>
                  </motion.li>
                ))
              ))}
            </AnimatePresence>
        </ul>
      </div>
    </motion.div>
  );
}