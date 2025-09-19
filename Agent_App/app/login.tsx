import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!agentId || !password) {
      Alert.alert('Error', 'Please enter your Agent ID and password');
      return;
    }

    setLoading(true);

    // Simulate login with demo data
    setTimeout(() => {
      setLoading(false);
      // For demo, accept any credentials
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleDemoLogin = () => {
    setAgentId('AGT001');
    setPassword('demo123');
    setTimeout(() => {
      router.replace('/(tabs)');
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-16 pb-8 px-6">
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4 shadow-lg">
              <View className="w-10 h-10 bg-white rounded-xl items-center justify-center">
                <Ionicons name="shield-checkmark" size={24} color="#0891b2" />
              </View>
            </View>

            <Text className="text-2xl font-bold text-gray-800 mb-1">Agent Login</Text>
            <Text className="text-gray-600 text-center">
              CareFinder Quality Verification
            </Text>
          </View>
        </View>

        {/* Login Form */}
        <View className="px-6">
          <View className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            {/* Agent ID Input */}
            <View className="mb-4">
              <Text className="text-gray-700 font-medium mb-2">Agent ID</Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="person-outline" size={20} color="#6b7280" />
                <TextInput
                  className="flex-1 ml-3 text-gray-800 text-base"
                  placeholder="Enter your Agent ID"
                  placeholderTextColor="#9CA3AF"
                  value={agentId}
                  onChangeText={setAgentId}
                  autoCapitalize="characters"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-gray-700 font-medium mb-2">Password</Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
                <TextInput
                  className="flex-1 ml-3 text-gray-800 text-base"
                  placeholder="Enter your password"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCorrect={false}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              className={`bg-blue-500 rounded-xl py-4 items-center mb-4 ${loading ? 'opacity-70' : ''}`}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text className="text-white font-semibold text-base">
                {loading ? 'Logging in...' : 'Login'}
              </Text>
            </TouchableOpacity>

            {/* Demo Login Button */}
            <TouchableOpacity
              className="border border-blue-500 rounded-xl py-4 items-center"
              onPress={handleDemoLogin}
            >
              <Text className="text-blue-500 font-semibold text-base">Demo Login</Text>
            </TouchableOpacity>
          </View>

          {/* Help Text */}
          <View className="items-center px-4 mb-8">
            <Text className="text-gray-500 text-sm text-center leading-5">
              For support or credential issues, contact your supervisor or admin.
            </Text>
          </View>

          {/* Agent Zone Info */}
          <View className="bg-blue-50 border border-blue-200 rounded-xl p-4 mx-2">
            <View className="flex-row items-center mb-2">
              <Ionicons name="location-outline" size={16} color="#2563eb" />
              <Text className="text-blue-700 font-medium ml-2">Service Zone</Text>
            </View>
            <Text className="text-blue-600 text-sm">Central Colombo District</Text>
            <Text className="text-blue-500 text-xs mt-1">Agent capacity: 5 assignments max</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
