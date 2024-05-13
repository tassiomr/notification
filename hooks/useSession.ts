import { useState } from "react";

export default function useSession() {
  const [isLogged, setIsLogged] = useState(false);


  function signIn() {
    setIsLogged(true);
  }

  function signOut() {
    setIsLogged(false)
  }


  return { isLogged, signIn, signOut }
}