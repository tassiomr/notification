import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/SessionContext";

export default function Root() {
  return <SessionProvider>
    {/* <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" />
      <Stack.Screen name="sign-in" />
    </Stack> */}
    <Stack />
  </SessionProvider>
};
