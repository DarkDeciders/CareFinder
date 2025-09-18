'use client'

import React, { useState } from 'react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    general: {
      siteName: 'CareFinder',
      siteDescription: 'Trusted care services connecting families with verified caregivers across Sri Lanka',
      contactEmail: 'support@carefinder.lk',
      contactPhone: '+94 11 234 5678',
      address: '123 Business District, Colombo 02, Sri Lanka',
      timezone: 'Asia/Colombo',
      currency: 'LKR',
      language: 'en'
    },
    platform: {
      commissionRate: '15',
      minimumHourlyRate: '500',
      maximumHourlyRate: '5000',
      bookingCancellationWindow: '24',
      autoApproveBookings: false,
      requireBackgroundCheck: true,
      requireReferences: true,
      maxCancellationsPerMonth: '3'
    },
    payment: {
      paymentProcessor: 'payhere',
      payhereApiKey: '',
      payhereSecretKey: '',
      enableEscrow: true,
      escrowReleaseDelay: '24',
      refundPolicy: '7',
      processingFee: '2.5'
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true,
      adminAlerts: true,
      weeklyReports: true,
      monthlyReports: true,
      systemMaintenance: true
    },
    security: {
      sessionTimeout: '60',
      passwordMinLength: '8',
      requireTwoFactor: true,
      loginAttempts: '5',
      lockoutDuration: '30',
      enableApiRateLimit: true,
      maxApiRequests: '1000',
      backupFrequency: 'daily'
    },
    content: {
      termsOfService: '',
      privacyPolicy: '',
      cookiePolicy: '',
      safetyGuidelines: '',
      communityGuidelines: '',
      helpDocumentation: ''
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSettingChange = (section: string, key: string, value: string | boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // API call to save settings
      console.log('Saving settings:', settings);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('Settings saved successfully!');
    } catch (error) {
      alert('Error saving settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { key: 'general', label: 'General', icon: '⚙️' },
    { key: 'platform', label: 'Platform', icon: '🏢' },
    { key: 'payment', label: 'Payment', icon: '💳' },
    { key: 'notifications', label: 'Notifications', icon: '🔔' },
    { key: 'security', label: 'Security', icon: '🔒' },
    { key: 'content', label: 'Content', icon: '📄' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Settings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Site Name</label>
                <input
                  type="text"
                  value={settings.general.siteName}
                  onChange={(e) => handleSettingChange('general', 'siteName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Email</label>
                <input
                  type="email"
                  value={settings.general.contactEmail}
                  onChange={(e) => handleSettingChange('general', 'contactEmail', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Phone</label>
                <input
                  type="tel"
                  value={settings.general.contactPhone}
                  onChange={(e) => handleSettingChange('general', 'contactPhone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
                <select
                  value={settings.general.timezone}
                  onChange={(e) => handleSettingChange('general', 'timezone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="Asia/Colombo">Asia/Colombo</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
                <select
                  value={settings.general.currency}
                  onChange={(e) => handleSettingChange('general', 'currency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="LKR">Sri Lankan Rupee (LKR)</option>
                  <option value="USD">US Dollar (USD)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Language</label>
                <select
                  value={settings.general.language}
                  onChange={(e) => handleSettingChange('general', 'language', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="si">Sinhala</option>
                  <option value="ta">Tamil</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Site Description</label>
              <textarea
                value={settings.general.siteDescription}
                onChange={(e) => handleSettingChange('general', 'siteDescription', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Business Address</label>
              <textarea
                value={settings.general.address}
                onChange={(e) => handleSettingChange('general', 'address', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 'platform':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Platform Settings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Commission Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={settings.platform.commissionRate}
                  onChange={(e) => handleSettingChange('platform', 'commissionRate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Minimum Hourly Rate (LKR)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.platform.minimumHourlyRate}
                  onChange={(e) => handleSettingChange('platform', 'minimumHourlyRate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Maximum Hourly Rate (LKR)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.platform.maximumHourlyRate}
                  onChange={(e) => handleSettingChange('platform', 'maximumHourlyRate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Booking Cancellation Window (hours)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.platform.bookingCancellationWindow}
                  onChange={(e) => handleSettingChange('platform', 'bookingCancellationWindow', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max Cancellations per Month</label>
                <input
                  type="number"
                  min="0"
                  value={settings.platform.maxCancellationsPerMonth}
                  onChange={(e) => handleSettingChange('platform', 'maxCancellationsPerMonth', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Auto-approve Bookings</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automatically approve bookings without manual review</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.platform.autoApproveBookings}
                  onChange={(e) => handleSettingChange('platform', 'autoApproveBookings', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Require Background Check</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mandatory background verification for caregivers</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.platform.requireBackgroundCheck}
                  onChange={(e) => handleSettingChange('platform', 'requireBackgroundCheck', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Require References</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mandatory reference verification for caregivers</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.platform.requireReferences}
                  onChange={(e) => handleSettingChange('platform', 'requireReferences', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Settings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Payment Processor</label>
                <select
                  value={settings.payment.paymentProcessor}
                  onChange={(e) => handleSettingChange('payment', 'paymentProcessor', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="payhere">PayHere</option>
                  <option value="stripe">Stripe</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Processing Fee (%)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={settings.payment.processingFee}
                  onChange={(e) => handleSettingChange('payment', 'processingFee', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Escrow Release Delay (hours)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.payment.escrowReleaseDelay}
                  onChange={(e) => handleSettingChange('payment', 'escrowReleaseDelay', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Refund Policy (days)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.payment.refundPolicy}
                  onChange={(e) => handleSettingChange('payment', 'refundPolicy', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">PayHere API Key</label>
                <input
                  type="password"
                  value={settings.payment.payhereApiKey}
                  onChange={(e) => handleSettingChange('payment', 'payhereApiKey', e.target.value)}
                  placeholder="Enter PayHere API Key"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">PayHere Secret Key</label>
                <input
                  type="password"
                  value={settings.payment.payhereSecretKey}
                  onChange={(e) => handleSettingChange('payment', 'payhereSecretKey', e.target.value)}
                  placeholder="Enter PayHere Secret Key"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Enable Escrow Service</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Hold payments until service completion</p>
              </div>
              <input
                type="checkbox"
                checked={settings.payment.enableEscrow}
                onChange={(e) => handleSettingChange('payment', 'enableEscrow', e.target.checked)}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notification Settings</h3>

            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="mb-2 sm:mb-0">
                    <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {key === 'emailNotifications' && 'Send notifications via email'}
                      {key === 'smsNotifications' && 'Send notifications via SMS'}
                      {key === 'pushNotifications' && 'Send push notifications to mobile apps'}
                      {key === 'adminAlerts' && 'Send alerts to administrators'}
                      {key === 'weeklyReports' && 'Generate and send weekly reports'}
                      {key === 'monthlyReports' && 'Generate and send monthly reports'}
                      {key === 'systemMaintenance' && 'Notify users about system maintenance'}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Settings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  min="5"
                  max="480"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleSettingChange('security', 'sessionTimeout', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password Minimum Length</label>
                <input
                  type="number"
                  min="6"
                  max="32"
                  value={settings.security.passwordMinLength}
                  onChange={(e) => handleSettingChange('security', 'passwordMinLength', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max Login Attempts</label>
                <input
                  type="number"
                  min="3"
                  max="10"
                  value={settings.security.loginAttempts}
                  onChange={(e) => handleSettingChange('security', 'loginAttempts', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Lockout Duration (minutes)</label>
                <input
                  type="number"
                  min="5"
                  max="120"
                  value={settings.security.lockoutDuration}
                  onChange={(e) => handleSettingChange('security', 'lockoutDuration', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max API Requests/hour</label>
                <input
                  type="number"
                  min="100"
                  max="10000"
                  value={settings.security.maxApiRequests}
                  onChange={(e) => handleSettingChange('security', 'maxApiRequests', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Backup Frequency</label>
                <select
                  value={settings.security.backupFrequency}
                  onChange={(e) => handleSettingChange('security', 'backupFrequency', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-medium text-gray-900 dark:text-white">Require Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mandatory 2FA for all admin accounts</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.security.requireTwoFactor}
                  onChange={(e) => handleSettingChange('security', 'requireTwoFactor', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 flex-shrink-0"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-medium text-gray-900 dark:text-white">Enable API Rate Limiting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Protect against API abuse and DDoS attacks</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.security.enableApiRateLimit}
                  onChange={(e) => handleSettingChange('security', 'enableApiRateLimit', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Management</h3>

            <div className="space-y-6">
              {Object.entries(settings.content).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <textarea
                    value={value as string}
                    onChange={(e) => handleSettingChange('content', key, e.target.value)}
                    rows={6}
                    placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} content...`}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">System Settings</h2>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {isSaving ? 'Saving...' : 'Save All Settings'}
        </button>
      </div>

      {/* Mobile Tab Navigation */}
      <div className="block lg:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.icon} {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tab Navigation */}
      <div className="hidden lg:block">
        <nav className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.key
                  ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        {renderTabContent()}
      </div>
    </div>
  );
}