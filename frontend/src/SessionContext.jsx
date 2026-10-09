import { useCallback, useMemo, useState } from "react";
import SessionContext from "./session.js";

const SESSION_KEY = "supplychainiq-demo-user";

function getSavedUser() {
  const savedUser = sessionStorage.getItem(SESSION_KEY);
  if (!savedUser) return null;

  try {
    return JSON.parse(savedUser);
  } catch {
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function SessionProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  const signIn = useCallback((email) => {
    const signedInUser = {
      name: email.split("@")[0] || "Workspace User",
      email,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(signedInUser));
    setUser(signedInUser);
  }, []);

  const signUp = useCallback((name, email) => {
    const signedUpUser = { name: name.trim(), email };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(signedUpUser));
    setUser(signedUpUser);
  }, []);

  const signOut = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, signIn, signUp, signOut }),
    [user, signIn, signUp, signOut]
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
