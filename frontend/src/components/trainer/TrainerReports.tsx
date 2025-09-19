'use client'

import React from 'react';

export default function TrainerReports() {

  const reports = [
    {
      id: 1,
      type: 'progress',
      trainee: 'Sarah Chen',
      date: '2024-12-15',
      status: 'submitted',
      title: 'Month 2 Progress Report'
    },
    {
      id: 2,
      type: 'assessment',
      trainee: 'Emma Williams',
      date: '2024-12-10',
      status: 'pending',
      title: 'Final Assessment Report'
    },
    {
      id: 3,
      type: 'completion',
      trainee: 'David Lee',
      date: '2024-11-01',
      status: 'approved',
      title: 'Training Completion Certificate'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Documentation</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Create Report
          </button>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Progress Reports</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monthly trainee progress</p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="p-3 bg-warning-100 dark:bg-warning-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Assessment Reports</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Final evaluations</p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="p-3 bg-success-100 dark:bg-success-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Completion Certificates</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Training completions</p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="p-3 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Performance Analytics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Training statistics</p>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Report
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trainee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {report.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 font-medium text-xs">
                          {report.trainee.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-gray-900 dark:text-white">{report.trainee}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.type === 'completion' ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400' :
                      report.type === 'assessment' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400' :
                      'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400'
                    }`}>
                      {report.type === 'completion' ? 'Completion' :
                       report.type === 'assessment' ? 'Assessment' : 'Progress'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(report.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'approved' ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400' :
                      report.status === 'pending' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400' :
                      'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400'
                    }`}>
                      {report.status === 'approved' ? 'Approved' :
                       report.status === 'pending' ? 'Pending' : 'Submitted'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300">
                        View
                      </button>
                      <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300">
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Template */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Create New Report</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Report Type
              </label>
              <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                <option>Progress Report</option>
                <option>Assessment Report</option>
                <option>Completion Certificate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Trainee
              </label>
              <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                <option>Select Trainee</option>
                <option>Sarah Chen</option>
                <option>Mike Johnson</option>
                <option>Emma Williams</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Report Title
            </label>
            <input
              type="text"
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              placeholder="Enter report title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Report Content
            </label>
            <textarea
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm h-32"
              placeholder="Enter report details..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}