import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  useEffect(() => {
    // Navigate to login after 2 seconds to give enough time for layout mount
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-gradient-to-br from-blue-500 to-teal-500 justify-center items-center">
      <StatusBar style="light" />

      {/* Logo Container */}
      <View className="items-center mb-8">
        <View className="w-24 h-24 bg-white rounded-2xl shadow-lg items-center justify-center mb-6">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>

        <Text className="text-3xl font-bold text-white mb-2">CareFinder</Text>
        <Text className="text-xl font-semibold text-blue-100 mb-1">
          Agent App
        </Text>
        <Text className="text-sm text-blue-200 text-center px-8">
          Quality verification & field operations
        </Text>
      </View>

      {/* Loading Indicator */}
      <View className="flex-row items-center mt-8">
        <View className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></View>
        <View
          className="w-2 h-2 bg-white/70 rounded-full mr-1 animate-pulse"
          style={{ animationDelay: "200ms" }}
        ></View>
        <View
          className="w-2 h-2 bg-white/50 rounded-full animate-pulse"
          style={{ animationDelay: "400ms" }}
        ></View>
      </View>

      {/* Version */}
      <View className="absolute bottom-8">
        <Text className="text-blue-200 text-xs">Version 1.0.0</Text>
      </View>
    </View>
  );
}
