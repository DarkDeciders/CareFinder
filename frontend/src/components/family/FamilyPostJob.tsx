"use client";

import React, { useState } from "react";

type ServicePost = {
  id: number;
  title: string;
  clientName: string;
  clientAge?: number;
  serviceType: string[];
  description: string;
  location: string;
  schedule: {
    date: string;
    startTime: string;
    endTime: string;
    recurring: boolean;
    frequency?: string;
  };
  requirements: string[];
  budget: {
    hourlyRate: number;
    currency: string;
  };
  urgency: "low" | "medium" | "high";
  postedAt: string;
  status: "active" | "filled" | "expired";
  applicants: number;
};

export default function FamilyPostJob() {
  const [activeTab, setActiveTab] = useState<"post" | "manage">("post");
  const [toast, setToast] = useState<string | null>(null);

  // Form state for posting new job
  const [formData, setFormData] = useState({
    title: "",
    clientName: "",
    clientAge: "",
    serviceType: [] as string[],
    description: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    recurring: false,
    frequency: "",
    requirements: "",
    hourlyRate: "",
    urgency: "medium" as "low" | "medium" | "high",
  });

  // Sample posted jobs
  const [postedJobs] = useState<ServicePost[]>([
    {
      id: 1,
      title: "Childcare for 6-year-old",
      clientName: "Emma",
      clientAge: 6,
      serviceType: ["Childcare", "Tutoring"],
      description: "Looking for a caring and patient caregiver for our 6-year-old daughter. She loves reading and drawing.",
      location: "Colombo 03",
      schedule: {
        date: "2025-09-25",
        startTime: "15:00",
        endTime: "19:00",
        recurring: true,
        frequency: "Weekly"
      },
      requirements: ["Experience with children", "First Aid certified", "English speaking"],
      budget: {
        hourlyRate: 1200,
        currency: "LKR"
      },
      urgency: "medium",
      postedAt: "2 days ago",
      status: "active",
      applicants: 7
    },
    {
      id: 2,
      title: "Elder care for grandmother",
      clientName: "Mrs. Perera",
      clientAge: 82,
      serviceType: ["Elder Care", "Companion Care"],
      description: "Seeking a compassionate caregiver for our 82-year-old grandmother. She needs help with daily activities and companionship.",
      location: "Dehiwala",
      schedule: {
        date: "2025-09-22",
        startTime: "09:00",
        endTime: "17:00",
        recurring: false,
        frequency: ""
      },
      requirements: ["Elder care experience", "Patience", "Sinhala speaking"],
      budget: {
        hourlyRate: 1100,
        currency: "LKR"
      },
      urgency: "high",
      postedAt: "5 hours ago",
      status: "active",
      applicants: 12
    }
  ]);

  React.useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const serviceTypes = [
    "Childcare",
    "Elder Care",
    "Companion Care",
    "Special Needs Care",
    "Tutoring",
    "Light Housekeeping",
    "Pet Care"
  ];

  const handleServiceTypeToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter(s => s !== service)
        : [...prev.serviceType, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.clientName || !formData.description || formData.serviceType.length === 0) {
      setToast("Please fill in all required fields");
      return;
    }

    // Here you would normally send to backend
    setToast("Service need posted successfully! Caregivers can now apply.");

    // Reset form
    setFormData({
      title: "",
      clientName: "",
      clientAge: "",
      serviceType: [],
      description: "",
      location: "",
      date: "",
      startTime: "",
      endTime: "",
      recurring: false,
      frequency: "",
      requirements: "",
      hourlyRate: "",
      urgency: "medium",
    });
  };

  const ServiceTag = ({ service }: { service: string }) => {
    const colorMap: { [key: string]: string } = {
      Childcare: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Elder Care": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "Companion Care": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "Special Needs Care": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      Tutoring: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      "Light Housekeeping": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      "Pet Care": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    };
    return (
      <span className={`text-xs font-medium mr-1 mb-1 px-2 py-1 rounded-full ${colorMap[service] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}>
        {service}
      </span>
    );
  };

  const UrgencyBadge = ({ urgency }: { urgency: "low" | "medium" | "high" }) => {
    const urgencyColors = {
      low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };

    return (
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${urgencyColors[urgency]}`}>
        {urgency.toUpperCase()} PRIORITY
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
          Post Service Needs
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full font-medium">
            Let Caregivers Apply to You
          </span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("post")}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "post"
              ? "bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          📝 Post New Need
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "manage"
              ? "bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          }`}
        >
          📊 Manage Posts ({postedJobs.length})
        </button>
      </div>

      {activeTab === "post" && (
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Childcare for 6-year-old"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="Who needs care?"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Client Age
                  </label>
                  <input
                    type="number"
                    value={formData.clientAge}
                    onChange={(e) => setFormData({ ...formData, clientAge: e.target.value })}
                    placeholder="Age (if applicable)"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Colombo 03"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Details</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Types Needed *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceTypes.map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.serviceType.includes(service)}
                          onChange={() => handleServiceTypeToggle(service)}
                          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Hourly Rate (LKR) *
                  </label>
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                    placeholder="e.g., 1200"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as "low" | "medium" | "high" })}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="low">Low - Flexible timing</option>
                    <option value="medium">Medium - Within a week</option>
                    <option value="high">High - ASAP</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    End Time *
                  </label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.recurring}
                    onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">This is a recurring need</span>
                </label>
                {formData.recurring && (
                  <div className="mt-2">
                    <select
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                      className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Description & Requirements */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what you're looking for in detail..."
                  rows={4}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Special Requirements
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="e.g., First Aid certified, Experience with special needs, etc."
                  rows={3}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setFormData({
                  title: "",
                  clientName: "",
                  clientAge: "",
                  serviceType: [],
                  description: "",
                  location: "",
                  date: "",
                  startTime: "",
                  endTime: "",
                  recurring: false,
                  frequency: "",
                  requirements: "",
                  hourlyRate: "",
                  urgency: "medium",
                })}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                📝 Post Service Need
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "manage" && (
        <div className="space-y-4">
          {postedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                      <UrgencyBadge urgency={job.urgency} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Posted {job.postedAt}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Client: {job.clientName} {job.clientAge && `(${job.clientAge} years)`}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {job.location} • {job.schedule.date} • {job.schedule.startTime}-{job.schedule.endTime}
                    {job.schedule.recurring && ` (${job.schedule.frequency})`}
                  </p>

                  <div className="mb-2 flex flex-wrap gap-1">
                    {job.serviceType.map((service) => (
                      <ServiceTag key={service} service={service} />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                    {job.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <span className="text-gray-500 dark:text-gray-400">👥</span>
                      <span className="font-medium text-primary-600 dark:text-primary-400">
                        {job.applicants} applicants
                      </span>
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      LKR {job.budget.hourlyRate}/hr
                    </span>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
                  <div className="flex flex-col space-y-2">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View Applicants ({job.applicants})
                    </button>
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Edit Post
                    </button>
                    <button className="border border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Delete Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {postedJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-4xl mb-4">📝</div>
              <p className="text-gray-500 dark:text-gray-400">
                No service posts yet. Create your first post to get caregivers to apply!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50">
          <div className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}