"use client";

import { useState, useCallback } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

// CareFinder knowledge base for RAG
const CAREFINDER_KNOWLEDGE = {
  services: {
    childcare:
      "We provide professional childcare services with certified caregivers for children of all ages.",
    elderlycare:
      "Our elderly care services include companionship, medication reminders, meal preparation, and mobility assistance.",
    specialneeds:
      "Specialized care for individuals with special needs, including autism support, disability care, and therapeutic assistance.",
    emergency: "Emergency care services available 24/7 for urgent care needs.",
  },
  process: {
    booking:
      "To book a caregiver: 1) Create your profile, 2) Search for caregivers in your area, 3) Review profiles and ratings, 4) Message caregivers, 5) Book and pay securely.",
    verification:
      "All caregivers undergo background checks, document verification, and on-site quality inspections by our agents.",
    training:
      "Unqualified caregivers receive 3-month training programs at our facilities before being approved.",
    payment:
      "Secure payments through PayHere with escrow protection - funds are released after service completion.",
  },
  platform: {
    roles:
      "CareFinder supports 5 user types: Families (care seekers), Caregivers, Trainers, Quality Agents, and Administrators.",
    quality:
      "Our agents conduct on-site visits to verify service quality and ensure caregiver performance meets standards.",
    support:
      "Secure messaging, real-time notifications, and 24/7 customer support available.",
  },
  location:
    "CareFinder operates across Sri Lanka with location-based matching and agent coverage.",
};

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  // Simulate RAG-enhanced response with CareFinder context
  const generateResponse = useCallback((userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Service-related queries
    if (
      message.includes("childcare") ||
      message.includes("child") ||
      message.includes("kids")
    ) {
      return `${CAREFINDER_KNOWLEDGE.services.childcare} Our childcare providers are background-checked and trained in child safety, developmental activities, and age-appropriate care. You can search for childcare providers in your area using our platform.`;
    }

    if (
      message.includes("elderly") ||
      message.includes("senior") ||
      message.includes("old")
    ) {
      return `${CAREFINDER_KNOWLEDGE.services.elderlycare} All our elderly care providers are trained in senior-specific needs and undergo regular quality checks by our agents.`;
    }

    if (
      message.includes("special needs") ||
      message.includes("disability") ||
      message.includes("autism")
    ) {
      return `${CAREFINDER_KNOWLEDGE.services.specialneeds} Our specialized caregivers receive additional training and certification for specific care requirements.`;
    }

    if (
      message.includes("emergency") ||
      message.includes("urgent") ||
      message.includes("immediate")
    ) {
      return `${CAREFINDER_KNOWLEDGE.services.emergency} Contact us immediately for emergency care needs, and we'll connect you with available caregivers in your area within minutes.`;
    }

    // Process-related queries
    if (
      message.includes("how to book") ||
      message.includes("booking") ||
      message.includes("hire")
    ) {
      return `${CAREFINDER_KNOWLEDGE.process.booking} Our platform makes it easy to find and hire qualified caregivers with transparent pricing and secure payments.`;
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("payment")
    ) {
      return `${CAREFINDER_KNOWLEDGE.process.payment} Pricing varies by service type, duration, and caregiver experience. View detailed rates on caregiver profiles. All payments are secure and protected.`;
    }

    if (
      message.includes("verification") ||
      message.includes("background") ||
      message.includes("qualified")
    ) {
      return `${CAREFINDER_KNOWLEDGE.process.verification} ${CAREFINDER_KNOWLEDGE.process.training} This ensures all caregivers meet our high standards.`;
    }

    if (
      message.includes("agent") ||
      message.includes("quality") ||
      message.includes("inspection")
    ) {
      return `${CAREFINDER_KNOWLEDGE.platform.quality} This ensures consistent service quality and provides families with peace of mind about the care they're receiving.`;
    }

    // Location queries
    if (
      message.includes("near me") ||
      message.includes("location") ||
      message.includes("area")
    ) {
      return `${CAREFINDER_KNOWLEDGE.location} Simply enter your location in our search to find caregivers nearby. We use GPS matching to connect you with the closest available providers.`;
    }

    // General platform queries
    if (message.includes("services") || message.includes("what do you offer")) {
      return `CareFinder offers comprehensive care services including:\n\n🧒 Childcare - Professional babysitting and child supervision\n👴 Elderly Care - Companionship and daily living assistance\n♿ Special Needs Care - Specialized support and therapy\n🚨 Emergency Care - 24/7 urgent care services\n\nAll services include background-verified caregivers, secure payments, and quality assurance.`;
    }

    if (
      message.includes("register") ||
      message.includes("sign up") ||
      message.includes("account")
    ) {
      return `To get started with CareFinder:\n\n1. Visit our registration page\n2. Choose your role (Family or Caregiver)\n3. Complete your profile with care needs or qualifications\n4. Start browsing and connecting!\n\nRegistration is free and takes just a few minutes.`;
    }

    // Default response with helpful suggestions
    return `I'm here to help you with CareFinder! I can assist you with:\n\n• Finding caregivers in your area\n• Understanding our services (childcare, elderly care, special needs)\n• Booking and payment process\n• Platform features and safety measures\n• Registration and getting started\n\nWhat specific information would you like to know about our care services?`;
  }, []);

  const sendMessage = useCallback(
    async (userMessage: string) => {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add user message
      const userMsg: ChatMessage = {
        role: "user",
        content: userMessage,
        timestamp,
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsThinking(true);

      // Simulate thinking time (1-3 seconds) as requested
      const thinkingTime = Math.random() * 2000 + 1000; // 1-3 seconds

      setTimeout(() => {
        const response = generateResponse(userMessage);
        const assistantMsg: ChatMessage = {
          role: "assistant",
          content: response,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setIsThinking(false);
      }, thinkingTime);
    },
    [generateResponse],
  );

  return {
    messages,
    isThinking,
    sendMessage,
  };
}
