import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";

export default function SplashScreen() {
  useEffect(() => {
    // Navigate to login after 2 seconds to give enough time for layout mount
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      // blue-500 -> secondary 500 (teal-like) to match tailwind classes used before
      colors={["#3b82f6", "#14b8a6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
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
        {/* Reanimated pulsing dots */}
        <AnimatedDot delayMs={0} />
        <AnimatedDot delayMs={200} />
        <AnimatedDot delayMs={400} />
      </View>

      {/* Version */}
      <View className="absolute bottom-8">
        <Text className="text-blue-200 text-xs">Version 1.0.0</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function AnimatedDot({ delayMs = 0 }: { delayMs?: number }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    // animate between 0 and 1 indefinitely
    const start = () => {
      progress.value = withRepeat(
        withTiming(1, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    };

    // start after the given delay
    const timer = setTimeout(start, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs, progress]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: 0.4 + 0.6 * progress.value,
      transform: [{ scale: 0.75 + 0.5 * progress.value }],
    };
  });

  return (
    <Animated.View
      style={[
        { width: 8, height: 8, borderRadius: 8, backgroundColor: "white", marginRight: 6 },
        style,
      ]}
    />
  );
}
