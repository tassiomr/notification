import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Tab() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
