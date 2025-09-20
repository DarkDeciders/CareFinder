"use client";

import React, { useState } from "react";

export default function CaregiverProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "+94 77 234 5678",
    address: "456 Kandy Road, Colombo 07",
    dateOfBirth: "1985-06-15",
    nic: "858567890V",
    experience: "5",
    hourlyRate: "1000",
    bio: "Experienced childcare provider with over 5 years of experience caring for children of all ages. Specialized in special needs care and early childhood development.",
    services: ["childcare", "special-needs", "tutoring"],
    languages: ["English", "Portuguese", "Sinhala"],
    availability: {
      monday: { available: true, times: ["9:00-17:00"] },
      tuesday: { available: true, times: ["9:00-17:00"] },
      wednesday: { available: true, times: ["9:00-17:00"] },
      thursday: { available: true, times: ["9:00-17:00"] },
      friday: { available: true, times: ["9:00-17:00"] },
      saturday: { available: false, times: [] },
      sunday: { available: false, times: [] },
    },
    certifications: [
      {
        name: "First Aid Certificate",
        issuer: "Red Cross Sri Lanka",
        expiry: "2025-12-31",
      },
      {
        name: "Child Development Course",
        issuer: "University of Colombo",
        expiry: "No Expiry",
      },
    ],
    references: [
      {
        name: "Dr. Priya Fernando",
        phone: "+94 77 111 2222",
        relationship: "Previous Employer",
      },
      {
        name: "Mrs. Kamala Perera",
        phone: "+94 77 333 4444",
        relationship: "Family Friend",
      },
    ],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const handleAvailabilityChange = (day: string, available: boolean) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day as keyof typeof prev.availability],
          available,
        },
      },
    }));
  };

  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { name: "", issuer: "", expiry: "" },
      ],
    }));
  };

  const updateCertification = (index: number, field: string, value: string) => {
    const updated = [...formData.certifications];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, certifications: updated }));
  };

  const removeCertification = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const addReference = () => {
    setFormData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        { name: "", phone: "", relationship: "" },
      ],
    }));
  };

  const updateReference = (index: number, field: string, value: string) => {
    const updated = [...formData.references];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, references: updated }));
  };

  const removeReference = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    console.log("Saving caregiver profile:", formData);
    setIsEditing(false);
  };

  const serviceOptions = [
    { key: "childcare", label: "Childcare" },
    { key: "elder-care", label: "Elder Care" },
    { key: "special-needs", label: "Special Needs Care" },
    { key: "tutoring", label: "Tutoring" },
    { key: "pet-care", label: "Pet Care" },
    { key: "housekeeping", label: "Light Housekeeping" },
  ];

  const languageOptions = [
    "English",
    "Sinhala",
    "Tamil",
    "Hindi",
    "Portuguese",
    "Mandarin",
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Caregiver Profile
        </h2>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Picture & Basic Info */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            MS
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {formData.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional Caregiver
            </p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                4.9 (127 reviews)
              </span>
            </div>
            {isEditing && (
              <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                Change Photo
              </button>
            )}
          </div>
        </div>

        {/* Verification Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-success-50 dark:bg-success-900/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-success-600 dark:text-success-400">✓</span>
            <span className="text-sm font-medium text-success-800 dark:text-success-300">
              Identity Verified
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success-600 dark:text-success-400">✓</span>
            <span className="text-sm font-medium text-success-800 dark:text-success-300">
              Background Checked
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success-600 dark:text-success-400">✓</span>
            <span className="text-sm font-medium text-success-800 dark:text-success-300">
              References Verified
            </span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              NIC Number
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.nic}
                onChange={(e) => handleInputChange("nic", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.nic}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date of Birth
            </label>
            {isEditing ? (
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">
                {new Date(formData.dateOfBirth).toLocaleDateString()}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Years of Experience
            </label>
            {isEditing ? (
              <input
                type="number"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">
                {formData.experience} years
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Address
            </label>
            {isEditing ? (
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">
                {formData.address}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Professional Information
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hourly Rate (LKR)
            </label>
            {isEditing ? (
              <input
                type="number"
                value={formData.hourlyRate}
                onChange={(e) =>
                  handleInputChange("hourlyRate", e.target.value)
                }
                className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">
                LKR {formData.hourlyRate}/hour
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            {isEditing ? (
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{formData.bio}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Services Offered
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceOptions.map((service) => (
                <div key={service.key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={service.key}
                    checked={formData.services.includes(service.key)}
                    onChange={() =>
                      isEditing && handleServiceToggle(service.key)
                    }
                    disabled={!isEditing}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={service.key}
                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Languages
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {languageOptions.map((language) => (
                <div key={language} className="flex items-center">
                  <input
                    type="checkbox"
                    id={language}
                    checked={formData.languages.includes(language)}
                    onChange={() => isEditing && handleLanguageToggle(language)}
                    disabled={!isEditing}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={language}
                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Availability
        </h3>
        <div className="space-y-3">
          {Object.entries(formData.availability).map(([day, schedule]) => (
            <div
              key={day}
              className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={schedule.available}
                  onChange={(e) =>
                    isEditing && handleAvailabilityChange(day, e.target.checked)
                  }
                  disabled={!isEditing}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="font-medium text-gray-900 dark:text-white capitalize">
                  {day}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {schedule.available
                  ? schedule.times.join(", ") || "9:00-17:00"
                  : "Not available"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Certifications
          </h3>
          {isEditing && (
            <button
              onClick={addCertification}
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Add Certification
            </button>
          )}
        </div>

        <div className="space-y-4">
          {formData.certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Certification {index + 1}
                </h4>
                {isEditing && (
                  <button
                    onClick={() => removeCertification(index)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) =>
                        updateCertification(index, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {cert.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Issuer
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) =>
                        updateCertification(index, "issuer", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {cert.issuer}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Expiry
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={cert.expiry}
                      onChange={(e) =>
                        updateCertification(index, "expiry", e.target.value)
                      }
                      placeholder="YYYY-MM-DD or 'No Expiry'"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {cert.expiry}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            References
          </h3>
          {isEditing && (
            <button
              onClick={addReference}
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Add Reference
            </button>
          )}
        </div>

        <div className="space-y-4">
          {formData.references.map((ref, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Reference {index + 1}
                </h4>
                {isEditing && (
                  <button
                    onClick={() => removeReference(index)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={ref.name}
                      onChange={(e) =>
                        updateReference(index, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {ref.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={ref.phone}
                      onChange={(e) =>
                        updateReference(index, "phone", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {ref.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Relationship
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={ref.relationship}
                      onChange={(e) =>
                        updateReference(index, "relationship", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm">
                      {ref.relationship}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
