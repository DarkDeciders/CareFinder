'use client'

import React, { useState } from 'react';

interface SearchFilters {
  serviceType: string;
  location: string;
  availability: string;
  experience: string;
  rating: string;
  priceRange: string;
}

interface Caregiver {
  id: number;
  name: string;
  profileImage: string | null;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  verified: boolean;
  background: string;
  availability: string[];
  languages: string[];
  skills: string[];
}

export default function FamilySearch() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    serviceType: 'child_care',
    location: '',
    availability: 'any',
    experience: 'any',
    rating: 'any',
    priceRange: 'any'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const caregivers = [
    {
      id: 1,
      name: 'Sarah Chen',
      profileImage: null,
      specialization: 'Child Care',
      experience: 5,
      rating: 4.9,
      reviews: 127,
      hourlyRate: 2500,
      location: 'Colombo 03',
      verified: true,
      background: 'Certified childcare professional with 5+ years experience',
      availability: ['morning', 'afternoon'],
      languages: ['English', 'Sinhala'],
      skills: ['First Aid', 'Child Development', 'Educational Activities']
    },
    {
      id: 2,
      name: 'Mike Johnson',
      profileImage: null,
      specialization: 'Elderly Care',
      experience: 8,
      rating: 4.8,
      reviews: 94,
      hourlyRate: 3000,
      location: 'Colombo 07',
      verified: true,
      background: 'Experienced elderly care specialist with medical background',
      availability: ['full-time'],
      languages: ['English'],
      skills: ['Medical Care', 'Mobility Assistance', 'Medication Management']
    },
    {
      id: 3,
      name: 'Emma Williams',
      profileImage: null,
      specialization: 'Child Care',
      experience: 3,
      rating: 4.7,
      reviews: 56,
      hourlyRate: 2000,
      location: 'Colombo 04',
      verified: true,
      background: 'Energetic childcare provider specializing in early childhood',
      availability: ['evening', 'weekend'],
      languages: ['English', 'Tamil'],
      skills: ['Creative Play', 'Homework Help', 'Outdoor Activities']
    },
    {
      id: 4,
      name: 'David Lee',
      profileImage: null,
      specialization: 'Special Needs Care',
      experience: 6,
      rating: 5.0,
      reviews: 38,
      hourlyRate: 3500,
      location: 'Colombo 05',
      verified: true,
      background: 'Specialized in caring for children with special needs',
      availability: ['morning', 'afternoon'],
      languages: ['English', 'Sinhala'],
      skills: ['Special Needs Care', 'Therapy Support', 'Behavioral Management']
    }
  ];

  const renderStars = (rating: number): React.ReactElement => {
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
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">({rating})</span>
      </div>
    );
  };

  const renderCaregiverCard = (caregiver: Caregiver): React.ReactElement => (
    <div key={caregiver.id} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center flex-shrink-0 self-center sm:self-start">
          <span className="text-white text-xl font-bold">
            {caregiver.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{caregiver.name}</h3>
              {caregiver.verified && (
                <div className="flex items-center space-x-1 bg-success-100 dark:bg-success-900/20 px-2 py-1 rounded-full">
                  <svg className="w-3 h-3 text-success-600 dark:text-success-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-success-700 dark:text-success-400 font-medium">Verified</span>
                </div>
              )}
            </div>
            <div className="text-left sm:text-right">
              <div className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400">
                LKR {caregiver.hourlyRate.toLocaleString()}/hr
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{caregiver.location}</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-3">
            {renderStars(caregiver.rating)}
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {caregiver.reviews} reviews
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {caregiver.experience} years exp
            </span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {caregiver.background}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {caregiver.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="inline-flex px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {caregiver.languages.map((lang, index) => (
                <span key={index} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {lang}
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                View Profile
              </button>
              <button className="border border-primary-300 dark:border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Find Caregivers</h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="space-y-4">
          {/* Search Bar */}
          <div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, skills, or description..."
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Type</label>
              <select
                value={searchFilters.serviceType}
                onChange={(e) => setSearchFilters({...searchFilters, serviceType: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="child_care">Child Care</option>
                <option value="elderly_care">Elderly Care</option>
                <option value="special_needs">Special Needs</option>
                <option value="any">Any Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
              <select
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="">All Areas</option>
                <option value="colombo_03">Colombo 03</option>
                <option value="colombo_04">Colombo 04</option>
                <option value="colombo_05">Colombo 05</option>
                <option value="colombo_07">Colombo 07</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience</label>
              <select
                value={searchFilters.experience}
                onChange={(e) => setSearchFilters({...searchFilters, experience: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="any">Any Experience</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
              <select
                value={searchFilters.rating}
                onChange={(e) => setSearchFilters({...searchFilters, rating: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="any">Any Rating</option>
                <option value="4.5+">4.5+ Stars</option>
                <option value="4.0+">4.0+ Stars</option>
                <option value="3.5+">3.5+ Stars</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
              <select
                value={searchFilters.priceRange}
                onChange={(e) => setSearchFilters({...searchFilters, priceRange: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="any">Any Price</option>
                <option value="1000-2000">LKR 1,000-2,000</option>
                <option value="2000-3000">LKR 2,000-3,000</option>
                <option value="3000+">LKR 3,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Availability</label>
              <select
                value={searchFilters.availability}
                onChange={(e) => setSearchFilters({...searchFilters, availability: e.target.value})}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="any">Any Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="weekend">Weekend</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {caregivers.length} caregivers found
            </div>
            <button className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        </div>
      </div>

      {/* Conversational Search */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-4 sm:p-6 border border-primary-200 dark:border-primary-800">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg self-start">
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">AI-Powered Search Assistant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Describe what you&apos;re looking for in natural language, and our AI will help find the perfect caregiver.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                placeholder="e.g., 'I need someone experienced with toddlers...'"
                className="flex-1 bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {caregivers.map(caregiver => renderCaregiverCard(caregiver))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Caregivers
        </button>
      </div>
    </div>
  );
}