import { useEffect } from "react";

export const useEventListener = (callback, event, element = "window") => {
  useEffect(() => {
    if (element === "window") {//&& typeof window !== undefined
      window.addEventListener(event, callback);
    } else {
      const tagEl = document.getElementById(element);
      tagEl.addEventListener(event, callback);
    }
    return () => window.removeEventListener(event, callback);
  }, [callback, element, event]);
};