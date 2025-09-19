'use client'

import React, { useState } from 'react';

export default function TrainerProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trainer Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image & Basic Info */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-warning-400 to-warning-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JD</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dr. Jane Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">Senior Training Specialist</p>
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-400 rounded-full text-sm">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
              Active Trainer
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">jane.doe@carefinder.lk</span>
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">+94 77 123 4567</span>
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Employee ID
                </label>
                <input
                  type="text"
                  value="TRN-2024-001"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  value="Training & Development"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Hire Date
                </label>
                <input
                  type="date"
                  value="2024-01-15"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  value="8"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {['Child Care Training', 'Elderly Care Training', 'Emergency Response', 'First Aid Certification', 'Child Development', 'Senior Care Management'].map((spec, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm"
                >
                  {spec}
                  {isEditing && (
                    <button className="ml-2 text-primary-600 hover:text-primary-800">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </span>
              ))}
              {isEditing && (
                <button className="inline-flex items-center px-3 py-1 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-full text-sm hover:border-primary-400 hover:text-primary-600">
                  + Add Specialization
                </button>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certifications & Qualifications</h3>
            <div className="space-y-3">
              {[
                { name: 'Certified Childcare Professional (CCP)', issuer: 'National Childcare Association', date: '2023-06-15', expires: '2026-06-15' },
                { name: 'First Aid & CPR Instructor', issuer: 'Red Cross Sri Lanka', date: '2024-03-20', expires: '2026-03-20' },
                { name: 'Adult Learning Specialist', issuer: 'Professional Development Institute', date: '2022-11-10', expires: 'Lifetime' },
              ].map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Issued: {new Date(cert.date).toLocaleDateString()}
                      {cert.expires !== 'Lifetime' && ` • Expires: ${new Date(cert.expires).toLocaleDateString()}`}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      cert.expires === 'Lifetime' || new Date(cert.expires) > new Date()
                        ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400'
                        : 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400'
                    }`}>
                      {cert.expires === 'Lifetime' ? 'Valid' :
                       new Date(cert.expires) > new Date() ? 'Valid' : 'Expiring Soon'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {isEditing && (
              <button className="mt-3 text-primary-600 dark:text-primary-400 text-sm hover:underline">
                + Add Certification
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Performance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">47</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Trainees</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">94%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">4.8</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">1,240</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Training Hours</div>
        </div>
      </div>
    </div>
  );
}