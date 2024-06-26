import React, { createContext } from "react";
import { useStorageState } from "../hooks/useStorageState";



const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean
}>({
  signIn: () => { },
  signOut: () => { },
  isLoading: false
})


export function useSession() {
  const value = React.useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error("useSession must be wrapped in <SessionProvider />")
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return <AuthContext.Provider value={{
    signIn: () => {
      setSession('xxxxx');
    },
    signOut: () => {
      setSession(null)
    },
    session,
    isLoading
  }}>
    {props.children}
  </AuthContext.Provider>
}
