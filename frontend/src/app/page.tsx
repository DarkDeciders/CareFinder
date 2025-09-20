'use client'

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Navbar scroll animation
    const navbar = document.querySelector('nav');
    const handleScroll = () => {
      console.log('Scroll Y:', window.scrollY);
      if (window.scrollY > 50) {
        console.log('Adding scrolled class');
        navbar?.classList.add('scrolled');
      } else {
        console.log('Removing scrolled class');
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
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
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="/services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.services')}</a>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.how-it-works')}</a>
              <a href="#safety" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.safety')}</a>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.about')}</a>

              {/* Language Switcher */}
              <LanguageSwitcher variant="compact" />

              {/* Dark Mode Toggle */}
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

              <a href="/register" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.register')}</a>
              <a href="/login" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                {t('nav.login')}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher variant="compact" />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 py-3 space-y-3">
              <a href="/services" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.services')}</a>
              <a href="#how-it-works" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.how-it-works')}</a>
              <a href="#safety" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.safety')}</a>
              <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">{t('nav.about')}</a>
              <div className="flex space-x-3 mt-3">
                <a href="/register" className="flex-1 text-center border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-medium transition-colors">
                  {t('nav.register')}
                </a>
                <a href="/login" className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                  {t('nav.login')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background overlay for hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white/70 to-secondary-50/60 dark:from-gray-900/70 dark:via-gray-950/80 dark:to-gray-900/70"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-relaxed">
                {t('hero.title')}
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 mx-auto max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/register" className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                  {t('hero.cta.primary')}
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="/register" className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center">
                  {t('hero.cta.secondary')}
                </a>
                <a href="/about" className="group border-2 border-secondary-600 dark:border-secondary-400 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center">
                  {t('nav.about')}
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16l4-4m0 0l-4-4m4 4H3" />
                  </svg>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{t('trust.verified')}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('trust.verified.desc')}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{t('trust.secure')}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('trust.secure.desc')}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{t('trust.support')}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{t('trust.support.desc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">{t('started.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t('started.subtitle')}</p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-soft-lg dark:shadow-2xl p-8 border border-gray-100/50 dark:border-gray-700/50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('started.step1')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('started.step1.desc')}</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('started.step2')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('started.step2.desc')}</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('started.step3')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('started.step3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/10 dark:bg-gray-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              {t('services.comprehensive.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.comprehensive.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Childcare */}
            <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-700">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 013 3v2.5M15 11V9a3 3 0 00-3-3h-2m8 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m0 0V9a2 2 0 012-2h14a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('services.childcare.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('services.childcare.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.childcare.feature1')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.childcare.feature2')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.childcare.feature3')}
                </li>
              </ul>
            </div>

            {/* Elderly Care */}
            <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 hover:border-secondary-200 dark:hover:border-secondary-700">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('services.elderly.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('services.elderly.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.elderly.feature1')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.elderly.feature2')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.elderly.feature3')}
                </li>
              </ul>
            </div>

            {/* Special Needs */}
            <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 hover:border-success-200 dark:hover:border-success-700">
              <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('services.special.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('services.special.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.special.feature1')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.special.feature2')}
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  {t('services.special.feature3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              {t('works.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('works.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('works.step1')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('works.step1.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('works.step2')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('works.step2.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('works.step3')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('works.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gradient-to-br from-white/15 to-primary-50/15 dark:from-gray-950/15 dark:to-gray-800/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                {t('safety.title').split(' ').slice(0, -2).join(' ')} <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">{t('safety.title').split(' ').slice(-2).join(' ')}</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('safety.subtitle')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{t('safety.doc.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('safety.doc.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{t('safety.payment.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('safety.payment.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{t('safety.quality.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('safety.quality.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-600/80 to-secondary-600/80 rounded-3xl p-8 text-white shadow-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8">Platform Statistics</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">1000+</div>
                    <div className="text-primary-100">{t('stats.caregivers')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">5000+</div>
                    <div className="text-primary-100">{t('stats.families')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">4.9/5</div>
                    <div className="text-primary-100">{t('stats.rating')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">24/7</div>
                    <div className="text-primary-100">{t('stats.support')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600/70 via-primary-700/70 to-secondary-600/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="group bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
              {t('cta.primary')}
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center">
              {t('cta.secondary')}
            </a>
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
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">{t('footer.services')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/services/childcare" className="hover:text-white transition-colors">Childcare</a></li>
                <li><a href="/services/elderly-care" className="hover:text-white transition-colors">Elderly Care</a></li>
                <li><a href="/services/special-needs" className="hover:text-white transition-colors">Special Needs</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">{t('footer.company')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">{t('footer.support')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              {t('footer.copyright')} | Built with care for Sri Lankan families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}