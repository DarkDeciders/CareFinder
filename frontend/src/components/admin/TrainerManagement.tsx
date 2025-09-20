"use client";

import React, { useState } from "react";

export default function TrainerManagement() {
  const [assignTraineeModal, setAssignTraineeModal] = useState(false);
  const [addTrainerModal, setAddTrainerModal] = useState(false);

  const trainers = [
    {
      id: 1,
      name: "Dr. Jane Doe",
      email: "jane.doe@carefinder.lk",
      phone: "+94 77 123 4567",
      specializations: ["Child Care", "Emergency Response"],
      status: "active",
      currentTrainees: 12,
      maxCapacity: 15,
      successRate: 94,
      experience: 8,
      location: "Colombo",
    },
    {
      id: 2,
      name: "Prof. Michael Silva",
      email: "michael.silva@carefinder.lk",
      phone: "+94 71 234 5678",
      specializations: ["Elderly Care", "Medical Assistance"],
      status: "active",
      currentTrainees: 8,
      maxCapacity: 12,
      successRate: 98,
      experience: 12,
      location: "Kandy",
    },
    {
      id: 3,
      name: "Dr. Sarah Fernando",
      email: "sarah.fernando@carefinder.lk",
      phone: "+94 76 345 6789",
      specializations: ["Child Development", "Special Needs"],
      status: "on_leave",
      currentTrainees: 0,
      maxCapacity: 10,
      successRate: 91,
      experience: 6,
      location: "Galle",
    },
  ];

  const unqualifiedCaregivers = [
    {
      id: 1,
      name: "Amara Perera",
      email: "amara.p@email.com",
      appliedFor: "Child Care",
      submissionDate: "2024-12-15",
      status: "pending_assignment",
      experience: "None - Career Change",
    },
    {
      id: 2,
      name: "Saman Wickramasinghe",
      email: "saman.w@email.com",
      appliedFor: "Elderly Care",
      submissionDate: "2024-12-14",
      status: "pending_assignment",
      experience: "Basic Home Care",
    },
    {
      id: 3,
      name: "Nisha Rajapaksha",
      email: "nisha.r@email.com",
      appliedFor: "Child Care",
      submissionDate: "2024-12-13",
      status: "training_assigned",
      assignedTrainer: "Dr. Jane Doe",
      experience: "Volunteer Work",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400";
      case "on_leave":
        return "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400";
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400";
    }
  };

  const assignTrainee = (traineeId: string, trainerId: string) => {
    // In a real app, this would make an API call
    console.log(`Assigning trainee ${traineeId} to trainer ${trainerId}`);
    setAssignTraineeModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Trainer Management
        </h1>
        <button
          onClick={() => setAddTrainerModal(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Add New Trainer
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            3
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Trainers
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">
            2
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Active Trainers
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">
            20
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Active Trainees
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
            95%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Avg Success Rate
          </div>
        </div>
      </div>

      {/* Trainers List */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Current Trainers
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trainer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Specializations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Performance
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
              {trainers.map((trainer) => (
                <tr
                  key={trainer.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                          {trainer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {trainer.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {trainer.email}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {trainer.experience} years exp • {trainer.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {trainer.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {trainer.currentTrainees}/{trainer.maxCapacity}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className={`h-2 rounded-full ${
                          trainer.currentTrainees / trainer.maxCapacity >= 0.8
                            ? "bg-warning-500"
                            : "bg-success-500"
                        }`}
                        style={{
                          width: `${(trainer.currentTrainees / trainer.maxCapacity) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {trainer.successRate}% Success Rate
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {trainer.currentTrainees} active trainees
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(trainer.status)}`}
                    >
                      {trainer.status === "active"
                        ? "Active"
                        : trainer.status === "on_leave"
                          ? "On Leave"
                          : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => console.log("View trainer:", trainer.id)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                      >
                        View
                      </button>
                      <button
                        onClick={() => setAssignTraineeModal(true)}
                        className="text-success-600 dark:text-success-400 hover:text-success-900 dark:hover:text-success-300"
                        disabled={
                          trainer.status !== "active" ||
                          trainer.currentTrainees >= trainer.maxCapacity
                        }
                      >
                        Assign
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Unqualified Caregivers Awaiting Assignment */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Unqualified Caregivers Awaiting Training
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applied For
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Submission Date
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
              {unqualifiedCaregivers.map((caregiver) => (
                <tr
                  key={caregiver.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                        <span className="text-warning-600 dark:text-warning-400 font-medium text-sm">
                          {caregiver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {caregiver.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {caregiver.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900 dark:text-white">
                      {caregiver.appliedFor}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {caregiver.experience}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900 dark:text-white">
                      {new Date(caregiver.submissionDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        caregiver.status === "training_assigned"
                          ? "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400"
                          : "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400"
                      }`}
                    >
                      {caregiver.status === "training_assigned"
                        ? "Training Assigned"
                        : "Pending Assignment"}
                    </span>
                    {caregiver.assignedTrainer && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Trainer: {caregiver.assignedTrainer}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300">
                        View Profile
                      </button>
                      {caregiver.status === "pending_assignment" && (
                        <button
                          onClick={() => setAssignTraineeModal(true)}
                          className="text-success-600 dark:text-success-400 hover:text-success-900 dark:hover:text-success-300"
                        >
                          Assign Trainer
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

      {/* Trainer Assignment Modal */}
      {assignTraineeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Assign Trainer
              </h3>
              <button
                onClick={() => setAssignTraineeModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Trainee
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option>Select trainee...</option>
                  {unqualifiedCaregivers
                    .filter((c) => c.status === "pending_assignment")
                    .map((caregiver) => (
                      <option key={caregiver.id} value={caregiver.id}>
                        {caregiver.name} - {caregiver.appliedFor}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Trainer
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option>Select trainer...</option>
                  {trainers
                    .filter(
                      (t) =>
                        t.status === "active" &&
                        t.currentTrainees < t.maxCapacity,
                    )
                    .map((trainer) => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.name} - {trainer.specializations.join(", ")} (
                        {trainer.currentTrainees}/{trainer.maxCapacity})
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Training Start Date
                </label>
                <input
                  type="date"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Notes
                </label>
                <textarea
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm h-20"
                  placeholder="Any special notes or requirements..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setAssignTraineeModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => assignTrainee("1", "1")}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Assign Trainer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Trainer Modal */}
      {addTrainerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add New Trainer
              </h3>
              <button
                onClick={() => setAddTrainerModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                  placeholder="Dr. Jane Doe"
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
                  placeholder="trainer@carefinder.lk"
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
                  Specializations
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded mr-2"
                    />
                    <span className="text-sm">Child Care</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded mr-2"
                    />
                    <span className="text-sm">Elderly Care</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded mr-2"
                    />
                    <span className="text-sm">Emergency Response</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded mr-2"
                    />
                    <span className="text-sm">Medical Assistance</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded mr-2"
                    />
                    <span className="text-sm">Special Needs</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                  placeholder="5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                  <option value="">Select location...</option>
                  <option value="colombo">Colombo</option>
                  <option value="kandy">Kandy</option>
                  <option value="galle">Galle</option>
                  <option value="jaffna">Jaffna</option>
                  <option value="negombo">Negombo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Maximum Trainees
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  defaultValue="15"
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setAddTrainerModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => setAddTrainerModal(false)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Add Trainer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
