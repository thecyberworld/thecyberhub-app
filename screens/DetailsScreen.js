import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
export default function DetailsScreen({ navigation }) {
  return (
    <Video
      style={{ flex: 1 }}
      source={{ uri: 'https://imgur.com/Q8km3ih.mp4' }}
      shouldPlay={true}
      isLooping={true}
      isMuted={true}
      resizeMode="stretch"
    />
  );
}
