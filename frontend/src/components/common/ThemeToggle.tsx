"use client"

import React, { useEffect, useState } from 'react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  // Initialize to a deterministic value to avoid SSR/CSR hydration mismatch.
  // We'll read the real preference on mount (inside useEffect).
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // On mount, read saved preference or prefers-color-scheme and update state.
  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
        return;
      }
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } catch {
      // ignore storage access errors
    }
  }, []);

  // Apply theme class to root and persist preference whenever `theme` changes.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  return (
    <button
      aria-pressed={theme === 'dark'}
      onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      className={`px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm ${className}`}
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
