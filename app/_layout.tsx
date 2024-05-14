import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/SessionContext";
import useNotification from "../hooks/useNotification";
import messaging from '@react-native-firebase/messaging';
import { notifeeEvents } from "../notifeeEvents";

export default function Root() {
  "entrei aqui no Root"
  useNotification();

  return <SessionProvider>
    <Slot />
  </SessionProvider>
};

notifeeEvents();