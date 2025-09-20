import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import CameraCapture from "../../components/CameraCapture";
import LocationTracker from "../../components/LocationTracker";

const assignments = [
  {
    id: 1,
    assignmentNumber: "VER-2024-1201",
    family: "The Perera Family",
    caregiver: "Sarah Chen",
    address: "45 Galle Road, Colombo 03",
    serviceType: "Child Care",
    scheduledTime: "2024-12-20T09:00:00",
    status: "scheduled",
    priority: "normal",
    notes: "First time verification for new caregiver",
    estimatedDuration: 45,
  },
  {
    id: 2,
    assignmentNumber: "VER-2024-1202",
    family: "The Silva Family",
    caregiver: "Mike Johnson",
    address: "78 Bauddhaloka Mawatha, Colombo 07",
    serviceType: "Elderly Care",
    scheduledTime: "2024-12-20T11:30:00",
    status: "in-progress",
    priority: "high",
    notes: "Follow-up verification - previous issues reported",
    estimatedDuration: 60,
  },
  {
    id: 3,
    assignmentNumber: "VER-2024-1203",
    family: "The Fernando Family",
    caregiver: "Emma Williams",
    address: "12 Horton Place, Colombo 07",
    serviceType: "Child Care",
    scheduledTime: "2024-12-20T14:00:00",
    status: "completed",
    priority: "normal",
    notes: "Routine quality check",
    estimatedDuration: 30,
    completedTime: "2024-12-20T14:25:00",
    verificationResult: "Satisfactory",
  },
  {
    id: 4,
    assignmentNumber: "VER-2024-1204",
    family: "The Jayawardene Family",
    caregiver: "David Lee",
    address: "23 Ward Place, Colombo 07",
    serviceType: "Elderly Care",
    scheduledTime: "2024-12-20T16:30:00",
    status: "scheduled",
    priority: "normal",
    notes: "Initial assessment for new caregiver placement",
    estimatedDuration: 50,
  },
];

export default function AssignmentsScreen() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showCameraModal, setShowCameraModal] = useState(false);

  const filteredAssignments =
    filterStatus === "all"
      ? assignments
      : assignments.filter((a) => a.status === filterStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "normal":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStartAssignment = (assignment) => {
    Alert.alert(
      "Start Assignment",
      `Start verification for ${assignment.family}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Start",
          onPress: () => {
            Alert.alert(
              "Assignment Started",
              "GPS tracking activated. Good luck!",
            );
            // In real app, update assignment status and start tracking
          },
        },
      ],
    );
  };

  const handleNavigateToLocation = (assignment) => {
    const { address } = assignment;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    Alert.alert(
      "Open Navigation",
      "Open Google Maps for turn-by-turn directions?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Open Maps",
          onPress: () => Linking.openURL(url),
        },
      ],
    );
  };

  const handleCallFamily = (assignment) => {
    // In real app, this would use the actual phone number
    const phoneNumber = "+94771234567";

    Alert.alert("Call Family", `Call ${assignment.family}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Call",
        onPress: () => Linking.openURL(`tel:${phoneNumber}`),
      },
    ]);
  };

  const handleMarkArrived = (assignment) => {
    Alert.alert("Mark Arrived", "Confirm you have arrived at the location?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Confirm",
        onPress: () => {
          setShowLocationModal(true);
          Alert.alert(
            "Location Logged",
            "Your arrival has been recorded with GPS coordinates.",
          );
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold text-gray-800">
            My Assignments
          </Text>
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-blue-700 text-sm font-medium">
              4/5 Capacity
            </Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-2"
        >
          {["all", "scheduled", "in-progress", "completed"].map((status) => (
            <TouchableOpacity
              key={status}
              onPress={() => setFilterStatus(status)}
              className={`mr-3 px-4 py-2 rounded-full border ${
                filterStatus === status
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filterStatus === status ? "text-white" : "text-gray-600"
                }`}
              >
                {status === "all"
                  ? "All"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {filteredAssignments.map((assignment) => (
          <TouchableOpacity
            key={assignment.id}
            onPress={() => {
              setSelectedAssignment(assignment);
              setShowModal(true);
            }}
            className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100"
          >
            {/* Assignment Header */}
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg font-semibold text-gray-800">
                {assignment.family}
              </Text>
              <View
                className={`px-2 py-1 rounded-full border ${getStatusColor(assignment.status)}`}
              >
                <Text className="text-xs font-medium">
                  {assignment.status === "in-progress"
                    ? "In Progress"
                    : assignment.status.charAt(0).toUpperCase() +
                      assignment.status.slice(1)}
                </Text>
              </View>
            </View>

            {/* Assignment Details */}
            <View className="mb-3">
              <View className="flex-row items-center mb-2">
                <Ionicons name="person-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">
                  Caregiver: {assignment.caregiver}
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Ionicons name="location-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2 flex-1">
                  {assignment.address}
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">
                  {formatTime(assignment.scheduledTime)}
                </Text>
                <Text className="text-gray-500 ml-2">
                  • {assignment.estimatedDuration} min
                </Text>
              </View>
            </View>

            {/* Priority and Service Type */}
            <View className="flex-row items-center justify-between">
              <View
                className={`px-2 py-1 rounded-full border ${getPriorityColor(assignment.priority)}`}
              >
                <Text className="text-xs font-medium">
                  {assignment.priority.charAt(0).toUpperCase() +
                    assignment.priority.slice(1)}{" "}
                  Priority
                </Text>
              </View>
              <Text className="text-sm text-gray-500">
                {assignment.serviceType}
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="flex-row justify-end mt-3 pt-3 border-t border-gray-100">
              {assignment.status === "scheduled" && (
                <>
                  <TouchableOpacity
                    onPress={() => handleNavigateToLocation(assignment)}
                    className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mr-2"
                  >
                    <Text className="text-blue-600 text-sm font-medium">
                      Navigate
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleStartAssignment(assignment)}
                    className="bg-green-50 border border-green-200 rounded-lg px-3 py-2"
                  >
                    <Text className="text-green-600 text-sm font-medium">
                      Start
                    </Text>
                  </TouchableOpacity>
                </>
              )}
              {assignment.status === "in-progress" && (
                <TouchableOpacity className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                  <Text className="text-yellow-600 text-sm font-medium">
                    Complete
                  </Text>
                </TouchableOpacity>
              )}
              {assignment.status === "completed" && (
                <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <Text className="text-gray-600 text-sm font-medium">
                    View Report
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Assignment Detail Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">
                Assignment Details
              </Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          {selectedAssignment && (
            <ScrollView className="flex-1 px-4 py-4">
              <View className="bg-gray-50 rounded-2xl p-4 mb-4">
                <Text className="text-lg font-semibold text-gray-800 mb-2">
                  {selectedAssignment.family}
                </Text>
                <Text className="text-gray-600 mb-1">
                  {selectedAssignment.assignmentNumber}
                </Text>
                <Text className="text-gray-600">
                  {selectedAssignment.address}
                </Text>
              </View>

              <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
                <Text className="text-base font-semibold text-gray-800 mb-3">
                  Service Details
                </Text>
                <Text className="text-gray-600 mb-2">
                  Service Type: {selectedAssignment.serviceType}
                </Text>
                <Text className="text-gray-600 mb-2">
                  Caregiver: {selectedAssignment.caregiver}
                </Text>
                <Text className="text-gray-600 mb-2">
                  Duration: {selectedAssignment.estimatedDuration} minutes
                </Text>
                <Text className="text-gray-600">
                  Time: {formatTime(selectedAssignment.scheduledTime)}
                </Text>
              </View>

              <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
                <Text className="text-base font-semibold text-gray-800 mb-3">
                  Notes
                </Text>
                <Text className="text-gray-600 leading-5">
                  {selectedAssignment.notes}
                </Text>
              </View>

              {selectedAssignment.verificationResult && (
                <View className="bg-green-50 rounded-2xl p-4 border border-green-200">
                  <Text className="text-base font-semibold text-green-800 mb-2">
                    Verification Result
                  </Text>
                  <Text className="text-green-700">
                    {selectedAssignment.verificationResult}
                  </Text>
                  <Text className="text-green-600 text-sm mt-1">
                    Completed: {formatTime(selectedAssignment.completedTime)}
                  </Text>
                </View>
              )}
            </ScrollView>
          )}
        </View>
      </Modal>

      {/* Location Tracking Modal */}
      <Modal
        visible={showLocationModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">
                Location Tracking
              </Text>
              <TouchableOpacity onPress={() => setShowLocationModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="flex-1 px-4 py-4">
            <LocationTracker
              onLocationUpdate={(location) => {
                console.log("Location updated:", location);
              }}
              autoTrack={true}
            />

            <View className="mt-6">
              <Text className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
              </Text>
              <View className="space-y-3">
                <TouchableOpacity
                  onPress={() => handleMarkArrived(selectedAssignment)}
                  className="bg-green-500 rounded-xl py-4 flex-row items-center justify-center"
                >
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={24}
                    color="#ffffff"
                  />
                  <Text className="text-white font-semibold ml-2">
                    Mark Arrived
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleCallFamily(selectedAssignment)}
                  className="bg-blue-500 rounded-xl py-4 flex-row items-center justify-center"
                >
                  <Ionicons name="call-outline" size={24} color="#ffffff" />
                  <Text className="text-white font-semibold ml-2">
                    Call Family
                  </Text>
                </TouchableOpacity>

                <CameraCapture
                  onPhotoTaken={(photoUri) => {
                    console.log("Photo captured:", photoUri);
                    Alert.alert(
                      "Photo Saved",
                      "Evidence photo has been attached to this assignment.",
                    );
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Enhanced Assignment Actions */}
      {selectedAssignment && (
        <Modal
          visible={showCameraModal}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setShowCameraModal(false)}
        >
          <View className="flex-1 bg-white">
            <View className="pt-12 pb-4 px-4 border-b border-gray-200">
              <View className="flex-row items-center justify-between">
                <Text className="text-xl font-bold text-gray-800">
                  Field Documentation
                </Text>
                <TouchableOpacity onPress={() => setShowCameraModal(false)}>
                  <Ionicons name="close" size={24} color="#6b7280" />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView className="flex-1 px-4 py-4">
              <View className="bg-gray-50 rounded-xl p-4 mb-6">
                <Text className="text-lg font-semibold text-gray-800 mb-2">
                  {selectedAssignment.family}
                </Text>
                <Text className="text-gray-600">
                  {selectedAssignment.address}
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                  Service Type: {selectedAssignment.serviceType}
                </Text>
              </View>

              <View className="space-y-4">
                <CameraCapture
                  onPhotoTaken={(photoUri) => {
                    console.log("Photo captured for assignment:", photoUri);
                    Alert.alert(
                      "Evidence Captured",
                      "Photo has been saved to assignment documentation.",
                    );
                  }}
                />

                <TouchableOpacity className="bg-yellow-500 rounded-xl py-4 flex-row items-center justify-center">
                  <Ionicons name="warning-outline" size={24} color="#ffffff" />
                  <Text className="text-white font-semibold ml-2">
                    Report Issue
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-green-500 rounded-xl py-4 flex-row items-center justify-center">
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={24}
                    color="#ffffff"
                  />
                  <Text className="text-white font-semibold ml-2">
                    Complete Assignment
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
}
