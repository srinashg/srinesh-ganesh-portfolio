"use client";

import { useEffect, useRef, useState } from "react";
import { navSections } from "@/data/resume";
import AccessibilityPanel from "./AccessibilityPanel";

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [panelOpen, setPanelOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !gearRef.current?.contains(event.target as Node)
      ) {
        setPanelOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [panelOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="nav-bar-3d mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div>
            <p className="brand-title truncate text-base font-extrabold text-black sm:text-lg">
              Srinesh Ganesh
            </p>
            <p className="truncate text-xs font-medium text-gray-500 sm:text-sm">
              Personal Portfolio
            </p>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="hidden flex-1 flex-wrap items-center justify-center gap-2 lg:flex"
        >
          {navSections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`nav-pill ${isActive ? "nav-pill--active" : "nav-pill--inactive"}`}
              >
                {s.label.toUpperCase()}
              </a>
            );
          })}
        </nav>

        <div className="relative flex items-center gap-2">
          <button
            ref={gearRef}
            type="button"
            aria-haspopup="true"
            aria-expanded={panelOpen}
            aria-label="Open accessibility settings"
            onClick={() => setPanelOpen((v) => !v)}
            className="gear-btn"
          >
            <GearIcon />
          </button>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={panelOpen}
            onClick={() => setPanelOpen((v) => !v)}
            className="nav-pill nav-pill--active hidden sm:inline-flex"
          >
            ACCESSIBILITY SETTINGS
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="gear-btn lg:hidden"
          >
            <MenuIcon />
          </button>

          {panelOpen && (
            <div ref={panelRef} className="absolute right-0 top-[calc(100%+0.75rem)] z-50">
              <AccessibilityPanel />
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Primary mobile"
          className="nav-bar-3d mx-auto mt-2 flex max-w-7xl flex-col gap-2 rounded-3xl p-3 lg:hidden"
        >
          {navSections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`nav-pill w-full ${isActive ? "nav-pill--active" : "nav-pill--inactive"}`}
              >
                {s.label.toUpperCase()}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
