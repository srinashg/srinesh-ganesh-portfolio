"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type AccessibilitySettings = {
  highContrast: boolean;
  largeText: boolean;
  screenReaderFriendly: boolean;
  colorBlindMode: boolean;
};

const DEFAULT_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  screenReaderFriendly: false,
  colorBlindMode: false,
};

const STORAGE_KEY = "portfolio-accessibility-settings";

function loadInitialSettings(): AccessibilitySettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch {
    // ignore malformed storage
  }
  return DEFAULT_SETTINGS;
}

type AccessibilityContextValue = {
  settings: AccessibilitySettings;
  toggleSetting: (key: keyof AccessibilitySettings) => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(
  null
);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(
    loadInitialSettings
  );

  // Sync settings to the DOM (data attributes drive the CSS overrides) and
  // persist them — this effect only talks to external systems, it never
  // calls setState.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.highContrast = String(settings.highContrast);
    root.dataset.largeText = String(settings.largeText);
    root.dataset.screenReaderFriendly = String(settings.screenReaderFriendly);
    root.dataset.colorBlindMode = String(settings.colorBlindMode);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AccessibilityContext.Provider value={{ settings, toggleSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return ctx;
}
