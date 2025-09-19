'use client'

import React, { useEffect, useRef, useState } from 'react';

const conversations = [
  { id: 1, name: 'The Perera Family', lastMessage: 'Great, see you tomorrow at 10 AM!', timestamp: '10:45 AM', avatar: 'PF' },
  { id: 2, name: 'Mr. Silva', lastMessage: 'Thank you for your help today.', timestamp: 'Yesterday', avatar: 'MS' },
  { id: 3, name: 'The Jayasuriya Family', lastMessage: 'Can we schedule a brief call?', timestamp: '2d ago', avatar: 'JF' },
];

type Message = { sender: 'family' | 'me'; text: string };

const chatHistory: Record<number, Message[]> = {
  1: [
    { sender: 'family', text: 'Hi Maria, just wanted to confirm you are still available for tomorrow at 10 AM?' },
    { sender: 'me', text: 'Yes, absolutely! I will be there on time.' },
    { sender: 'family', text: 'Great, see you tomorrow at 10 AM!' },
  ],
  2: [
    { sender: 'family', text: 'Thank you for your help today.' },
    { sender: 'me', text: 'You\'re very welcome — happy to help.' },
    { sender: 'family', text: 'Mr. Fernando mentioned you were fantastic with Dad.' },
    { sender: 'me', text: 'I appreciate that. I try to make sure they feel comfortable.' },
    { sender: 'family', text: 'Could you come again next Tuesday morning?' },
    { sender: 'me', text: 'Yes, I have availability between 9 and 12.' },
    { sender: 'family', text: 'Perfect. We will book 9:30 then. Thanks Maria!' },
  ],
  3: [
    { sender: 'family', text: 'Hi, we received your application. Can we schedule a brief call?' },
    { sender: 'me', text: 'Absolutely — I am available after 4 PM today.' },
    { sender: 'family', text: 'Could we do 5 PM? It would be just a short call.' },
    { sender: 'me', text: '5 PM works for me. Do you want my number or a video call?' },
    { sender: 'family', text: 'Phone is fine. We will call from +94 77 123 4567.' },
    { sender: 'me', text: 'Great, I will be ready. Thank you!' },
  ]
};

export default function CaregiverMessages() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const revealTimers = useRef<number[]>([]);
  const hasRevealedRef = useRef<Record<number, boolean>>({});

  // When activeChat changes, reset visible messages and reveal sequentially
  useEffect(() => {
    const id = activeChat.id as keyof typeof chatHistory;
    const msgs = chatHistory[id] || [];

    // Clear any existing timers (from a previous reveal)
    revealTimers.current.forEach(t => clearTimeout(t));
    revealTimers.current = [];

    // Prevent duplicate initial reveals (React StrictMode may mount twice)
    // Track per-conversation reveal state in hasRevealedRef
    if (hasRevealedRef.current[id]) {
      // If already revealed before, just show the full history immediately
      setVisibleMessages([...msgs]);
      setIsTyping(false);
      return;
    }

    setVisibleMessages([]);
    setIsTyping(false);

    // sequentially reveal messages to mimic realtime arrival, save timers for cleanup
    msgs.forEach((m, i) => {
      const t = window.setTimeout(() => {
        setVisibleMessages(prev => {
          // guard against duplicates
          if (prev.length > 0 && prev[prev.length - 1] === m) return prev;
          return [...prev, m];
        });
      }, i * 350);
      revealTimers.current.push(t);
    });

    // mark as revealed so future mounts don't re-run the sequential animation
    const markTimer = window.setTimeout(() => {
      hasRevealedRef.current[id] = true;
    }, msgs.length * 350 + 50);
    revealTimers.current.push(markTimer);

    return () => {
      revealTimers.current.forEach(t => clearTimeout(t));
      revealTimers.current = [];
    };
  }, [activeChat]);

  // send message & simulate auto reply
  function sendMessage(content: string) {
    const outgoing: Message = { sender: 'me', text: content };
    // add to in-memory history and visible list
    const id = activeChat.id as keyof typeof chatHistory;
    if (!chatHistory[id]) chatHistory[id] = [];
    chatHistory[id].push(outgoing);
    setVisibleMessages(prev => [...prev, outgoing]);
    setInput('');

    // simulate remote typing and reply
    setTimeout(() => setIsTyping(true), 300);
    const replyDelay = 900 + Math.floor(Math.random() * 800);
    setTimeout(() => {
      setIsTyping(false);
      const replyTexts = [
        'Thanks, I appreciate that!',
        'Perfect — see you then.',
        'Could you also confirm the parking details?',
        'That works for me, thanks!',
        "I'll call if anything changes."
      ];
      const reply: Message = { sender: 'family', text: replyTexts[Math.floor(Math.random() * replyTexts.length)] };
      chatHistory[id].push(reply);
      setVisibleMessages(prev => [...prev, reply]);
    }, replyDelay + 300);
  }

  // auto-scroll to bottom when visibleMessages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 min-h-[500px] sm:min-h-[600px] flex flex-col lg:flex-row">
      {/* Conversation List */}
      <div className="w-full lg:w-1/3 lg:border-r border-b lg:border-b-0 border-gray-200 dark:border-gray-700">
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Messages</h2>
        </div>
        <div className="max-h-32 lg:max-h-none overflow-y-auto lg:overflow-visible">
          {conversations.map(convo => (
            <div
              key={convo.id}
              onClick={() => setActiveChat(convo)}
              className={`p-3 sm:p-4 flex items-center space-x-3 cursor-pointer transition-colors ${activeChat.id === convo.id ? 'bg-primary-50 dark:bg-primary-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                {convo.avatar}
              </div>
              <div className="flex-1 overflow-hidden min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 truncate text-sm sm:text-base">{convo.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">{convo.timestamp}</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">{convo.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Window */}
      <div className="w-full lg:w-2/3 flex flex-col min-h-0 flex-1">
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3 flex-shrink-0">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
            {activeChat.avatar}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">{activeChat.name}</h3>
        </div>

        <div ref={scrollRef} className="flex-1 p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 overflow-y-auto min-h-0">
          {visibleMessages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                role="article"
                aria-label={message.sender === 'me' ? 'You' : 'Family'}
                className={`max-w-xs sm:max-w-sm lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-base ${message.sender === 'me' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white'}`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs sm:max-w-sm lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white flex items-center">
                <TypingDots />
              </div>
            </div>
          )}
        </div>

        <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="relative">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && input.trim()) {
                  sendMessage(input.trim());
                }
              }}
              type="text"
              placeholder="Type your message..."
              className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            />
            <button onClick={() => input.trim() && sendMessage(input.trim())} className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-2 sm:p-2.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center space-x-1 px-2">
      <span className="w-2 h-2 rounded-full bg-gray-500/80 animate-bounce" style={{animationDelay: '0ms'}} />
      <span className="w-2 h-2 rounded-full bg-gray-500/80 animate-bounce" style={{animationDelay: '150ms'}} />
      <span className="w-2 h-2 rounded-full bg-gray-500/80 animate-bounce" style={{animationDelay: '300ms'}} />
    </div>
  );
}

// (No top-level helpers) The sendMessage implementation lives inside the component so it can access state.