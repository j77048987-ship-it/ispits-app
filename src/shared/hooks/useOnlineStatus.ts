import { useEffect, useState } from "react";

/**
 * Purely informational (e.g. a small "offline" badge) — nothing in the app *depends* on this
 * value to keep functioning, since every feature is designed to work fully offline regardless.
 */
export function useOnlineStatus(): boolean {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return online;
}
