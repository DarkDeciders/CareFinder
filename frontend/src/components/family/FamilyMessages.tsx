"use client";

import React, { useState } from "react";

interface Conversation {
  id: number;
  name: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  status: string;
  profileImage: string | null;
}

interface Message {
  id: number;
  conversationId: number;
  senderId: number | string;
  senderName: string;
  content: string;
  timestamp: string;
  type: string;
}

export default function FamilyMessages() {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [newMessage, setNewMessage] = useState("");
  const [showConversations, setShowConversations] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversations: Conversation[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Caregiver",
      lastMessage:
        "Thank you for the feedback! I'm looking forward to our next session.",
      timestamp: "2024-12-20T16:30:00",
      unreadCount: 0,
      status: "online",
      profileImage: null,
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Caregiver",
      lastMessage:
        "I can be there by 2 PM tomorrow. Should I bring any specific supplies?",
      timestamp: "2024-12-20T14:22:00",
      unreadCount: 2,
      status: "away",
      profileImage: null,
    },
    {
      id: 3,
      name: "CareFinder Support",
      role: "Support Team",
      lastMessage:
        "Your booking has been confirmed. Agent verification is scheduled.",
      timestamp: "2024-12-20T10:15:00",
      unreadCount: 0,
      status: "online",
      profileImage: null,
    },
    {
      id: 4,
      name: "Emma Williams",
      role: "Caregiver",
      lastMessage:
        "Hi! I saw your request for weekend childcare. I'm available!",
      timestamp: "2024-12-19T18:45:00",
      unreadCount: 1,
      status: "offline",
      profileImage: null,
    },
  ];

  // Initialize messages from static data on component mount
  React.useEffect(() => {
    const allMessages = [
      {
        id: 1,
        conversationId: 1,
        senderId: 1,
        senderName: "Sarah Chen",
        content:
          "Hello! I wanted to update you on today's session with little Emma.",
        timestamp: "2024-12-20T15:30:00",
        type: "text",
      },
      {
        id: 2,
        conversationId: 1,
        senderId: "family",
        senderName: "You",
        content: "Hi Sarah! How did it go today?",
        timestamp: "2024-12-20T15:32:00",
        type: "text",
      },
      {
        id: 3,
        conversationId: 1,
        senderId: 1,
        senderName: "Sarah Chen",
        content:
          "It went wonderfully! Emma was very engaged during our reading time and enjoyed the art activities. She ate her lunch well and took a good nap.",
        timestamp: "2024-12-20T15:35:00",
        type: "text",
      },
      {
        id: 4,
        conversationId: 1,
        senderId: 1,
        senderName: "Sarah Chen",
        content:
          "I also helped her with some basic counting exercises. She's getting really good at recognizing numbers 1-10!",
        timestamp: "2024-12-20T15:36:00",
        type: "text",
      },
      {
        id: 5,
        conversationId: 1,
        senderId: "family",
        senderName: "You",
        content:
          "That's wonderful to hear! Thank you for the detailed update. Emma has been talking about the stories you read together.",
        timestamp: "2024-12-20T16:15:00",
        type: "text",
      },
      {
        id: 6,
        conversationId: 1,
        senderId: 1,
        senderName: "Sarah Chen",
        content:
          "Thank you for the feedback! I'm looking forward to our next session.",
        timestamp: "2024-12-20T16:30:00",
        type: "text",
      },
      {
        id: 7,
        conversationId: 2,
        senderId: 2,
        senderName: "Mike Johnson",
        content:
          "I can be there by 2 PM tomorrow. Should I bring any specific supplies?",
        timestamp: "2024-12-20T14:22:00",
        type: "text",
      },
      {
        id: 8,
        conversationId: 2,
        senderId: "family",
        senderName: "You",
        content:
          "Perfect! Just bring your usual supplies. Thank you for confirming.",
        timestamp: "2024-12-20T14:30:00",
        type: "text",
      },
    ];
    setMessages(allMessages);
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "online":
        return "bg-success-500";
      case "away":
        return "bg-warning-500";
      default:
        return "bg-gray-400";
    }
  };

  const formatTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return date.toLocaleDateString();
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const messageContent = newMessage.trim();
      const newMsg: Message = {
        id: Date.now(), // Simple ID generation
        conversationId: selectedConversation,
        senderId: "family",
        senderName: "You",
        content: messageContent,
        timestamp: new Date().toISOString(),
        type: "text",
      };

      setMessages((prev) => [...prev, newMsg]);
      setNewMessage("");

      // Show typing indicator
      setIsTyping(true);

      // Auto-reply after a short delay
      setTimeout(() => {
        const selectedConv = conversations.find(
          (c) => c.id === selectedConversation,
        );
        if (selectedConv) {
          const replyMsg: Message = {
            id: Date.now() + Math.random() * 1000, // Better unique ID
            conversationId: selectedConversation,
            senderId: selectedConversation,
            senderName: selectedConv.name,
            content: generateReply(messageContent, selectedConv.name),
            timestamp: new Date().toISOString(),
            type: "text",
          };
          console.log("Adding reply message:", replyMsg); // Debug log
          setMessages((prev) => {
            const newMessages = [...prev, replyMsg];
            console.log("Updated messages:", newMessages); // Debug log
            return newMessages;
          });
          setIsTyping(false);
        }
      }, 2000); // Fixed 2 second delay for testing
    }
  };

  const generateReply = (
    userMessage: string,
    caregiverName: string,
  ): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Different reply patterns based on caregiver and message content
    if (caregiverName === "Sarah Chen") {
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! I hope you're having a great day. How can I help you today?";
      }
      if (lowerMessage.includes("emma") || lowerMessage.includes("child")) {
        return "Emma is such a wonderful child! She's been doing really well with our activities. Would you like an update on her progress?";
      }
      if (lowerMessage.includes("thank")) {
        return "You're very welcome! It's my pleasure to care for Emma. She brings so much joy to my day!";
      }
      if (lowerMessage.includes("time") || lowerMessage.includes("schedule")) {
        return "I'm flexible with timing. What works best for your family's schedule?";
      }
      return "Thank you for your message! I'll make sure to take good care of Emma. Is there anything specific you'd like me to focus on?";
    }

    if (caregiverName === "Mike Johnson") {
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hi there! Ready to provide excellent care for your family.";
      }
      if (lowerMessage.includes("supplies") || lowerMessage.includes("bring")) {
        return "I always come prepared! I have my standard care supplies, but let me know if there's anything specific you need.";
      }
      if (
        lowerMessage.includes("elderly") ||
        lowerMessage.includes("grandmother")
      ) {
        return "I have extensive experience with elderly care. Your grandmother will be in very capable hands.";
      }
      return "Got it! I'll make sure everything is taken care of. Thank you for choosing me for your care needs.";
    }

    if (caregiverName === "CareFinder Support") {
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! This is CareFinder Support. How can we assist you today?";
      }
      if (
        lowerMessage.includes("booking") ||
        lowerMessage.includes("appointment")
      ) {
        return "I can help you with your booking. Please let me know what changes or information you need.";
      }
      if (lowerMessage.includes("problem") || lowerMessage.includes("issue")) {
        return "I'm sorry to hear you're experiencing an issue. Let me help resolve this for you right away.";
      }
      return "Thank you for contacting CareFinder Support. We're here to help with any questions or concerns you may have.";
    }

    if (caregiverName === "Emma Williams") {
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hi! I'm so excited about the opportunity to care for your children!";
      }
      if (
        lowerMessage.includes("weekend") ||
        lowerMessage.includes("childcare")
      ) {
        return "I absolutely love weekend childcare! I have lots of fun activities planned and am very reliable.";
      }
      if (lowerMessage.includes("available") || lowerMessage.includes("time")) {
        return "I'm very flexible with my schedule. What days and times work best for you?";
      }
      return "Thank you for considering me! I'm passionate about childcare and would love to help your family.";
    }

    // Default reply
    return "Thank you for your message! I'll get back to you shortly.";
  };

  const selectedConv = conversations.find((c) => c.id === selectedConversation);
  const conversationMessages = messages.filter(
    (msg) => msg.conversationId === selectedConversation,
  );

  return (
    <div className="h-[calc(100vh-12rem)] lg:h-[calc(100vh-12rem)] flex flex-col lg:flex-row bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Conversations List */}
      <div
        className={`${showConversations ? "flex" : "hidden"} lg:flex w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-600 flex-col h-full max-h-full`}
      >
        <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-600 flex-shrink-0">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Messages
          </h2>
          <div className="relative mt-2 sm:mt-3">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg pl-8 sm:pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => {
                setSelectedConversation(conversation.id);
                setShowConversations(false);
              }}
              className={`p-3 sm:p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                selectedConversation === conversation.id
                  ? "bg-primary-50 dark:bg-primary-900/20 lg:border-r-2 lg:border-r-primary-500"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(conversation.status)} rounded-full border-2 border-white dark:border-gray-800`}
                  ></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatTime(conversation.timestamp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {conversation.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div
        className={`${!showConversations ? "flex" : "hidden"} lg:flex flex-1 flex-col h-full max-h-full`}
      >
        {selectedConv ? (
          <>
            {/* Chat Header */}
            <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-700/50 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowConversations(true)}
                    className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {selectedConv.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(selectedConv.status)} rounded-full border-2 border-white dark:border-gray-800`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                      {selectedConv.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {selectedConv.status === "online"
                        ? "Online"
                        : selectedConv.status === "away"
                          ? "Away"
                          : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
              {conversationMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === "family" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl ${
                      message.senderId === "family"
                        ? "bg-primary-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.senderId === "family"
                          ? "text-primary-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl bg-gray-200 dark:bg-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-600 flex-shrink-0 bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-lg transition-colors flex-shrink-0"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No conversation selected
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Choose a conversation from the list to start messaging
              </p>
              <button
                onClick={() => setShowConversations(true)}
                className="lg:hidden mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Conversations
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
