'use client';

import React, { useState } from 'react';

export default function FamilyBookings() {
  const [activeTab, setActiveTab] = useState<
    'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  >('upcoming');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const bookings = {
    upcoming: [
      {
        id: 1,
        caregiver: {
          name: 'Maria Silva',
          photo: 'MS',
          rating: 4.9,
          phone: '+94 77 123 4567',
        },
        type: 'Childcare',
        date: 'Dec 20, 2024',
        time: '9:00 AM - 5:00 PM',
        duration: '8 hours',
        location: 'Your Home',
        children: ['Emma Johnson'],
        totalCost: 'LKR 22,400',
        status: 'confirmed',
        specialInstructions:
          'Emma has a mild peanut allergy. Please be careful with snacks.',
        bookingDate: '2024-12-15',
      },
      {
        id: 2,
        caregiver: {
          name: 'John Perera',
          photo: 'JP',
          rating: 4.7,
          phone: '+94 77 234 5678',
        },
        type: 'Elderly Care',
        date: 'Dec 22, 2024',
        time: '2:00 PM - 6:00 PM',
        duration: '4 hours',
        location: 'Your Home',
        elderly: ['Grandmother'],
        totalCost: 'LKR 12,800',
        status: 'confirmed',
        specialInstructions: 'Medication reminder at 4:00 PM.',
        bookingDate: '2024-12-16',
      },
      {
        id: 3,
        caregiver: {
          name: 'Priya Fernando',
          photo: 'PF',
          rating: 4.8,
          phone: '+94 77 345 6789',
        },
        type: 'Babysitting',
        date: 'Dec 25, 2024',
        time: '7:00 PM - 11:00 PM',
        duration: '4 hours',
        location: 'Your Home',
        children: ['Emma Johnson', 'Liam Johnson'],
        totalCost: 'LKR 10,000',
        status: 'pending',
        specialInstructions: 'Bedtime at 9:00 PM. Light dinner provided.',
        bookingDate: '2024-12-18',
      },
    ],
    ongoing: [
      {
        id: 4,
        caregiver: {
          name: 'Kumari Dissanayake',
          photo: 'KD',
          rating: 4.9,
          phone: '+94 77 456 7890',
        },
        type: 'Childcare',
        date: 'Today',
        time: '8:00 AM - 4:00 PM',
        duration: '8 hours',
        location: 'Your Home',
        children: ['Liam Johnson'],
        totalCost: 'LKR 28,000',
        status: 'active',
        startedAt: '8:05 AM',
        specialInstructions: 'Liam needs assistance with lunch.',
        bookingDate: '2024-12-10',
      },
    ],
    completed: [
      {
        id: 5,
        caregiver: {
          name: 'Amara Wickramasinghe',
          photo: 'AW',
          rating: 4.6,
          phone: '+94 77 567 8901',
        },
        type: 'Elderly Care',
        date: 'Dec 15, 2024',
        time: '10:00 AM - 4:00 PM',
        duration: '6 hours',
        location: 'Your Home',
        elderly: ['Grandmother'],
        totalCost: 'LKR 17,400',
        status: 'completed',
        completedAt: '4:15 PM',
        yourRating: 5,
        caregiverRating: 5,
        specialInstructions: 'Accompany to doctor appointment.',
        bookingDate: '2024-12-12',
      },
      {
        id: 6,
        caregiver: {
          name: 'Maria Silva',
          photo: 'MS',
          rating: 4.9,
          phone: '+94 77 123 4567',
        },
        type: 'Childcare',
        date: 'Dec 12, 2024',
        time: '9:00 AM - 3:00 PM',
        duration: '6 hours',
        location: 'Your Home',
        children: ['Emma Johnson'],
        totalCost: 'LKR 16,800',
        status: 'completed',
        completedAt: '3:10 PM',
        yourRating: 5,
        caregiverRating: 5,
        specialInstructions: 'Pick up from school at 1:00 PM.',
        bookingDate: '2024-12-08',
      },
    ],
    cancelled: [
      {
        id: 7,
        caregiver: {
          name: 'Nimal Rajapaksha',
          photo: 'NR',
          rating: 4.5,
          phone: '+94 77 678 9012',
        },
        type: 'Childcare',
        date: 'Dec 18, 2024',
        time: '10:00 AM - 6:00 PM',
        duration: '8 hours',
        location: 'Your Home',
        children: ['Emma Johnson', 'Liam Johnson'],
        totalCost: 'LKR 19,200',
        status: 'cancelled',
        cancelledAt: '2024-12-17 2:30 PM',
        cancelledBy: 'caregiver',
        refundAmount: 'LKR 19,200',
        reason: 'Family emergency',
        specialInstructions: 'Both children need lunch.',
        bookingDate: '2024-12-14',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'pending':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'active':
        return 'text-primary-600 bg-primary-50 border-primary-200';
      case 'completed':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'cancelled':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '✅';
      case 'pending':
        return '⏳';
      case 'active':
        return '🟢';
      case 'completed':
        return '✨';
      case 'cancelled':
        return '❌';
      default:
        return '📅';
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BookingCard = ({ booking }: { booking: any }) => (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
            {booking.caregiver.photo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {booking.caregiver.name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="text-warning-500">⭐</span>
              <span>{booking.caregiver.rating}</span>
              <span>•</span>
              <span>{booking.type}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
              booking.status
            )}`}
          >
            {getStatusIcon(booking.status)}{' '}
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            ID: #{booking.id}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <span className="w-6">📅</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {booking.date}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="w-6">🕒</span>
            <span className="text-gray-900 dark:text-white">
              {booking.time}
            </span>
            <span className="text-gray-600 dark:text-gray-300 ml-2">
              ({booking.duration})
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="w-6">📍</span>
            <span className="text-gray-900 dark:text-white">
              {booking.location}
            </span>
          </div>
          {booking.children && (
            <div className="flex items-center text-sm">
              <span className="w-6">👶</span>
              <span className="text-gray-900 dark:text-white">
                {booking.children.join(', ')}
              </span>
            </div>
          )}
          {booking.elderly && (
            <div className="flex items-center text-sm">
              <span className="w-6">👵</span>
              <span className="text-gray-900 dark:text-white">
                {booking.elderly.join(', ')}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">
              Total Cost:
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {booking.totalCost}
            </span>
          </div>

          {booking.status === 'active' && (
            <div className="flex items-center text-sm">
              <span className="w-6">🚀</span>
              <span className="text-success-600">
                Started at {booking.startedAt}
              </span>
            </div>
          )}

          {booking.status === 'completed' && (
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-6">✅</span>
                <span className="text-gray-900 dark:text-white">
                  Completed at {booking.completedAt}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Your Rating:
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < booking.yourRating
                          ? 'text-warning-500'
                          : 'text-gray-300'
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {booking.status === 'cancelled' && (
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-6">❌</span>
                <span className="text-red-600">
                  Cancelled by {booking.cancelledBy}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-6">💰</span>
                <span className="text-success-600">
                  Refund: {booking.refundAmount}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Reason: {booking.reason}
              </div>
            </div>
          )}
        </div>
      </div>

      {booking.specialInstructions && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-start space-x-2">
            <span className="text-blue-600 mt-0.5">💡</span>
            <div>
              <div className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Special Instructions:
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                {booking.specialInstructions}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Booked on {booking.bookingDate}
        </div>
        <div className="flex space-x-2">
          {booking.status === 'upcoming' && (
            <>
              <button className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                Modify
              </button>
              <button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900 transition-colors">
                Cancel
              </button>
            </>
          )}
          {booking.status === 'active' && (
            <button className="px-4 py-2 bg-success-600 text-white rounded-lg text-sm font-medium hover:bg-success-700 transition-colors">
              Track Live
            </button>
          )}
          {booking.status === 'completed' && !booking.yourRating && (
            <button className="px-4 py-2 bg-warning-600 text-white rounded-lg text-sm font-medium hover:bg-warning-700 transition-colors">
              Rate Service
            </button>
          )}
          <button className="px-4 py-2 text-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Contact
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const EmptyState = ({ type }: { type: string }) => (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">
        {type === 'upcoming'
          ? '📅'
          : type === 'ongoing'
          ? '🟢'
          : type === 'completed'
          ? '✨'
          : '❌'}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        No {type} bookings
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {type === 'upcoming'
          ? "You don't have any upcoming bookings."
          : type === 'ongoing'
          ? 'No ongoing care services at the moment.'
          : type === 'completed'
          ? 'No completed bookings yet.'
          : 'No cancelled bookings.'}
      </p>
      {type === 'upcoming' && (
        <button
          onClick={() => setShowBookingForm(true)}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Book a Caregiver
        </button>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Bookings
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Manage all your care service bookings
            </p>
          </div>
          <button
            onClick={() => setShowBookingForm(true)}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            + New Booking
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">
              {bookings.upcoming.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Upcoming
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success-600">
              {bookings.ongoing.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Ongoing
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
              {bookings.completed.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {bookings.cancelled.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Cancelled
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
        <nav className="flex overflow-x-auto">
          {[
            {
              key: 'upcoming',
              label: 'Upcoming',
              count: bookings.upcoming.length,
            },
            {
              key: 'ongoing',
              label: 'Ongoing',
              count: bookings.ongoing.length,
            },
            {
              key: 'completed',
              label: 'Completed',
              count: bookings.completed.length,
            },
            {
              key: 'cancelled',
              label: 'Cancelled',
              count: bookings.cancelled.length,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-4 px-6 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {bookings[activeTab].length === 0 ? (
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <EmptyState type={activeTab} />
          </div>
        ) : (
          bookings[activeTab].map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))
        )}
      </div>

      {/* Quick Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Booking
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To create a new booking, please go to the &quot;Find Caregivers&quot;
              section to browse and book verified caregivers.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  // Navigate to search tab
                }}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Find Caregivers
              </button>
              <button
                onClick={() => setShowBookingForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
