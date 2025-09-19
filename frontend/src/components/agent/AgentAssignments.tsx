'use client'

import React, { useState } from 'react';

export default function AgentAssignments() {
  const [filterStatus, setFilterStatus] = useState('all');

  const assignments = [
    {
      id: 1,
      assignmentNumber: 'VER-2024-1201',
      family: 'The Perera Family',
      caregiver: 'Sarah Chen',
      address: '45 Galle Road, Colombo 03',
      serviceType: 'Child Care',
      scheduledTime: '2024-12-20T09:00:00',
      status: 'scheduled',
      priority: 'normal',
      notes: 'First time verification for new caregiver',
      estimatedDuration: 45
    },
    {
      id: 2,
      assignmentNumber: 'VER-2024-1202',
      family: 'The Silva Family',
      caregiver: 'Mike Johnson',
      address: '78 Bauddhaloka Mawatha, Colombo 07',
      serviceType: 'Elderly Care',
      scheduledTime: '2024-12-20T11:30:00',
      status: 'in-progress',
      priority: 'high',
      notes: 'Follow-up verification - previous issues reported',
      estimatedDuration: 60
    },
    {
      id: 3,
      assignmentNumber: 'VER-2024-1203',
      family: 'The Fernando Family',
      caregiver: 'Emma Williams',
      address: '12 Horton Place, Colombo 07',
      serviceType: 'Child Care',
      scheduledTime: '2024-12-20T14:00:00',
      status: 'completed',
      priority: 'normal',
      notes: 'Routine quality check',
      estimatedDuration: 30,
      completedTime: '2024-12-20T14:25:00',
      verificationResult: 'Satisfactory'
    },
    {
      id: 4,
      assignmentNumber: 'VER-2024-1204',
      family: 'The Jayawardene Family',
      caregiver: 'David Lee',
      address: '23 Ward Place, Colombo 07',
      serviceType: 'Elderly Care',
      scheduledTime: '2024-12-20T16:30:00',
      status: 'scheduled',
      priority: 'normal',
      notes: 'Initial assessment for new caregiver placement',
      estimatedDuration: 50
    },
    {
      id: 5,
      assignmentNumber: 'VER-2024-1205',
      family: 'The Rajapaksha Family',
      caregiver: 'Lisa Rodriguez',
      address: '56 Duplication Road, Colombo 04',
      serviceType: 'Child Care',
      scheduledTime: '2024-12-21T10:00:00',
      status: 'scheduled',
      priority: 'low',
      notes: 'Quarterly routine check',
      estimatedDuration: 30
    }
  ];

  const filteredAssignments = filterStatus === 'all'
    ? assignments
    : assignments.filter(a => a.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400';
      case 'in-progress':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400';
      case 'scheduled':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'normal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'low':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Assignments</h1>
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Assignments</option>
            <option value="scheduled">Scheduled</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Capacity: <span className="font-semibold text-primary-600 dark:text-primary-400">4/5</span>
          </div>
        </div>
      </div>

      {/* Assignment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Scheduled</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">1</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">1</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Completed Today</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">185</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Minutes</div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Assignment Details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Assignment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Service Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Scheduled Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {filteredAssignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {assignment.assignmentNumber}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {assignment.family}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {assignment.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">
                        {assignment.serviceType}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Caregiver: {assignment.caregiver}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {assignment.estimatedDuration} minutes
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {new Date(assignment.scheduledTime).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(assignment.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    {assignment.completedTime && (
                      <div className="text-xs text-success-600 dark:text-success-400">
                        Completed: {new Date(assignment.completedTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
                      {assignment.status === 'in-progress' ? 'In Progress' :
                       assignment.status === 'completed' ? 'Completed' : 'Scheduled'}
                    </span>
                    {assignment.verificationResult && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Result: {assignment.verificationResult}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(assignment.priority)}`}>
                      {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300">
                        View
                      </button>
                      {assignment.status === 'scheduled' && (
                        <>
                          <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300">
                            Navigate
                          </button>
                          <button className="text-success-600 dark:text-success-400 hover:text-success-900 dark:hover:text-success-300">
                            Start
                          </button>
                        </>
                      )}
                      {assignment.status === 'in-progress' && (
                        <button className="text-warning-600 dark:text-warning-400 hover:text-warning-900 dark:hover:text-warning-300">
                          Complete
                        </button>
                      )}
                      {assignment.status === 'completed' && (
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                          Report
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

      {/* Assignment Notes */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Assignment Notes</h2>
        <div className="space-y-3">
          {filteredAssignments.map((assignment) => (
            <div key={assignment.id} className="p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">{assignment.assignmentNumber}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(assignment.priority)}`}>
                  {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}