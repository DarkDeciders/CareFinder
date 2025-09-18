"use client"

import React, { useEffect, useState } from 'react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    // default to prefers-color-scheme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

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
