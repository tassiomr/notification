import { Stack } from 'expo-router';

export default function Tab() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='user' />
    </Stack>
  );
}
