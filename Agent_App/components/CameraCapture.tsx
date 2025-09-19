import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CameraCaptureProps {
  onPhotoTaken?: (photoUri: string) => void;
  onCancel?: () => void;
}

export default function CameraCapture({ onPhotoTaken, onCancel }: CameraCaptureProps) {
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const handleTakePhoto = () => {
    // In a real app, this would use expo-camera or expo-image-picker
    // For demo purposes, we'll simulate photo capture
    const demoPhotoUri = 'https://via.placeholder.com/300x400/4F46E5/ffffff?text=Evidence+Photo';
    setCapturedPhoto(demoPhotoUri);
    onPhotoTaken?.(demoPhotoUri);
    Alert.alert('Photo Captured', 'Evidence photo has been captured successfully.');
  };

  const handleChooseFromGallery = () => {
    // In a real app, this would use expo-image-picker
    const demoPhotoUri = 'https://via.placeholder.com/300x400/059669/ffffff?text=Gallery+Photo';
    setCapturedPhoto(demoPhotoUri);
    onPhotoTaken?.(demoPhotoUri);
    Alert.alert('Photo Selected', 'Photo has been selected from gallery.');
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowCameraModal(true)}
        className="bg-blue-500 rounded-xl py-4 px-6 flex-row items-center justify-center"
      >
        <Ionicons name="camera-outline" size={24} color="#ffffff" />
        <Text className="text-white font-semibold ml-2">Capture Evidence</Text>
      </TouchableOpacity>

      <Modal
        visible={showCameraModal}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowCameraModal(false)}
      >
        <View className="flex-1 bg-black">
          {/* Camera Interface */}
          <View className="flex-1 bg-gray-900 items-center justify-center">
            {capturedPhoto ? (
              <Image source={{ uri: capturedPhoto }} className="w-full h-full" resizeMode="cover" />
            ) : (
              <View className="items-center">
                <Ionicons name="camera-outline" size={80} color="#ffffff" />
                <Text className="text-white text-lg mt-4">Camera Preview</Text>
                <Text className="text-gray-300 text-sm mt-2">Tap capture button to take photo</Text>
              </View>
            )}
          </View>

          {/* Camera Controls */}
          <View className="bg-black/80 py-8 px-6">
            <View className="flex-row items-center justify-between">
              {/* Cancel Button */}
              <TouchableOpacity
                onPress={() => {
                  setShowCameraModal(false);
                  setCapturedPhoto(null);
                  onCancel?.();
                }}
                className="bg-gray-600 w-16 h-16 rounded-full items-center justify-center"
              >
                <Ionicons name="close" size={24} color="#ffffff" />
              </TouchableOpacity>

              {/* Capture Button */}
              <TouchableOpacity
                onPress={handleTakePhoto}
                className="bg-white w-20 h-20 rounded-full items-center justify-center border-4 border-gray-300"
              >
                <View className="w-16 h-16 bg-white rounded-full"></View>
              </TouchableOpacity>

              {/* Gallery Button */}
              <TouchableOpacity
                onPress={handleChooseFromGallery}
                className="bg-gray-600 w-16 h-16 rounded-full items-center justify-center"
              >
                <Ionicons name="images-outline" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {/* Additional Controls */}
            <View className="flex-row justify-center mt-4 space-x-4">
              <TouchableOpacity className="bg-gray-700 px-4 py-2 rounded-lg">
                <Text className="text-white text-sm">Flash</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-700 px-4 py-2 rounded-lg">
                <Text className="text-white text-sm">Grid</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-700 px-4 py-2 rounded-lg">
                <Text className="text-white text-sm">Timer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}