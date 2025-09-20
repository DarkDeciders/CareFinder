import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

interface LocationTrackerProps {
  onLocationUpdate?: (location: LocationData) => void;
  autoTrack?: boolean;
}

export default function LocationTracker({
  onLocationUpdate,
  autoTrack = false,
}: LocationTrackerProps) {
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(
    null,
  );
  const [tracking, setTracking] = useState(autoTrack);
  const [accuracy, setAccuracy] = useState<"high" | "medium" | "low">("high");

  // Simulate GPS location tracking
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (tracking) {
      // Simulate getting location (in real app, use expo-location)
      const simulateLocation = () => {
        const location: LocationData = {
          latitude: 6.9271 + (Math.random() - 0.5) * 0.01, // Around Colombo
          longitude: 79.8612 + (Math.random() - 0.5) * 0.01,
          accuracy: Math.random() * 10 + 5, // 5-15 meters
          timestamp: Date.now(),
        };

        setCurrentLocation(location);
        onLocationUpdate?.(location);
      };

      simulateLocation(); // Get initial location
      interval = setInterval(simulateLocation, 5000); // Update every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [tracking, onLocationUpdate]);

  const toggleTracking = () => {
    if (!tracking) {
      Alert.alert(
        "Location Permission",
        "CareFinder Agent needs location access to track your field visits.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Allow", onPress: () => setTracking(true) },
        ],
      );
    } else {
      setTracking(false);
    }
  };

  const getCurrentLocation = () => {
    Alert.alert("Getting Location", "Acquiring precise GPS coordinates...");

    // Simulate getting precise location
    setTimeout(() => {
      const location: LocationData = {
        latitude: 6.9271,
        longitude: 79.8612,
        accuracy: 3,
        timestamp: Date.now(),
      };

      setCurrentLocation(location);
      onLocationUpdate?.(location);
      Alert.alert(
        "Location Acquired",
        `Lat: ${location.latitude.toFixed(6)}\nLng: ${location.longitude.toFixed(6)}`,
      );
    }, 1500);
  };

  const getAccuracyColor = () => {
    if (!currentLocation) return "bg-gray-500";

    if (currentLocation.accuracy < 5) return "bg-green-500";
    if (currentLocation.accuracy < 10) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getAccuracyText = () => {
    if (!currentLocation) return "No GPS";

    if (currentLocation.accuracy < 5) return "High Precision";
    if (currentLocation.accuracy < 10) return "Medium Precision";
    return "Low Precision";
  };

  return (
    <View className="bg-white rounded-xl p-4 border border-gray-200">
      {/* Location Status */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <View
            className={`w-3 h-3 rounded-full mr-2 ${getAccuracyColor()}`}
          ></View>
          <Text className="text-gray-800 font-medium">GPS Status</Text>
        </View>
        <Text className="text-gray-600 text-sm">{getAccuracyText()}</Text>
      </View>

      {/* Current Location Info */}
      {currentLocation && (
        <View className="bg-gray-50 rounded-lg p-3 mb-4">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600 text-sm">Latitude:</Text>
            <Text className="text-gray-800 font-mono text-sm">
              {currentLocation.latitude.toFixed(6)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600 text-sm">Longitude:</Text>
            <Text className="text-gray-800 font-mono text-sm">
              {currentLocation.longitude.toFixed(6)}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600 text-sm">Accuracy:</Text>
            <Text className="text-gray-800 text-sm">
              ±{currentLocation.accuracy.toFixed(1)}m
            </Text>
          </View>
        </View>
      )}

      {/* Control Buttons */}
      <View className="flex-row space-x-2">
        <TouchableOpacity
          onPress={toggleTracking}
          className={`flex-1 py-3 rounded-lg flex-row items-center justify-center ${
            tracking ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <Ionicons
            name={tracking ? "stop-circle-outline" : "play-circle-outline"}
            size={20}
            color="#ffffff"
          />
          <Text className="text-white font-medium ml-2">
            {tracking ? "Stop Tracking" : "Start Tracking"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getCurrentLocation}
          className="bg-blue-500 px-4 py-3 rounded-lg items-center justify-center"
        >
          <Ionicons name="location-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Accuracy Settings */}
      <View className="mt-4 pt-4 border-t border-gray-200">
        <Text className="text-gray-700 font-medium mb-2">GPS Accuracy</Text>
        <View className="flex-row space-x-2">
          {["high", "medium", "low"].map((acc) => (
            <TouchableOpacity
              key={acc}
              onPress={() => setAccuracy(acc as any)}
              className={`flex-1 py-2 rounded-lg border ${
                accuracy === acc
                  ? "bg-blue-50 border-blue-300"
                  : "bg-gray-50 border-gray-300"
              }`}
            >
              <Text
                className={`text-center text-sm font-medium ${
                  accuracy === acc ? "text-blue-700" : "text-gray-600"
                }`}
              >
                {acc.charAt(0).toUpperCase() + acc.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
