"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", flag: "🇱🇰" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇱🇰" },
];

interface LanguageSwitcherProps {
  variant?: "default" | "compact";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "default",
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  if (variant === "compact") {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Change language"
        >
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-xs font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <svg
            className="w-3 h-3 opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                  lang.code === language
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-xs opacity-60">{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-sm backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">
          {currentLanguage.nativeName}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl backdrop-blur-sm z-50 overflow-hidden">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors ${
                lang.code === language
                  ? "bg-primary-50/50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-400"
                  : "text-gray-700 dark:text-gray-300"
              } ${index === 0 ? "rounded-t-xl" : ""} ${index === languages.length - 1 ? "rounded-b-xl" : ""}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{lang.nativeName}</span>
                <span className="text-xs opacity-60">{lang.name}</span>
              </div>
              {lang.code === language && (
                <svg
                  className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
