import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);

  // Mock profile data
  const [profileData, setProfileData] = useState({
    name: 'Rohan Jayasinghe',
    agentId: 'AGT-2024-003',
    email: 'rohan.j@carefinder.lk',
    phone: '+94 71 234 5678',
    zone: 'Central Colombo',
    workingHours: '8:00 AM - 6:00 PM',
    maxAssignments: '5',
    vehicleType: 'Motorcycle',
    licensePlate: 'CAR-2345'
  });

  const performanceStats = [
    { date: '2024-12-20', assignments: 4, satisfaction: 98, issues: 0, status: 'excellent' },
    { date: '2024-12-19', assignments: 5, satisfaction: 94, issues: 1, status: 'good' },
    { date: '2024-12-18', assignments: 3, satisfaction: 100, issues: 0, status: 'excellent' },
    { date: '2024-12-17', assignments: 4, satisfaction: 92, issues: 0, status: 'good' },
  ];

  const emergencyContacts = [
    { name: 'Supervisor - Priya Mendis', phone: '+94 77 345 6789', relationship: 'Direct Supervisor' },
    { name: 'Admin Control Center', phone: '+94 11 234 5678', relationship: 'Operations Center' },
    { name: 'Emergency Services', phone: '119', relationship: 'Police Emergency' },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your profile has been saved successfully.');
  };

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: () => {
            // Clear any stored user data/tokens here if needed
            router.replace('/login');
          }
        }
      ]
    );
  };

  const handleChangeProfilePicture = () => {
    Alert.alert(
      'Change Profile Picture',
      'Choose an option',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Take Photo', onPress: () => Alert.alert('Camera', 'Opening camera...') },
        { text: 'Choose from Gallery', onPress: () => Alert.alert('Gallery', 'Opening gallery...') }
      ]
    );
  };

  const handleEmergencyCall = (contact: any) => {
    Alert.alert(
      'Emergency Call',
      `Call ${contact.name}?\n${contact.phone}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => {
            // In real app, this would initiate a phone call
            Alert.alert('Calling...', `Connecting to ${contact.name}`);
          }
        }
      ]
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/logo.png')}
              className="w-8 h-8 mr-3"
              resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-gray-800">Agent Profile</Text>
          </View>
          <TouchableOpacity
            onPress={isEditing ? handleSaveProfile : () => setIsEditing(true)}
            className={`px-4 py-2 rounded-lg ${isEditing ? 'bg-green-500' : 'bg-blue-500'}`}
          >
            <Text className="text-white font-medium">
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <View className="items-center mb-4">
            <TouchableOpacity
              onPress={handleChangeProfilePicture}
              className="relative"
            >
              <View
                className="w-20 h-20 rounded-full items-center justify-center mb-3"
                style={{ backgroundColor: '#3b82f6' }}
              >
                <Text className="text-white text-2xl font-bold">RJ</Text>
                {/* Online Status Circle */}
                <View
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: '#22c55e',
                    borderWidth: 2,
                    borderColor: '#ffffff'
                  }}
                />
              </View>
              {/* Camera Icon Overlay */}
              <View
                className="absolute bottom-2 right-0 w-6 h-6 rounded-full items-center justify-center"
                style={{
                  backgroundColor: '#3b82f6',
                  borderWidth: 2,
                  borderColor: '#ffffff'
                }}
              >
                <Ionicons name="camera" size={12} color="#ffffff" />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-gray-800">{profileData.name}</Text>
            <Text className="text-gray-600">Quality Assurance Agent</Text>

            <View className="flex-row space-x-2 mt-3">
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-700 text-sm font-medium">Active</Text>
              </View>
              <View className="bg-blue-100 px-3 py-1 rounded-full">
                <Text className="text-blue-700 text-sm font-medium">Zone: {profileData.zone}</Text>
              </View>
            </View>
          </View>

          {/* Contact Info */}
          <View className="space-y-3">
            <View className="flex-row items-center">
              <Ionicons name="mail-outline" size={20} color="#6b7280" />
              <Text className="text-gray-600 ml-3">{profileData.email}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="call-outline" size={20} color="#6b7280" />
              <Text className="text-gray-600 ml-3">{profileData.phone}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={20} color="#6b7280" />
              <Text className="text-gray-600 ml-3">Colombo 07, Sri Lanka</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="calendar-outline" size={20} color="#6b7280" />
              <Text className="text-gray-600 ml-3">Joined March 2024</Text>
            </View>
          </View>
        </View>

        {/* Performance Stats */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-gray-800">Performance Overview</Text>
            <TouchableOpacity onPress={() => setShowStatsModal(true)}>
              <Text className="text-blue-600 text-sm font-medium">View Details</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">187</Text>
              <Text className="text-gray-600 text-sm">Total Tasks</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">97%</Text>
              <Text className="text-gray-600 text-sm">Success Rate</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-yellow-600">4.9</Text>
              <Text className="text-gray-600 text-sm">Avg Rating</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-purple-600">2.3K</Text>
              <Text className="text-gray-600 text-sm">KM Traveled</Text>
            </View>
          </View>
        </View>

        {/* Professional Information */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Professional Information</Text>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Agent ID</Text>
              <Text className="text-gray-800 font-medium">{profileData.agentId}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Department</Text>
              <Text className="text-gray-800 font-medium">Quality Assurance</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Coverage Zone</Text>
              {isEditing ? (
                <TextInput
                  className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-right"
                  value={profileData.zone}
                  onChangeText={(text) => setProfileData({...profileData, zone: text})}
                />
              ) : (
                <Text className="text-gray-800 font-medium">{profileData.zone}</Text>
              )}
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Working Hours</Text>
              {isEditing ? (
                <TextInput
                  className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-right"
                  value={profileData.workingHours}
                  onChangeText={(text) => setProfileData({...profileData, workingHours: text})}
                />
              ) : (
                <Text className="text-gray-800 font-medium">{profileData.workingHours}</Text>
              )}
            </View>
          </View>
        </View>

        {/* Vehicle Information */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Vehicle Information</Text>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Vehicle Type</Text>
              {isEditing ? (
                <TextInput
                  className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-right"
                  value={profileData.vehicleType}
                  onChangeText={(text) => setProfileData({...profileData, vehicleType: text})}
                />
              ) : (
                <Text className="text-gray-800 font-medium">{profileData.vehicleType}</Text>
              )}
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">License Plate</Text>
              {isEditing ? (
                <TextInput
                  className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-right"
                  value={profileData.licensePlate}
                  onChangeText={(text) => setProfileData({...profileData, licensePlate: text})}
                />
              ) : (
                <Text className="text-gray-800 font-medium">{profileData.licensePlate}</Text>
              )}
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600">Insurance Valid Until</Text>
              <Text className="text-gray-800 font-medium">June 15, 2025</Text>
            </View>
          </View>
        </View>

        {/* Emergency Contacts */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-gray-800">Emergency Contacts</Text>
            <TouchableOpacity onPress={() => setShowEmergencyModal(true)}>
              <Text className="text-blue-600 text-sm font-medium">View All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => handleEmergencyCall(emergencyContacts[0])}
            className="bg-red-50 border border-red-200 rounded-xl p-4"
          >
            <View className="flex-row items-center">
              <Ionicons name="call-outline" size={24} color="#dc2626" />
              <View className="ml-3 flex-1">
                <Text className="text-red-800 font-semibold">Emergency Supervisor</Text>
                <Text className="text-red-600 text-sm">Tap to call immediately</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#dc2626" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View className="bg-white rounded-2xl p-4 mb-8 shadow-sm border border-gray-100">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</Text>

          <View className="space-y-3">
            <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gray-50 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="notifications-outline" size={24} color="#6b7280" />
                <Text className="text-gray-800 ml-3">Notification Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gray-50 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="help-circle-outline" size={24} color="#6b7280" />
                <Text className="text-gray-800 ml-3">Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-3 bg-red-50 rounded-xl"
              onPress={handleSignOut}
            >
              <View className="flex-row items-center">
                <Ionicons name="log-out-outline" size={24} color="#dc2626" />
                <Text className="text-red-600 ml-3">Sign Out</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#dc2626" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Emergency Contacts Modal */}
      <Modal
        visible={showEmergencyModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowEmergencyModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">Emergency Contacts</Text>
              <TouchableOpacity onPress={() => setShowEmergencyModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="flex-1 px-4 py-4">
            {emergencyContacts.map((contact, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleEmergencyCall(contact)}
                className="bg-white border border-gray-200 rounded-2xl p-4 mb-4"
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">{contact.name}</Text>
                    <Text className="text-gray-600 text-sm">{contact.relationship}</Text>
                    <Text className="text-gray-800 font-medium mt-1">{contact.phone}</Text>
                  </View>
                  <View className="bg-green-100 w-12 h-12 rounded-xl items-center justify-center">
                    <Ionicons name="call" size={24} color="#059669" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      {/* Performance Stats Modal */}
      <Modal
        visible={showStatsModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowStatsModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">Performance Details</Text>
              <TouchableOpacity onPress={() => setShowStatsModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="flex-1 px-4 py-4">
            {performanceStats.map((day, index) => (
              <View key={index} className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-lg font-semibold text-gray-800">
                    {new Date(day.date).toLocaleDateString()}
                  </Text>
                  <View className={`px-3 py-1 rounded-full ${
                    day.status === 'excellent' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <Text className={`text-sm font-medium ${
                      day.status === 'excellent' ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      {day.status === 'excellent' ? 'Excellent' : 'Good'}
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-between">
                  <View>
                    <Text className="text-gray-600 text-sm">Assignments</Text>
                    <Text className="text-gray-800 font-semibold">{day.assignments}</Text>
                  </View>
                  <View>
                    <Text className="text-gray-600 text-sm">Satisfaction</Text>
                    <Text className="text-gray-800 font-semibold">{day.satisfaction}%</Text>
                  </View>
                  <View>
                    <Text className="text-gray-600 text-sm">Issues</Text>
                    <Text className="text-gray-800 font-semibold">{day.issues}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}