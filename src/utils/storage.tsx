'use client';
import { useEffect, useState } from "react";

export function useStickyState(defaultValue:any, key:string) {
    const [value, setValue] = useState(() => {
      if (typeof window !== 'undefined') {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
      } else return defaultValue;
    });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
