"use client";

import {
  useAccessibility,
  type AccessibilitySettings,
} from "@/context/AccessibilityContext";

const OPTIONS: {
  key: keyof AccessibilitySettings;
  label: string;
  description: string;
}[] = [
  {
    key: "highContrast",
    label: "High Contrast",
    description: "Stronger color contrast for low-vision users",
  },
  {
    key: "largeText",
    label: "Large Text",
    description: "Increases text size across the site",
  },
  {
    key: "screenReaderFriendly",
    label: "Screen Reader Friendly",
    description: "Bigger focus outlines & reduced motion",
  },
  {
    key: "colorBlindMode",
    label: "Color Blind Modes",
    description: "Adds icons/labels so color never carries meaning alone",
  },
];

export default function AccessibilityPanel() {
  const { settings, toggleSetting } = useAccessibility();

  return (
    <div
      role="menu"
      aria-label="Accessibility settings"
      className="accessibility-panel w-72 rounded-2xl border-2 border-transparent bg-white p-4 shadow-2xl sm:w-80"
    >
      <p className="mb-3 px-1 text-sm font-bold uppercase tracking-wide text-black">
        Accessibility Settings
      </p>
      <ul className="flex flex-col gap-1">
        {OPTIONS.map((opt) => {
          const checked = settings[opt.key];
          return (
            <li key={opt.key}>
              <button
                type="button"
                role="menuitemcheckbox"
                aria-checked={checked}
                onClick={() => toggleSetting(opt.key)}
                className="flex w-full items-center justify-between gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-gray-100"
              >
                <span>
                  <span className="block text-sm font-semibold text-black">
                    {opt.label}
                  </span>
                  <span className="block text-xs text-gray-600">
                    {opt.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`a11y-switch shrink-0 ${checked ? "a11y-switch--on" : ""}`}
                >
                  <span className="a11y-switch-knob" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
