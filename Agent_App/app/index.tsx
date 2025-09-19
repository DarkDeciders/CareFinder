
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // Add a small delay to ensure the layout is mounted
    const timer = setTimeout(() => {
      router.replace('/splash');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3b82f6' }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>CareFinder</Text>
    </View>
  );
}
