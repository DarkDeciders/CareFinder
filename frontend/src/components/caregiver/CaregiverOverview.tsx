'use client'

import React from 'react';

// Mock data for the overview
const overviewData = {
  stats: {
    totalEarnings: 75000,
    completedJobs: 42,
    upcomingBookings: 5,
    rating: 4.9,
    reviews: 127,
  },
  upcomingJobs: [
    { id: 1, familyName: 'The Perera Family', service: 'Childcare', date: '2025-09-19', time: '10:00 AM - 2:00 PM' },
    { id: 2, familyName: 'Mr. Silva', service: 'Elder Care', date: '2025-09-20', time: '9:00 AM - 12:00 PM' },
    { id: 3, familyName: 'The De Silva Family', service: 'Tutoring', date: '2025-09-22', time: '4:00 PM - 5:00 PM' },
  ],
  recentReviews: [
    { id: 1, familyName: 'The Perera Family', rating: 5, comment: 'Maria is wonderful with our children. Always punctual and professional.' },
    { id: 2, familyName: 'Mrs. Fernando', rating: 5, comment: 'She has been a great help in caring for my mother. Highly recommended.' },
  ]
};

const StatCard = ({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) => (
  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-200/50 dark:border-gray-700/50 flex items-start space-x-3 sm:space-x-4">
    <div className="bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 p-2 sm:p-3 rounded-lg flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white break-words">{value}</p>
    </div>
  </div>
);

export default function CaregiverOverview() {
  return (
    <div className="space-y-8">
      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard 
          label="Total Earnings (LKR)" 
          value={overviewData.stats.totalEarnings.toLocaleString()}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
        />
        <StatCard 
          label="Completed Jobs" 
          value={overviewData.stats.completedJobs}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
        />
        <StatCard 
          label="Upcoming Bookings" 
          value={overviewData.stats.upcomingBookings}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
        />
        <StatCard 
          label="Average Rating" 
          value={`${overviewData.stats.rating}/5`}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Upcoming Jobs */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Jobs</h3>
          <ul className="space-y-3 sm:space-y-4">
            {overviewData.upcomingJobs.map(job => (
              <li key={job.id} className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base truncate">{job.familyName}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{job.service}</p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">{job.date}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{job.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Reviews</h3>
          <ul className="space-y-3 sm:space-y-4">
            {overviewData.recentReviews.map(review => (
              <li key={review.id} className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-1 sm:space-y-0">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">{review.familyName}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">{'★'.repeat(review.rating)}</span>
                    <span className="text-gray-300 text-sm">{'★'.repeat(5 - review.rating)}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">&quot;{review.comment}&quot;</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}