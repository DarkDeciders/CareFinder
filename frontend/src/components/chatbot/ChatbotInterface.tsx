'use client'

import React, { useState, useRef, useEffect } from 'react';
import ThinkingAnimation from './ThinkingAnimation';
import { useChatbot } from './useChatbot';

interface ChatbotInterfaceProps {
  onClose: () => void;
}

export default function ChatbotInterface({ onClose }: ChatbotInterfaceProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, isThinking, sendMessage } = useChatbot();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Focus input when chatbot opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    setInput('');
    await sendMessage(userMessage);
  };

  const handleQuickAction = async (action: string) => {
    if (isThinking) return;
    await sendMessage(action);
  };

  const quickActions = [
    'Find caregivers near me',
    'What services do you offer?',
    'How does pricing work?',
    'How to book a caregiver?',
    'Emergency care options'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              <circle cx="9" cy="9" r="1"/>
              <circle cx="15" cy="9" r="1"/>
              <path d="M8 13h8v1H8z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-sm">CareFinder Assistant</h3>
            <p className="text-xs text-white/80">
              {isThinking ? 'Thinking...' : 'Online • Ready to help'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Welcome Section - No Scroll */}
      {messages.length === 0 && (
        <div className="flex-none p-4">
          <div className="text-center text-gray-500 dark:text-gray-400 py-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                <circle cx="9" cy="9" r="1"/>
                <circle cx="15" cy="9" r="1"/>
                <path d="M8 13h8v1H8z"/>
              </svg>
            </div>
            <p className="text-sm font-medium mb-1">Welcome to CareFinder!</p>
            <p className="text-xs">I&apos;m here to help you find the perfect care services. Ask me anything!</p>
          </div>
        </div>
      )}

      {/* Messages Area - Only scroll when there are messages */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-br-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-md'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-md">
                <ThinkingAnimation />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Quick Actions */}
      {messages.length === 0 && !isThinking && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about care services..."
            disabled={isThinking}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          />
          <button
            type="submit"
            disabled={!input.trim() || isThinking}
            className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isThinking ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}