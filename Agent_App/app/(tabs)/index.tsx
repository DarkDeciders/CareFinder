import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function OverviewScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white pt-12 pb-6 px-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/logo.png')}
              className="w-8 h-8 mr-3"
              resizeMode="contain"
            />
            <View>
              <Text className="text-2xl font-bold text-gray-800">Good Morning</Text>
              <Text className="text-gray-600">Agent John Doe</Text>
            </View>
          </View>
          <View className="items-end">
            <View className="bg-green-100 px-3 py-1 rounded-full mb-1">
              <Text className="text-green-700 text-xs font-medium">Active Agent</Text>
            </View>
            <View className="bg-blue-100 px-3 py-1 rounded-full">
              <Text className="text-blue-700 text-xs font-medium">Zone: Central Colombo</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Key Metrics */}
        <View className="px-4 py-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Today&apos;s Overview</Text>

          <View className="flex-row flex-wrap justify-between">
            {/* Active Assignments */}
            <View className="bg-white rounded-2xl p-4 mb-4 w-[48%] shadow-sm border border-gray-100">
              <View className="bg-blue-100 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="clipboard-outline" size={20} color="#2563eb" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-1">4</Text>
              <Text className="text-gray-600 text-sm mb-1">Active Tasks</Text>
              <Text className="text-gray-500 text-xs">of 5 max capacity</Text>
            </View>

            {/* Completed Today */}
            <View className="bg-white rounded-2xl p-4 mb-4 w-[48%] shadow-sm border border-gray-100">
              <View className="bg-green-100 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="checkmark-circle-outline" size={20} color="#059669" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-1">2</Text>
              <Text className="text-gray-600 text-sm mb-1">Completed</Text>
              <Text className="text-gray-500 text-xs">verifications done</Text>
            </View>

            {/* Distance Traveled */}
            <View className="bg-white rounded-2xl p-4 mb-4 w-[48%] shadow-sm border border-gray-100">
              <View className="bg-yellow-100 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="car-outline" size={20} color="#d97706" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-1">15.2</Text>
              <Text className="text-gray-600 text-sm mb-1">km Today</Text>
              <Text className="text-gray-500 text-xs">distance traveled</Text>
            </View>

            {/* Average Rating */}
            <View className="bg-white rounded-2xl p-4 mb-4 w-[48%] shadow-sm border border-gray-100">
              <View className="bg-purple-100 w-10 h-10 rounded-xl items-center justify-center mb-3">
                <Ionicons name="star-outline" size={20} color="#7c3aed" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-1">4.8</Text>
              <Text className="text-gray-600 text-sm mb-1">Rating</Text>
              <Text className="text-gray-500 text-xs">average score</Text>
            </View>
          </View>
        </View>

        {/* Today's Schedule */}
        <View className="px-4 pb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Today&apos;s Schedule</Text>

          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Next Assignment */}
            <View className="border-l-4 border-blue-500 pl-4 mb-4">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-medium text-blue-600">NEXT</Text>
                <Text className="text-sm text-gray-500">09:00 AM</Text>
              </View>
              <Text className="text-base font-semibold text-gray-800 mb-1">The Perera Family</Text>
              <Text className="text-sm text-gray-600 mb-1">45 Galle Road, Colombo 03</Text>
              <Text className="text-xs text-gray-500">Verification: Sarah Chen (Caregiver)</Text>
            </View>

            {/* Upcoming Assignment */}
            <View className="border-l-4 border-gray-300 pl-4 mb-4">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-medium text-gray-500">UPCOMING</Text>
                <Text className="text-sm text-gray-500">11:30 AM</Text>
              </View>
              <Text className="text-base font-semibold text-gray-800 mb-1">The Silva Family</Text>
              <Text className="text-sm text-gray-600 mb-1">78 Bauddhaloka Mawatha, Colombo 07</Text>
              <Text className="text-xs text-gray-500">Follow-up verification</Text>
            </View>

            {/* View All Button */}
            <TouchableOpacity className="bg-blue-50 border border-blue-200 rounded-xl py-3 items-center">
              <Text className="text-blue-600 font-medium">View All Assignments</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-4 pb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</Text>

          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 mr-2 shadow-sm border border-gray-100 items-center">
              <View className="bg-green-100 w-12 h-12 rounded-xl items-center justify-center mb-3">
                <Ionicons name="location-outline" size={24} color="#059669" />
              </View>
              <Text className="text-sm font-medium text-gray-800 text-center">Start Navigation</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 ml-2 shadow-sm border border-gray-100 items-center">
              <View className="bg-orange-100 w-12 h-12 rounded-xl items-center justify-center mb-3">
                <Ionicons name="camera-outline" size={24} color="#ea580c" />
              </View>
              <Text className="text-sm font-medium text-gray-800 text-center">Quick Report</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="px-4 pb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</Text>

          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <View className="flex-row items-start mb-3">
              <View className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3"></View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-800">Verification Completed</Text>
                <Text className="text-xs text-gray-600">The Fernando Family - Emma Williams</Text>
                <Text className="text-xs text-gray-500">2:30 PM</Text>
              </View>
            </View>

            <View className="flex-row items-start mb-3">
              <View className="w-3 h-3 bg-blue-500 rounded-full mt-1 mr-3"></View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-800">Assignment Started</Text>
                <Text className="text-xs text-gray-600">The Silva Family - Mike Johnson</Text>
                <Text className="text-xs text-gray-500">11:30 AM</Text>
              </View>
            </View>

            <View className="flex-row items-start">
              <View className="w-3 h-3 bg-yellow-500 rounded-full mt-1 mr-3"></View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-800">Route Optimized</Text>
                <Text className="text-xs text-gray-600">4 assignments planned for today</Text>
                <Text className="text-xs text-gray-500">8:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}