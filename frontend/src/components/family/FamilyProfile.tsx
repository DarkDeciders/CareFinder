'use client'

import React, { useState } from 'react';

export default function FamilyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+94 77 123 4567',
    address: '123 Galle Road, Colombo 03',
    emergencyContact: '+94 77 987 6543',
    children: [
      { name: 'Emma Johnson', age: 8, specialNeeds: 'None' },
      { name: 'Liam Johnson', age: 5, specialNeeds: 'Mild autism' }
    ],
    preferences: {
      careType: ['childcare', 'occasional-babysitting'],
      languages: ['English', 'Sinhala'],
      maxDistance: '10km',
      budget: 'LKR 2000-3000/day'
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChildUpdate = (index: number, field: string, value: string | number) => {
    const updatedChildren = [...formData.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    setFormData(prev => ({ ...prev, children: updatedChildren }));
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { name: '', age: 0, specialNeeds: 'None' }]
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Family Profile</h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Picture */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            SJ
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{formData.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">Family Account</p>
            {isEditing && (
              <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                Change Photo
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Emergency Contact</label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.emergencyContact}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
            {isEditing ? (
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.address}</p>
            )}
          </div>
        </div>
      </div>

      {/* Children Information */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Children Information</h3>
          {isEditing && (
            <button
              onClick={addChild}
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Add Child
            </button>
          )}
        </div>

        <div className="space-y-4">
          {formData.children.map((child, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">Child {index + 1}</h4>
                {isEditing && formData.children.length > 1 && (
                  <button
                    onClick={() => removeChild(index)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={child.name}
                      onChange={(e) => handleChildUpdate(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">{child.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={child.age}
                      onChange={(e) => handleChildUpdate(index, 'age', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">{child.age} years old</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Special Needs</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={child.specialNeeds}
                      onChange={(e) => handleChildUpdate(index, 'specialNeeds', e.target.value)}
                      placeholder="None"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">{child.specialNeeds}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Preferences */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Care Preferences</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Languages</label>
            <p className="text-gray-900 dark:text-white">{formData.preferences.languages.join(', ')}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Maximum Distance</label>
            <p className="text-gray-900 dark:text-white">{formData.preferences.maxDistance}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget Range</label>
            <p className="text-gray-900 dark:text-white">{formData.preferences.budget}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Care Type</label>
            <p className="text-gray-900 dark:text-white">
              {formData.preferences.careType.map(type =>
                type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
              ).join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Security</h3>
        <div className="space-y-4">
          <button className="w-full sm:w-auto bg-warning-600 hover:bg-warning-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Change Password
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>Last password change: 2 months ago</p>
            <p className="mt-1">Two-factor authentication: <span className="text-success-600 font-medium">Enabled</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}