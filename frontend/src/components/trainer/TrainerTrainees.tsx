'use client'

import React from 'react';

export default function TrainerTrainees() {

  const trainees = [
    {
      id: 1,
      name: 'Sarah Chen',
      phase: 'Month 2',
      progress: 67,
      status: 'active',
      startDate: '2024-10-15',
      specialization: 'Child Care',
      nextSession: 'Dec 20, 2:00 PM'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      phase: 'Month 1',
      progress: 23,
      status: 'active',
      startDate: '2024-11-20',
      specialization: 'Elderly Care',
      nextSession: 'Dec 21, 10:00 AM'
    },
    {
      id: 3,
      name: 'Emma Williams',
      phase: 'Month 3',
      progress: 89,
      status: 'assessment',
      startDate: '2024-09-10',
      specialization: 'Child Care',
      nextSession: 'Final Assessment - Dec 22'
    },
    {
      id: 4,
      name: 'David Lee',
      phase: 'Completed',
      progress: 100,
      status: 'completed',
      startDate: '2024-08-01',
      specialization: 'Elderly Care',
      completedDate: '2024-11-01'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Trainees</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-xs sm:text-sm w-full sm:w-auto">
            <option>All Trainees</option>
            <option>Active Training</option>
            <option>Assessment Phase</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">12</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Trainees</div>
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-warning-600 dark:text-warning-400">3</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">In Assessment</div>
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-success-600 dark:text-success-400">47</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </div>
        </div>
      </div>

      {/* Trainees List */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trainee
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                  Phase
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                  Status
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                  Next Session
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {trainees.map((trainee) => (
                <tr key={trainee.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="px-3 sm:px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 dark:text-primary-400 font-medium text-xs sm:text-sm">
                          {trainee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3 sm:ml-4 min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                          {trainee.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {trainee.specialization}
                        </div>
                        <div className="sm:hidden text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {trainee.phase}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="text-sm text-gray-900 dark:text-white">{trainee.phase}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            trainee.progress === 100 ? 'bg-success-500' :
                            trainee.progress >= 80 ? 'bg-warning-500' : 'bg-primary-500'
                          }`}
                          style={{ width: `${trainee.progress}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {trainee.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      trainee.status === 'completed' ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400' :
                      trainee.status === 'assessment' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400' :
                      'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400'
                    }`}>
                      {trainee.status === 'completed' ? 'Completed' :
                       trainee.status === 'assessment' ? 'Assessment' : 'Active'}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 dark:text-white hidden lg:table-cell">
                    {trainee.nextSession || trainee.completedDate}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 transition-colors">
                        View
                      </button>
                      {trainee.status !== 'completed' && (
                        <button className="text-warning-600 dark:text-warning-400 hover:text-warning-900 dark:hover:text-warning-300 transition-colors">
                          Schedule
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}