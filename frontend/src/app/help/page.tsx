'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HelpCenter() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      questions: [
        {
          q: "How do I create an account on CareFinder?",
          a: "To create an account, click 'Sign Up' on our homepage, choose whether you're looking for care or offering care services, fill out the required information including your email and phone number, and verify your account through the confirmation email we'll send you."
        },
        {
          q: "What documents do I need to register as a caregiver?",
          a: "Caregivers need to provide: Valid Sri Lankan ID card or passport, Police clearance certificate (less than 3 months old), Educational certificates or relevant training credentials, Two professional references, and Proof of address. Medical certificates may be required for specialized care roles."
        },
        {
          q: "How does the verification process work?",
          a: "Our 3-tier verification includes: Document verification (ID, police clearance, certificates), Skills assessment and training completion, Background checks and reference verification. The process typically takes 3-5 business days once all documents are submitted."
        },
        {
          q: "Is CareFinder available throughout Sri Lanka?",
          a: "Yes! CareFinder operates across all major cities and towns in Sri Lanka including Colombo, Kandy, Galle, Jaffna, Batticaloa, and many rural areas. Our caregiver network continues to expand to serve families nationwide."
        }
      ]
    },
    {
      id: 'booking-care',
      title: 'Booking Care Services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-4m-8 0V9" />
        </svg>
      ),
      questions: [
        {
          q: "How do I book a caregiver?",
          a: "Browse available caregivers in your area, review their profiles including ratings and reviews, contact them directly through our messaging system, discuss your needs and schedule, and confirm your booking through our secure platform with payment."
        },
        {
          q: "Can I book care services for the same day?",
          a: "Yes, many of our caregivers offer same-day availability. Use our 'Available Today' filter when searching. However, we recommend booking at least 24 hours in advance for the best selection of caregivers."
        },
        {
          q: "What if I need to cancel or reschedule?",
          a: "You can cancel or reschedule up to 4 hours before the scheduled service without penalty. For cancellations within 4 hours, a 25% cancellation fee applies. Emergency cancellations due to illness are handled case-by-case."
        },
        {
          q: "How do I communicate with my caregiver?",
          a: "Use our secure in-app messaging system to communicate before, during, and after care sessions. You'll receive real-time updates, photos (with permission), and daily care reports from your caregiver."
        }
      ]
    },
    {
      id: 'payments-pricing',
      title: 'Payments & Pricing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      questions: [
        {
          q: "How much do care services cost?",
          a: "Pricing varies by service type and location. Childcare: Rs. 500-1,500/hour, Elderly care: Rs. 600-2,000/hour, Special needs: Rs. 800-2,500/hour. Live-in care and overnight services have special rates. All caregivers set their own competitive rates."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit and debit cards, bank transfers, and mobile payments through PayHere. Payments are processed securely and funds are held in escrow until service completion for your protection."
        },
        {
          q: "When am I charged for services?",
          a: "Payment is authorized when you book but only charged after service completion. For recurring services, you're billed weekly. If you're unsatisfied with service quality, contact us within 24 hours for resolution."
        },
        {
          q: "Are there any additional fees?",
          a: "CareFinder charges a small service fee (5-8%) to maintain our platform and support services. There are no hidden fees - all costs are clearly displayed before booking. Premium features like background checks are optional extras."
        }
      ]
    },
    {
      id: 'safety-security',
      title: 'Safety & Security',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      questions: [
        {
          q: "How do you ensure caregiver safety and reliability?",
          a: "All caregivers undergo comprehensive background checks including police clearance certificates, identity verification, reference checks, skills assessments, and ongoing quality monitoring. We also provide insurance coverage for all services."
        },
        {
          q: "What if there's an emergency during care?",
          a: "All caregivers are trained in basic first aid and emergency procedures. They have direct access to our 24/7 emergency hotline and will contact emergency services if needed. Families are immediately notified of any incidents."
        },
        {
          q: "How is my personal information protected?",
          a: "We use bank-level encryption to protect all personal and payment information. Your data is never shared with third parties without consent. Caregivers only see information necessary to provide care services."
        },
        {
          q: "Can I request the same caregiver regularly?",
          a: "Absolutely! Many families develop ongoing relationships with caregivers. You can book recurring services with your preferred caregiver and build consistency for your care needs."
        }
      ]
    },
    {
      id: 'caregiver-info',
      title: 'For Caregivers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      questions: [
        {
          q: "How do I become a caregiver on CareFinder?",
          a: "Register as a caregiver, complete our verification process including document submission and background checks, complete required training modules, set up your profile with services and rates, and start receiving booking requests from families."
        },
        {
          q: "How much can I earn as a caregiver?",
          a: "Earnings vary by service type, experience, and hours worked. Part-time caregivers earn Rs. 15,000-45,000/month, while full-time caregivers can earn Rs. 35,000-80,000/month. Specialized care providers and those with certifications earn premium rates."
        },
        {
          q: "What training and support do you provide?",
          a: "We provide comprehensive training covering child development, elderly care, special needs support, emergency procedures, and professional communication. Ongoing support includes quality coaching, skill development workshops, and 24/7 caregiver support."
        },
        {
          q: "How do I get paid for my services?",
          a: "Payments are processed weekly to your bank account or mobile wallet. You'll receive detailed payment statements and can track earnings through your caregiver dashboard. We handle all payment processing and customer service."
        }
      ]
    }
  ];

  const filteredQuestions = categories.find(cat => cat.id === activeCategory)?.questions.filter(q => 
    q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.a.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="CareFinder Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                CareFinder
              </div>
            </Link>

            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Contact
              </Link>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link href="/login" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white/70 to-secondary-50/60 dark:from-gray-900/70 dark:via-gray-950/80 dark:to-gray-900/70"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Help{' '}
            <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              Center
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Find answers to your questions about CareFinder services, booking, payments, and more.
            Our comprehensive help center is here to support you every step of the way.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Help Content */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1 mb-12 lg:mb-0">
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Help Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <div className={`${activeCategory === category.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`}>
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {categories.find(cat => cat.id === activeCategory)?.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {searchQuery ? `Found ${filteredQuestions.length} results for "${searchQuery}"` : 'Frequently asked questions and detailed answers'}
                </p>
              </div>

              <div className="space-y-6">
                {filteredQuestions.map((item, index) => (
                  <div key={index} className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-start">
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {item.q}
                    </h3>
                    <div className="ml-9">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}

                {filteredQuestions.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
                    <p className="text-gray-600 dark:text-gray-300">Try different keywords or browse our categories above.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-white/10 dark:bg-gray-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you 24/7.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Get instant help from our support team</p>
              <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                Start Chat
              </button>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Send us a detailed message</p>
              <Link href="/contact" className="text-secondary-600 dark:text-secondary-400 font-medium hover:underline">
                Send Email
              </Link>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Call our 24/7 helpline</p>
              <a href="tel:+94777123456" className="text-success-600 dark:text-success-400 font-medium hover:underline">
                +94 77 712 3456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="CareFinder Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-2xl font-display font-bold">CareFinder</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Trusted care services connecting families with verified caregivers across Sri Lanka.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services/childcare" className="hover:text-white transition-colors">Childcare</Link></li>
                <li><Link href="/services/elderly-care" className="hover:text-white transition-colors">Elderly Care</Link></li>
                <li><Link href="/services/special-needs" className="hover:text-white transition-colors">Special Needs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 CareFinder. All rights reserved. | Built with care for Sri Lankan families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
