'use client'

import React, { useState } from 'react';

export default function TrainerProgress() {
  const [selectedTrainee, setSelectedTrainee] = useState('all');

  const trainees = [
    {
      id: 1,
      name: 'Sarah Chen',
      progress: 67,
      currentModule: 'Child Safety Protocols',
      modules: [
        { name: 'Basic Child Care', completed: true, score: 92 },
        { name: 'Child Development', completed: true, score: 88 },
        { name: 'Child Safety Protocols', completed: false, score: null },
        { name: 'Emergency Procedures', completed: false, score: null },
        { name: 'Final Assessment', completed: false, score: null },
      ]
    },
    {
      id: 2,
      name: 'Mike Johnson',
      progress: 23,
      currentModule: 'Elderly Care Fundamentals',
      modules: [
        { name: 'Elderly Care Fundamentals', completed: false, score: null },
        { name: 'Medical Assistance', completed: false, score: null },
        { name: 'Mobility Support', completed: false, score: null },
        { name: 'Emergency Response', completed: false, score: null },
        { name: 'Final Assessment', completed: false, score: null },
      ]
    },
    {
      id: 3,
      name: 'Emma Williams',
      progress: 89,
      currentModule: 'Final Assessment',
      modules: [
        { name: 'Basic Child Care', completed: true, score: 95 },
        { name: 'Child Development', completed: true, score: 91 },
        { name: 'Child Safety Protocols', completed: true, score: 89 },
        { name: 'Emergency Procedures', completed: true, score: 93 },
        { name: 'Final Assessment', completed: false, score: null },
      ]
    },
  ];

  const selectedTraineeData = selectedTrainee === 'all' ? null :
    trainees.find(t => t.id === parseInt(selectedTrainee));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Progress Tracking</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTrainee}
            onChange={(e) => setSelectedTrainee(e.target.value)}
            className="bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Trainees</option>
            {trainees.map(trainee => (
              <option key={trainee.id} value={trainee.id}>{trainee.name}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedTrainee === 'all' ? (
        // Overview of all trainees
        <div className="space-y-6">
          {/* Progress Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">59%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Progress</div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 dark:text-success-400">91%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Score</div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ready for Assessment</div>
              </div>
            </div>
          </div>

          {/* All Trainees Progress */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trainee Progress Overview</h2>
            <div className="space-y-4">
              {trainees.map((trainee) => (
                <div key={trainee.id} className="p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">{trainee.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{trainee.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full ${
                        trainee.progress >= 80 ? 'bg-success-500' :
                        trainee.progress >= 50 ? 'bg-warning-500' : 'bg-primary-500'
                      }`}
                      style={{ width: `${trainee.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Current: {trainee.currentModule}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {trainee.modules.filter(m => m.completed).length}/{trainee.modules.length} modules completed
                    </span>
                    <button
                      onClick={() => setSelectedTrainee(trainee.id.toString())}
                      className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Individual trainee details
        selectedTraineeData && (
          <div className="space-y-6">
            {/* Individual Progress Header */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedTraineeData.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently studying: {selectedTraineeData.currentModule}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {selectedTraineeData.progress}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Complete</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      selectedTraineeData.progress >= 80 ? 'bg-success-500' :
                      selectedTraineeData.progress >= 50 ? 'bg-warning-500' : 'bg-primary-500'
                    }`}
                    style={{ width: `${selectedTraineeData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Module Progress */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Module Progress</h3>
              <div className="space-y-4">
                {selectedTraineeData.modules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        module.completed
                          ? 'bg-success-100 dark:bg-success-900/20 text-success-600 dark:text-success-400'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-400'
                      }`}>
                        {module.completed ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{module.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {module.completed ? 'Completed' : 'In Progress'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {module.score !== null ? (
                        <div>
                          <span className={`text-lg font-semibold ${
                            module.score >= 90 ? 'text-success-600 dark:text-success-400' :
                            module.score >= 80 ? 'text-warning-600 dark:text-warning-400' :
                            'text-gray-600 dark:text-gray-400'
                          }`}>
                            {module.score}%
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Score</p>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Pending</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-lg text-center transition-colors">
                <div className="font-medium">Add Assessment</div>
                <div className="text-sm opacity-75">Schedule next evaluation</div>
              </button>
              <button className="bg-warning-500 hover:bg-warning-600 text-white p-4 rounded-lg text-center transition-colors">
                <div className="font-medium">Update Progress</div>
                <div className="text-sm opacity-75">Mark module complete</div>
              </button>
              <button className="bg-success-500 hover:bg-success-600 text-white p-4 rounded-lg text-center transition-colors">
                <div className="font-medium">Generate Report</div>
                <div className="text-sm opacity-75">Create progress report</div>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}