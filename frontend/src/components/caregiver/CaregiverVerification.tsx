'use client'

import React, { useState } from 'react';

interface AgentVisit {
  id: number;
  visitNumber: string;
  agent: string;
  family: string;
  address: string;
  serviceType: string;
  scheduledDate: string;
  completedDate: string | null;
  status: string;
  result: string | null;
  duration: number | null;
  notes: string | null;
  rating: number | null;
  issues: string[];
}

export default function CaregiverVerification() {
  const [selectedVisit, setSelectedVisit] = useState<AgentVisit | null>(null);

  const agentVisits = [
    {
      id: 1,
      visitNumber: 'VER-2024-1201',
      agent: 'Rohan Jayasinghe',
      family: 'The Perera Family',
      address: '45 Galle Road, Colombo 03',
      serviceType: 'Child Care',
      scheduledDate: '2024-12-20T09:00:00',
      completedDate: '2024-12-20T09:30:00',
      status: 'completed',
      result: 'satisfactory',
      duration: 30,
      notes: 'Excellent care standards observed. Child appeared happy and well-cared for. No issues identified.',
      rating: 5,
      issues: []
    },
    {
      id: 2,
      visitNumber: 'VER-2024-1195',
      agent: 'Priya Mendis',
      family: 'The Silva Family',
      address: '78 Bauddhaloka Mawatha, Colombo 07',
      serviceType: 'Elderly Care',
      scheduledDate: '2024-12-19T14:00:00',
      completedDate: '2024-12-19T14:45:00',
      status: 'completed',
      result: 'needs_improvement',
      duration: 45,
      notes: 'Minor improvements needed in medication management documentation. Overall care quality is good.',
      rating: 4,
      issues: ['documentation']
    },
    {
      id: 3,
      visitNumber: 'VER-2024-1210',
      agent: 'Rohan Jayasinghe',
      family: 'The Fernando Family',
      address: '12 Horton Place, Colombo 07',
      serviceType: 'Child Care',
      scheduledDate: '2024-12-21T10:00:00',
      completedDate: null,
      status: 'scheduled',
      result: null,
      duration: null,
      notes: null,
      rating: null,
      issues: []
    },
    {
      id: 4,
      visitNumber: 'VER-2024-1205',
      agent: 'Kasun Perera',
      family: 'The Wickramasinghe Family',
      address: '23 Ward Place, Colombo 07',
      serviceType: 'Elderly Care',
      scheduledDate: '2024-12-18T11:00:00',
      completedDate: '2024-12-18T11:25:00',
      status: 'completed',
      result: 'excellent',
      duration: 25,
      notes: 'Outstanding care delivery. Patient comfort and safety protocols perfectly followed.',
      rating: 5,
      issues: []
    }
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400';
      case 'scheduled':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getResultColor = (result: string): string => {
    switch (result) {
      case 'excellent':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'satisfactory':
        return 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400';
      case 'needs_improvement':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400';
      case 'unsatisfactory':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const renderStars = (rating: number | null): React.ReactElement | null => {
    if (!rating) return null;
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">({rating}/5)</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Agent Verification Visits</h1>
        <div className="flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-primary-700 dark:text-primary-400 font-medium">Quality Monitored</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">4</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Visits</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">4.7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Pass Rate</div>
        </div>
      </div>

      {/* Information Panel */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-400 mb-1">About Agent Visits</h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              CareFinder agents conduct regular quality assurance visits to ensure the highest standards of care.
              These visits help maintain service quality and provide valuable feedback for continuous improvement.
            </p>
            <ul className="text-xs text-blue-700 dark:text-blue-400 mt-2 list-disc list-inside">
              <li>Visits are scheduled based on service frequency and client needs</li>
              <li>Agents verify care quality, safety protocols, and client satisfaction</li>
              <li>Feedback is provided to help improve your service delivery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visits List */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Visit History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Visit Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Agent & Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Result
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {agentVisits.map((visit) => (
                <tr key={visit.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {visit.visitNumber}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {visit.family}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {visit.serviceType}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">
                        {visit.agent}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {visit.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">
                        {new Date(visit.scheduledDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(visit.scheduledDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      {visit.completedDate && (
                        <div className="text-xs text-success-600 dark:text-success-400">
                          Completed: {new Date(visit.completedDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(visit.status)}`}>
                      {visit.status === 'completed' ? 'Completed' :
                       visit.status === 'scheduled' ? 'Scheduled' : 'Cancelled'}
                    </span>
                    {visit.duration && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Duration: {visit.duration} min
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {visit.result ? (
                      <div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getResultColor(visit.result)}`}>
                          {visit.result === 'excellent' ? 'Excellent' :
                           visit.result === 'satisfactory' ? 'Satisfactory' :
                           visit.result === 'needs_improvement' ? 'Needs Improvement' : 'Unsatisfactory'}
                        </span>
                        {visit.rating && (
                          <div className="mt-1">
                            {renderStars(visit.rating)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Pending</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedVisit(visit)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                      >
                        View Details
                      </button>
                      {visit.status === 'scheduled' && (
                        <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300">
                          Reschedule
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

      {/* Visit Details Modal */}
      {selectedVisit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Visit Details</h2>
              <button
                onClick={() => setSelectedVisit(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Visit Number</label>
                  <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.visitNumber}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Agent</label>
                  <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.agent}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Family</label>
                  <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.family}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Service Type</label>
                  <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.serviceType}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.address}</p>
              </div>

              {selectedVisit.result && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assessment Result</label>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getResultColor(selectedVisit.result)}`}>
                      {selectedVisit.result === 'excellent' ? 'Excellent' :
                       selectedVisit.result === 'satisfactory' ? 'Satisfactory' :
                       selectedVisit.result === 'needs_improvement' ? 'Needs Improvement' : 'Unsatisfactory'}
                    </span>
                    {selectedVisit.rating && renderStars(selectedVisit.rating)}
                  </div>
                </div>
              )}

              {selectedVisit.issues && selectedVisit.issues.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Issues Identified</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedVisit.issues.map((issue, index) => (
                      <span key={index} className="inline-flex px-3 py-1 bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400 rounded-full text-sm">
                        {issue.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedVisit.notes && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Agent Notes</label>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-900 dark:text-white">{selectedVisit.notes}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setSelectedVisit(null)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Close
                </button>
                {selectedVisit.status === 'completed' && (
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Download Report
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Improvement Recommendations */}
      {agentVisits.some(visit => visit.result === 'needs_improvement') && (
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Improvement Recommendations</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-400">Areas for Improvement</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-2 list-disc list-inside">
                  <li>Focus on improving medication management documentation</li>
                  <li>Consider attending additional training sessions on record keeping</li>
                  <li>Review safety protocols for elderly care procedures</li>
                </ul>
                <div className="mt-3">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Training Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}