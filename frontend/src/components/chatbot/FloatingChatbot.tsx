"use client";

import React, { useState, useRef, useEffect } from "react";
import ChatbotInterface from "./ChatbotInterface";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

  // Close chatbot when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node)
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

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  return (
    <div ref={chatbotRef} className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Interface */}
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)]">
          <ChatbotInterface onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Open CareFinder Assistant"
      >
        {/* Bot Icon */}
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <span className="text-2xl">🤖</span>
          )}
        </div>

        {/* New Message Indicator */}
        {hasNewMessage && !isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        )}

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-ping opacity-20"></div>
      </button>

      {/* Welcome Tooltip (shows on first visit) */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <div className="text-sm font-medium">CareFinder Assistant</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Ask me anything about care services
          </div>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800 translate-y-full"></div>
        </div>
      )}
    </div>
  );
}
