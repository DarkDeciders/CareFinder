'use client'

import React, { useState } from 'react';

export default function CaregiverTraining() {
  const [trainingStatus, setTrainingStatus] = useState('qualified'); // qualified, in_training, pending

  // Mock data for different training statuses
  const trainingData = {
    qualified: {
      status: 'Verified Caregiver',
      completionDate: '2024-11-01',
      certificateNumber: 'CF-2024-567',
      trainer: 'Dr. Jane Doe',
      overallScore: 94
    },
    in_training: {
      status: 'Training in Progress',
      startDate: '2024-10-15',
      currentPhase: 'Month 2 of 3',
      trainer: 'Dr. Jane Doe',
      progress: 67,
      nextSession: '2024-12-22T10:00:00'
    },
    pending: {
      status: 'Awaiting Training Assignment',
      applicationDate: '2024-12-15',
      expectedStart: 'Within 2 weeks'
    }
  };

  const modules = [
    { name: 'Basic Child Care', completed: true, score: 92, date: '2024-10-20' },
    { name: 'Child Development', completed: true, score: 88, date: '2024-10-25' },
    { name: 'Child Safety Protocols', completed: trainingStatus === 'qualified', score: trainingStatus === 'qualified' ? 89 : null, date: trainingStatus === 'qualified' ? '2024-10-30' : null },
    { name: 'Emergency Procedures', completed: trainingStatus === 'qualified', score: trainingStatus === 'qualified' ? 96 : null, date: trainingStatus === 'qualified' ? '2024-11-05' : null },
    { name: 'Final Assessment', completed: trainingStatus === 'qualified', score: trainingStatus === 'qualified' ? 94 : null, date: trainingStatus === 'qualified' ? '2024-11-10' : null }
  ];

  const renderQualifiedView = () => (
    <div className="space-y-6">
      {/* Certification Status */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ✅ Verified Caregiver
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              You have successfully completed the CareFinder training program and are certified to provide care services.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-success-600 dark:text-success-400">{trainingData.qualified.overallScore}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Completion Date</label>
            <p className="text-sm text-gray-900 dark:text-white">{new Date(trainingData.qualified.completionDate).toLocaleDateString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Certificate Number</label>
            <p className="text-sm text-gray-900 dark:text-white">{trainingData.qualified.certificateNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Certified By</label>
            <p className="text-sm text-gray-900 dark:text-white">{trainingData.qualified.trainer}</p>
          </div>
        </div>
      </div>

      {/* Certificate Download */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Certificate</h3>
        <div className="flex items-center justify-between p-4 bg-success-50/50 dark:bg-success-900/10 border border-success-200 dark:border-success-800 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-success-100 dark:bg-success-900/20 rounded-lg">
              <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">CareFinder Training Certificate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Official certification document</p>
            </div>
          </div>
          <button className="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );

  const renderInTrainingView = () => (
    <div className="space-y-6">
      {/* Training Progress */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            🎓 Training in Progress
          </h2>
          <span className="bg-warning-100 dark:bg-warning-900/20 text-warning-700 dark:text-warning-400 px-3 py-1 rounded-full text-sm font-medium">
            {trainingData.in_training.currentPhase}
          </span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Overall Progress</span>
            <span>{trainingData.in_training.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-warning-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${trainingData.in_training.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Started</label>
            <p className="text-sm text-gray-900 dark:text-white">{new Date(trainingData.in_training.startDate).toLocaleDateString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Trainer</label>
            <p className="text-sm text-gray-900 dark:text-white">{trainingData.in_training.trainer}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Next Session</label>
            <p className="text-sm text-gray-900 dark:text-white">
              {new Date(trainingData.in_training.nextSession).toLocaleDateString()} at{' '}
              {new Date(trainingData.in_training.nextSession).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      </div>

      {/* Next Session Details */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Session</h3>
        <div className="flex items-center justify-between p-4 bg-primary-50/50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-800 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Child Safety Protocols</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              December 22, 2024 at 10:00 AM • CareFinder Training Center
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Duration: 2 hours • Trainer: {trainingData.in_training.trainer}
            </p>
          </div>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const renderPendingView = () => (
    <div className="space-y-6">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full w-fit mx-auto mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          ⏳ Awaiting Training Assignment
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Your application is being reviewed and a trainer will be assigned soon.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-yellow-800 dark:text-yellow-400 text-sm">
            <strong>Expected Start:</strong> {trainingData.pending.expectedStart}
          </p>
          <p className="text-yellow-700 dark:text-yellow-300 text-xs mt-1">
            Applied on: {new Date(trainingData.pending.applicationDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Training Status</h1>
        <div className="flex items-center space-x-4">
          {/* Status Selector for Demo */}
          <select
            value={trainingStatus}
            onChange={(e) => setTrainingStatus(e.target.value)}
            className="bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
          >
            <option value="qualified">Qualified Caregiver</option>
            <option value="in_training">In Training</option>
            <option value="pending">Pending Assignment</option>
          </select>
        </div>
      </div>

      {/* Conditional Rendering Based on Status */}
      {trainingStatus === 'qualified' && renderQualifiedView()}
      {trainingStatus === 'in_training' && renderInTrainingView()}
      {trainingStatus === 'pending' && renderPendingView()}

      {/* Training Modules Progress */}
      {(trainingStatus === 'qualified' || trainingStatus === 'in_training') && (
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Modules</h3>
          <div className="space-y-4">
            {modules.map((module, index) => (
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
                    {module.date && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Completed: {new Date(module.date).toLocaleDateString()}
                      </p>
                    )}
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
      )}

      {/* Contact Trainer */}
      {(trainingStatus === 'in_training' || trainingStatus === 'qualified') && (
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Trainer</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                <span className="text-primary-600 dark:text-primary-400 font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {trainingStatus === 'in_training' ? trainingData.in_training.trainer : trainingData.qualified.trainer}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Senior Training Specialist</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Send Message
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}