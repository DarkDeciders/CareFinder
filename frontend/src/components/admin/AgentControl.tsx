'use client'

import React, { useState } from 'react';

export default function AgentControl() {
  const [assignmentModal, setAssignmentModal] = useState(false);
  const [addAgentModal, setAddAgentModal] = useState(false);

  const agents = [
    {
      id: 1,
      name: 'Rohan Jayasinghe',
      email: 'rohan.j@carefinder.lk',
      phone: '+94 71 234 5678',
      zone: 'Central Colombo',
      status: 'active',
      currentAssignments: 4,
      maxCapacity: 5,
      successRate: 97,
      totalDistance: 23.7,
      location: { lat: 6.9147, lng: 79.8522 },
      lastUpdate: '2024-12-20T14:30:00'
    },
    {
      id: 2,
      name: 'Priya Mendis',
      email: 'priya.m@carefinder.lk',
      phone: '+94 77 345 6789',
      zone: 'Western Suburbs',
      status: 'active',
      currentAssignments: 3,
      maxCapacity: 5,
      successRate: 95,
      totalDistance: 18.2,
      location: { lat: 6.8721, lng: 79.8849 },
      lastUpdate: '2024-12-20T14:25:00'
    },
    {
      id: 3,
      name: 'Kasun Perera',
      email: 'kasun.p@carefinder.lk',
      phone: '+94 76 456 7890',
      zone: 'Southern Districts',
      status: 'offline',
      currentAssignments: 0,
      maxCapacity: 5,
      successRate: 92,
      totalDistance: 0,
      location: { lat: 6.8429, lng: 79.8648 },
      lastUpdate: '2024-12-20T12:00:00'
    }
  ];

  const pendingAssignments = [
    {
      id: 1,
      assignmentNumber: 'VER-2024-1206',
      family: 'The Kumar Family',
      caregiver: 'Lisa Rodriguez',
      address: '89 Union Place, Colombo 02',
      priority: 'normal',
      scheduledTime: '2024-12-21T10:00:00',
      serviceType: 'Child Care',
      estimatedDuration: 45,
      assignedAgent: null
    },
    {
      id: 2,
      assignmentNumber: 'VER-2024-1207',
      family: 'The Wickramasinghe Family',
      caregiver: 'David Lee',
      address: '45 Flower Road, Colombo 07',
      priority: 'high',
      scheduledTime: '2024-12-21T14:00:00',
      serviceType: 'Elderly Care',
      estimatedDuration: 60,
      assignedAgent: null
    },
    {
      id: 3,
      assignmentNumber: 'VER-2024-1208',
      family: 'The Ranasinghe Family',
      caregiver: 'Emma Williams',
      address: '123 Galle Road, Colombo 06',
      priority: 'urgent',
      scheduledTime: '2024-12-21T16:30:00',
      serviceType: 'Emergency Assessment',
      estimatedDuration: 90,
      assignedAgent: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400';
      case 'offline':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      case 'busy':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400';
      default:
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'high':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'normal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const autoAssignAgents = () => {
    // Algorithm: Assign based on location proximity, capacity, and workload
    console.log('Auto-assigning agents based on optimal routing...');
  };

  const forceAssignment = (assignmentId: string, agentId: string) => {
    console.log(`Force assigning assignment ${assignmentId} to agent ${agentId}`);
    setAssignmentModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Agent Control System</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={autoAssignAgents}
            className="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Auto-Assign All
          </button>
          <button
            onClick={() => setAddAgentModal(true)}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add New Agent
          </button>
        </div>
      </div>

      {/* Control Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Agents</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">2</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Agents</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Assignments</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Pending Assignments</div>
        </div>
      </div>

      {/* Real-time Agent Status */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Agent Status Dashboard</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Zone & Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Workload
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Controls
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {agents.map((agent) => (
                <tr key={agent.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary-600 dark:text-secondary-400 font-medium text-sm">
                          {agent.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {agent.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {agent.email}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Last update: {new Date(agent.lastUpdate).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{agent.zone}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Distance today: {agent.totalDistance} km
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Location: {agent.location.lat.toFixed(4)}, {agent.location.lng.toFixed(4)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {agent.currentAssignments}/{agent.maxCapacity} assignments
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className={`h-2 rounded-full ${
                          (agent.currentAssignments / agent.maxCapacity) >= 0.8
                            ? 'bg-warning-500'
                            : 'bg-success-500'
                        }`}
                        style={{
                          width: `${(agent.currentAssignments / agent.maxCapacity) * 100}%`
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {agent.maxCapacity - agent.currentAssignments} slots available
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {agent.successRate}% Success Rate
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      High performance rating
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)}`}>
                      {agent.status === 'active' ? 'Active' :
                       agent.status === 'offline' ? 'Offline' : 'Busy'}
                    </span>
                    {agent.status === 'active' && (
                      <div className="text-xs text-success-600 dark:text-success-400 mt-1">
                        Available for assignments
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => console.log('Monitor agent:', agent.id)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                      >
                        Monitor
                      </button>
                      <button
                        onClick={() => setAssignmentModal(true)}
                        className="text-success-600 dark:text-success-400 hover:text-success-900 dark:hover:text-success-300"
                        disabled={agent.status !== 'active' || agent.currentAssignments >= agent.maxCapacity}
                      >
                        Assign
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                        Contact
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Assignments Queue */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Assignment Queue</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Auto-assign enabled</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Assignment Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Service Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Scheduled Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Assignment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {pendingAssignments.map((assignment) => (
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
                        Duration: {assignment.estimatedDuration} minutes
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(assignment.priority)}`}>
                      {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.assignedAgent ? (
                      <div>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                          Assigned
                        </span>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Agent: {assignment.assignedAgent}
                        </div>
                      </div>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400">
                        Pending Assignment
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setAssignmentModal(true)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                      >
                        Assign
                      </button>
                      <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300">
                        Reschedule
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Modal */}
      {assignmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Force Assignment</h3>
              <button
                onClick={() => setAssignmentModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Assignment
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option>Select assignment...</option>
                  {pendingAssignments.map(assignment => (
                    <option key={assignment.id} value={assignment.id}>
                      {assignment.assignmentNumber} - {assignment.family}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Agent
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option>Select agent...</option>
                  {agents
                    .filter(agent => agent.status === 'active')
                    .map(agent => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name} - {agent.zone} ({agent.currentAssignments}/{agent.maxCapacity})
                      </option>
                    ))}
                </select>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-400">Override Notice</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      This will override the automatic assignment algorithm. Agent capacity and location will not be considered.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Override Reason
                </label>
                <textarea
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm h-20"
                  placeholder="Reason for manual assignment override..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setAssignmentModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => forceAssignment('1', '1')}
                  className="bg-warning-500 hover:bg-warning-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Force Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Agent Modal */}
      {addAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Agent</h3>
              <button
                onClick={() => setAddAgentModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                  placeholder="Enter agent's full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                  placeholder="agent@carefinder.lk"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                  placeholder="+94 77 123 4567"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Zone Assignment
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option value="">Select zone...</option>
                  <option value="central-colombo">Central Colombo</option>
                  <option value="western-suburbs">Western Suburbs</option>
                  <option value="southern-districts">Southern Districts</option>
                  <option value="northern-areas">Northern Areas</option>
                  <option value="eastern-regions">Eastern Regions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Maximum Capacity
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="5"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setAddAgentModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => setAddAgentModal(false)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Add Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}