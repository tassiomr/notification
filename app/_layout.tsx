import { Slot } from "expo-router";
import { SessionProvider } from "../context/SessionContext";

export default function Root() {
  return <SessionProvider>
    <Slot />
  </SessionProvider>
};
