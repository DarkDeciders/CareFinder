import React from "react";
import { View, Text } from "react-native";

export default function TestStyles() {
  return (
    <View className="flex-1 bg-blue-500 items-center justify-center">
      <Text className="text-white text-2xl font-bold">NativeWind Test</Text>
      <View className="bg-white p-4 rounded-lg mt-4">
        <Text className="text-black">This should have white background</Text>
      </View>
    </View>
  );
}
