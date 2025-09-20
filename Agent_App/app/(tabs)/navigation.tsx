import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const assignments = [
  {
    id: 1,
    family: "The Perera Family",
    address: "45 Galle Road, Colombo 03",
    coordinates: { lat: 6.9147, lng: 79.8522 },
    time: "09:00",
    status: "next",
    distance: 2.3,
    estimatedTravel: 8,
  },
  {
    id: 2,
    family: "The Silva Family",
    address: "78 Bauddhaloka Mawatha, Colombo 07",
    coordinates: { lat: 6.9147, lng: 79.8612 },
    time: "11:30",
    status: "scheduled",
    distance: 4.1,
    estimatedTravel: 12,
  },
  {
    id: 3,
    family: "The Fernando Family",
    address: "12 Horton Place, Colombo 07",
    coordinates: { lat: 6.9088, lng: 79.8653 },
    time: "14:00",
    status: "scheduled",
    distance: 1.8,
    estimatedTravel: 6,
  },
  {
    id: 4,
    family: "The Jayawardene Family",
    address: "23 Ward Place, Colombo 07",
    coordinates: { lat: 6.927, lng: 79.8612 },
    time: "16:30",
    status: "scheduled",
    distance: 3.2,
    estimatedTravel: 10,
  },
];

export default function NavigationScreen() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [routeOptimized, setRouteOptimized] = useState(false);

  const handleNavigate = (assignment) => {
    Alert.alert(
      "Start Navigation",
      `Navigate to ${assignment.family}?\n${assignment.address}`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Start",
          onPress: () => {
            // In real app, this would open Google Maps or Waze
            Alert.alert("Navigation Started", "Opening GPS navigation...");
          },
        },
      ],
    );
  };

  const optimizeRoute = () => {
    setRouteOptimized(true);
    Alert.alert(
      "Route Optimized",
      "Your route has been optimized for minimal travel time.",
    );
  };

  const totalDistance = assignments.reduce(
    (sum, assignment) => sum + assignment.distance,
    0,
  );
  const totalTime = assignments.reduce(
    (sum, assignment) => sum + assignment.estimatedTravel,
    0,
  );

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Route Navigation
        </Text>

        {/* Route Summary */}
        <View className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-blue-800 font-semibold">
              Today&apos;s Route
            </Text>
            <TouchableOpacity
              onPress={optimizeRoute}
              className={`px-3 py-1 rounded-full ${routeOptimized ? "bg-green-100 border-green-300" : "bg-blue-100 border-blue-300"} border`}
            >
              <Text
                className={`text-xs font-medium ${routeOptimized ? "text-green-700" : "text-blue-700"}`}
              >
                {routeOptimized ? "✓ Optimized" : "Optimize Route"}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-1">
              <Text className="text-blue-600 text-sm">Total Distance</Text>
              <Text className="text-blue-800 font-semibold">
                {totalDistance.toFixed(1)} km
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-blue-600 text-sm">Est. Travel Time</Text>
              <Text className="text-blue-800 font-semibold">
                {totalTime} minutes
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-blue-600 text-sm">Assignments</Text>
              <Text className="text-blue-800 font-semibold">
                {assignments.length} locations
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Current Location */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <View className="flex-row items-center mb-2">
            <View className="w-4 h-4 bg-green-500 rounded-full mr-3"></View>
            <Text className="text-green-700 font-semibold">
              Current Location
            </Text>
          </View>
          <Text className="text-gray-600 ml-7">
            CareFinder Office, Colombo 02
          </Text>
          <Text className="text-gray-500 text-sm ml-7">Starting point</Text>
        </View>

        {/* Route Steps */}
        {assignments.map((assignment, index) => (
          <View key={assignment.id} className="relative">
            {/* Route Line */}
            {index < assignments.length - 1 && (
              <View className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 z-0"></View>
            )}

            <TouchableOpacity
              onPress={() =>
                setSelectedAssignment(
                  assignment.id === selectedAssignment ? null : assignment.id,
                )
              }
              className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100 relative z-10"
            >
              {/* Step Number */}
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <View
                    className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
                      assignment.status === "next"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  >
                    <Text
                      className={`text-sm font-bold ${
                        assignment.status === "next"
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {assignment.family}
                    </Text>
                    {assignment.status === "next" && (
                      <Text className="text-blue-600 text-sm font-medium">
                        NEXT STOP
                      </Text>
                    )}
                  </View>
                </View>
                <Text className="text-gray-500 font-medium">
                  {assignment.time}
                </Text>
              </View>

              {/* Address */}
              <View className="flex-row items-center mb-3 ml-11">
                <Ionicons name="location-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2 flex-1">
                  {assignment.address}
                </Text>
              </View>

              {/* Distance & Time */}
              <View className="flex-row items-center justify-between ml-11">
                <View className="flex-row items-center">
                  <Ionicons name="car-outline" size={16} color="#6b7280" />
                  <Text className="text-gray-600 ml-2">
                    {assignment.distance} km • {assignment.estimatedTravel} min
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleNavigate(assignment)}
                  className="bg-blue-500 px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-medium text-sm">
                    Navigate
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Expanded Details */}
              {selectedAssignment === assignment.id && (
                <View className="mt-4 pt-4 border-t border-gray-100 ml-11">
                  <View className="bg-gray-50 rounded-xl p-3 mb-3">
                    <Text className="text-gray-700 text-sm">
                      Coordinates: {assignment.coordinates.lat.toFixed(4)},{" "}
                      {assignment.coordinates.lng.toFixed(4)}
                    </Text>
                  </View>

                  <View className="flex-row justify-between">
                    <TouchableOpacity className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 flex-1 mr-2">
                      <Text className="text-green-600 text-sm font-medium text-center">
                        Call Family
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 flex-1 ml-2">
                      <Text className="text-yellow-600 text-sm font-medium text-center">
                        Mark Arrived
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}

        {/* End Point */}
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <View className="flex-row items-center mb-2">
            <View className="w-4 h-4 bg-gray-400 rounded-full mr-3"></View>
            <Text className="text-gray-700 font-semibold">
              Return to Office
            </Text>
          </View>
          <Text className="text-gray-600 ml-7">
            CareFinder Office, Colombo 02
          </Text>
          <Text className="text-gray-500 text-sm ml-7">End of route</Text>
        </View>

        {/* Emergency Contact */}
        <View className="bg-red-50 border border-red-200 rounded-2xl p-4 mt-4 mb-8">
          <View className="flex-row items-center mb-2">
            <Ionicons name="warning-outline" size={20} color="#dc2626" />
            <Text className="text-red-800 font-semibold ml-2">
              Emergency Support
            </Text>
          </View>
          <Text className="text-red-700 text-sm mb-3">
            For urgent issues during field visits
          </Text>
          <TouchableOpacity className="bg-red-500 rounded-lg py-3 items-center">
            <Text className="text-white font-semibold">
              Call Emergency Line
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
