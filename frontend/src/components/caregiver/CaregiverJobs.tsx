'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Job = {
  id: number;
  familyName: string;
  location: string;
  services: string[];
  date: string;
  time: string;
  rate: number;
  distance: string;
};

const availableJobs: Job[] = [
  { id: 1, familyName: 'The Jayasuriya Family', location: 'Colombo 05', services: ['Childcare', 'Tutoring'], date: '2025-09-25', time: '3:00 PM - 6:00 PM', rate: 1200, distance: '3 km away' },
  { id: 2, familyName: 'Mr. Bandara', location: 'Dehiwala', services: ['Elder Care'], date: 'Weekends', time: 'Flexible', rate: 900, distance: '8 km away' },
  // platform focuses on care for people — replace 'Pet Care' with 'Companion Care'
  { id: 3, familyName: 'The Khan Family', location: 'Wellawatte', services: ['Companion Care'], date: '2025-10-01 - 2025-10-05', time: 'Morning Visits', rate: 800, distance: '5 km away' },
  { id: 4, familyName: 'Dr. Fernando', location: 'Colombo 07', services: ['Special Needs Care'], date: 'Mon, Wed, Fri', time: '9:00 AM - 1:00 PM', rate: 1500, distance: '2 km away' },
  { id: 5, familyName: 'The Alwis Family', location: 'Nugegoda', services: ['Childcare', 'Light Housekeeping'], date: '2025-09-28', time: 'Full Day', rate: 1000, distance: '6 km away' },
];

const ServiceTag = ({ service }: { service: string }) => {
  const colorMap: { [key: string]: string } = {
    Childcare: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Elder Care': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pet Care': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'Special Needs Care': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Tutoring: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    'Light Housekeeping': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  };
  return <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${colorMap[service] || 'bg-gray-100 text-gray-800'}`}>{service}</span>;
};


export default function CaregiverJobs() {
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState<string | null>(null);
  const [modalJob, setModalJob] = useState<Job | null>(null);

  // auto-hide toast
  React.useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const filteredJobs = availableJobs.filter(job => 
    filter === 'all' || job.services.map(s => s.toLowerCase().replace(' ', '-')).includes(filter)
  );
  
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
  <motion.h2 initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Jobs</motion.h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setFilter('all')} className={`px-4 py-2 text-sm rounded-full ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>All</button>
        <button onClick={() => setFilter('childcare')} className={`px-4 py-2 text-sm rounded-full ${filter === 'childcare' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>Childcare</button>
        <button onClick={() => setFilter('elder-care')} className={`px-4 py-2 text-sm rounded-full ${filter === 'elder-care' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>Elder Care</button>
        <button onClick={() => setFilter('special-needs-care')} className={`px-4 py-2 text-sm rounded-full ${filter === 'special-needs-care' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>Special Needs</button>
      </div>

      {/* TopNav contains the ThemeToggle now */}

      {/* Jobs List */}
      <div className="space-y-4">
        <AnimatePresence initial={false} mode="popLayout">
          {filteredJobs.map(job => (
            <motion.div key={job.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-shadow hover:shadow-md">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400">{job.familyName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}   <span className="font-medium text-gray-700 dark:text-gray-300">{job.distance}</span></p>
                  <div className="mt-2 flex flex-wrap gap-y-2">
                    {job.services.map(service => <ServiceTag key={service} service={service} />)}
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">LKR {job.rate}/hr</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.time}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex space-x-2">
                <motion.button onClick={() => setToast(`Applied to ${job.familyName}`)} whileTap={{ scale: 0.98 }} className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">Apply Now</motion.button>
                <motion.button onClick={() => setModalJob(job)} whileTap={{ scale: 0.98 }} className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">View Details</motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="fixed right-6 bottom-6 z-50">
            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">{toast}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalJob && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex items-center justify-center">
            <div onClick={() => setModalJob(null)} className="absolute inset-0 bg-black/40" />
            <motion.div initial={{ scale: 0.98, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 8 }} transition={{ duration: 0.18 }} className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full z-50 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{modalJob.familyName}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{modalJob.location} • {modalJob.distance}</p>
              <div className="mb-3">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Services</p>
                <div className="mt-2 flex flex-wrap">
                  {modalJob.services.map((s: string) => <ServiceTag key={s} service={s} />)}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button onClick={() => setModalJob(null)} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700">Close</button>
                <button onClick={() => { setToast(`Applied to ${modalJob.familyName}`); setModalJob(null); }} className="px-4 py-2 rounded-md bg-primary-600 text-white">Apply</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}