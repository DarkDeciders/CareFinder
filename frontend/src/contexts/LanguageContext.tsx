"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "si" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translation dictionary
const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.how-it-works": "How it Works",
    "nav.safety": "Safety",

    // Hero Section
    "hero.title": "Trusted Care Services in Sri Lanka",
    "hero.subtitle":
      "Connect with verified caregivers for childcare, elderly care, and special needs support. Safe, reliable, and professional care solutions for your family.",
    "hero.cta.primary": "Find Caregivers",
    "hero.cta.secondary": "Become a Caregiver",

    // Services
    "services.title": "Our Care Services",
    "services.comprehensive.title": "Comprehensive Care Services",
    "services.comprehensive.subtitle":
      "Professional care solutions tailored to your family's unique needs",
    "services.childcare.title": "Childcare",
    "services.childcare.desc":
      "Professional babysitters and nannies for your children",
    "services.childcare.feature1": "After-school care",
    "services.childcare.feature2": "Weekend babysitting",
    "services.childcare.feature3": "Full-time nanny services",
    "services.elderly.title": "Elderly Care",
    "services.elderly.desc": "Compassionate care and companionship for seniors",
    "services.elderly.feature1": "Personal care assistance",
    "services.elderly.feature2": "Medication reminders",
    "services.elderly.feature3": "Companionship services",
    "services.special.title": "Special Needs",
    "services.special.desc":
      "Specialized support for individuals with unique requirements",
    "services.special.feature1": "Trained professionals",
    "services.special.feature2": "Customized care plans",
    "services.special.feature3": "24/7 availability",

    // Features
    "features.title": "Why Choose CareFinder?",
    "features.verified.title": "Verified Caregivers",
    "features.verified.desc":
      "All caregivers undergo background checks and verification",
    "features.quality.title": "Quality Assurance",
    "features.quality.desc": "On-site quality checks by our trained agents",
    "features.secure.title": "Secure Payments",
    "features.secure.desc":
      "Safe and secure payment processing with escrow protection",
    "features.support.title": "24/7 Support",
    "features.support.desc":
      "Round-the-clock customer support when you need it",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2024 CareFinder. All rights reserved.",

    // Trust indicators
    "trust.verified": "Verified",
    "trust.verified.desc": "Background Checked",
    "trust.secure": "Secure",
    "trust.secure.desc": "Protected Payments",
    "trust.support": "24/7",
    "trust.support.desc": "Support Available",

    // How to get started
    "started.title": "How to Get Started",
    "started.subtitle": "Simple steps to find your perfect caregiver",
    "started.step1": "Search Caregivers",
    "started.step1.desc": "Find verified caregivers near you",
    "started.step2": "Review Profiles",
    "started.step2.desc": "Check ratings and reviews",
    "started.step3": "Book & Enjoy",
    "started.step3.desc": "Secure booking with peace of mind",

    // How it works
    "works.title": "How CareFinder Works",
    "works.subtitle": "Simple steps to find the perfect caregiver",
    "works.step1": "Search & Filter",
    "works.step1.desc":
      "Browse verified caregivers in your area. Filter by services, experience, ratings, and availability to find the perfect match.",
    "works.step2": "Connect & Book",
    "works.step2.desc":
      "Message caregivers directly, review their profiles and references, then book services that fit your schedule and budget.",
    "works.step3": "Enjoy Peace of Mind",
    "works.step3.desc":
      "Receive quality care with secure payments, real-time updates, and 24/7 support. Rate your experience to help our community.",

    // Safety section
    "safety.title": "Your Safety is Our Priority",
    "safety.subtitle":
      "Every caregiver goes through our comprehensive 3-tier verification system: document verification, skills training, and ongoing service quality monitoring.",
    "safety.doc.title": "Document Verification",
    "safety.doc.desc":
      "Police clearance certificates, educational credentials, and comprehensive identity verification for all caregivers.",
    "safety.payment.title": "Secure Payments",
    "safety.payment.desc":
      "Protected payments with escrow services and secure transaction processing through PayHere.",
    "safety.quality.title": "Quality Assurance",
    "safety.quality.desc":
      "Regular on-site visits by quality agents to ensure service standards and continuous improvement.",

    // Statistics
    "stats.caregivers": "Verified Caregivers",
    "stats.families": "Happy Families",
    "stats.rating": "Average Rating",
    "stats.support": "Support Available",

    // CTA section
    "cta.title": "Ready to Find Your Perfect Caregiver?",
    "cta.subtitle":
      "Join thousands of families who trust CareFinder for their care needs. Get started today and experience the peace of mind you deserve.",
    "cta.primary": "Get Started Now",
    "cta.secondary": "Learn More",
  },
  si: {
    // Header
    "nav.home": "මුල් පිටුව",
    "nav.services": "සේවාවන්",
    "nav.about": "අප ගැන",
    "nav.contact": "සම්බන්ධ වන්න",
    "nav.login": "ප්‍රවේශය",
    "nav.register": "ලියාපදිංචිය",
    "nav.how-it-works": "ක්‍රමවේදය",
    "nav.safety": "ආරක්ෂාව",

    // Hero Section
    "hero.title": "ශ්‍රී ලංකාවේ විශ්වසනීය සත්කාර සේවාවන්",
    "hero.subtitle":
      "ළමා සත්කාරය, වැඩිහිටි සත්කාරය සහ විශේෂ අවශ්‍යතා සහාය සඳහා සත්‍යාපිත සත්කාරකයන් සමඟ සම්බන්ධ වන්න. ඔබේ පවුල සඳහා ආරක්ෂිත, විශ්වසනීය සහ වෘත්තීය සත්කාර විසඳුම්.",
    "hero.cta.primary": "සත්කාරකයන් සොයන්න",
    "hero.cta.secondary": "සත්කාරකයෙකු වන්න",

    // Services
    "services.title": "අපගේ සත්කාර සේවාවන්",
    "services.comprehensive.title": "සවිස්තරාත්මක සත්කාර සේවාවන්",
    "services.comprehensive.subtitle":
      "ඔබේ පවුලේ අද්විතීය අවශ්‍යතාවන්ට ගැලපුම් කරන ලද වෘත්තීය සත්කාර විසඳුම්",
    "services.childcare.title": "ළමා සත්කාරය",
    "services.childcare.desc": "ඔබේ දරුවන් සඳහා වෘත්තීය ළමා රැකවරණය",
    "services.childcare.feature1": "පාසල් ගිය පසු සත්කාරය",
    "services.childcare.feature2": "සති අන්ත ළමා රැකවරණය",
    "services.childcare.feature3": "පූර්ණකාලීන ධාත්‍රී සේවාවන්",
    "services.elderly.title": "වැඩිහිටි සත්කාරය",
    "services.elderly.desc": "වැඩිහිටියන් සඳහා කරුණාවන්ත සත්කාරය සහ සහචරත්වය",
    "services.elderly.feature1": "පෞද්ගලික සත්කාර සහාය",
    "services.elderly.feature2": "ඖෂධ මතක් කිරීම්",
    "services.elderly.feature3": "සහචරත්ව සේවාවන්",
    "services.special.title": "විශේෂ අවශ්‍යතා",
    "services.special.desc":
      "අද්විතීය අවශ්‍යතා ඇති පුද්ගලයන් සඳහා විශේෂිත සහාය",
    "services.special.feature1": "පුහුණු වෘත්තිකයන්",
    "services.special.feature2": "අභිරුචිකරණය කළ සත්කාර සැලසුම්",
    "services.special.feature3": "24/7 ලබා ගත හැකිභාවය",

    // Features
    "features.title": "ඇයි CareFinder තෝරාගන්නේ?",
    "features.verified.title": "සත්‍යාපිත සත්කාරකයන්",
    "features.verified.desc":
      "සියලුම සත්කාරකයන් පසුබිම් පරීක්ෂණ සහ සත්‍යාපනයට ලක් වේ",
    "features.quality.title": "ගුණාත්මකභාව සහතිකය",
    "features.quality.desc":
      "අපගේ පුහුණු නියෝජිතයන් විසින් පරිශ්‍රයේ ගුණාත්මක පරීක්ෂණ",
    "features.secure.title": "ආරක්ෂිත ගෙවීම්",
    "features.secure.desc":
      "එස්ක්‍රෝ ආරක්ෂණය සමඟ ආරක්ෂිත ගෙවීම් ක්‍රියාකාරිත්වය",
    "features.support.title": "24/7 සහාය",
    "features.support.desc": "ඔබට අවශ්‍ය වූ විට 24 පැය පාරිභෝගික සහාය",

    // Footer
    "footer.company": "සමාගම",
    "footer.services": "සේවාවන්",
    "footer.support": "සහාය",
    "footer.legal": "නීතිමය",
    "footer.privacy": "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    "footer.terms": "සේවා කොන්දේසි",
    "footer.copyright": "© 2024 CareFinder. සියලුම හිමිකම් ගෙවා ඇත.",

    // Trust indicators
    "trust.verified": "සත්‍යාපිත",
    "trust.verified.desc": "පසුබිම් පරීක්ෂණය",
    "trust.secure": "ආරක්ෂිත",
    "trust.secure.desc": "ආරක්ෂිත ගෙවීම්",
    "trust.support": "24/7",
    "trust.support.desc": "සහාය ලබා ගත හැකිය",

    // How to get started
    "started.title": "ආරම්භ කරන්නේ කෙසේද",
    "started.subtitle": "ඔබේ පරිපූර්ණ සත්කාරකයා සොයා ගැනීමට සරල පියවර",
    "started.step1": "සත්කාරකයන් සොයන්න",
    "started.step1.desc": "ඔබ අසල සත්‍යාපිත සත්කාරකයන් සොයන්න",
    "started.step2": "පැතිකඩ සමාලෝචනය",
    "started.step2.desc": "ශ්‍රේණිගත කිරීම් සහ සමාලෝචන පරීක්ෂා කරන්න",
    "started.step3": "වෙන්කරවා ගෙන භුක්ති විඳින්න",
    "started.step3.desc": "මානසික සාමයක් සමඟ ආරක්ෂිත වෙන්කරවා ගැනීම",

    // How it works
    "works.title": "CareFinder ක්‍රියා කරන්නේ කෙසේද",
    "works.subtitle": "පරිපූර්ණ සත්කාරකයා සොයා ගැනීමට සරල පියවර",
    "works.step1": "සොයන්න සහ පෙරහන් කරන්න",
    "works.step1.desc":
      "ඔබේ ප්‍රදේශයේ සත්‍යාපිත සත්කාරකයන් පිරික්සන්න. පරිපූර්ණ ගැලපීම සොයා ගැනීමට සේවාවන්, අත්දැකීම්, ශ්‍රේණිගත කිරීම් සහ ලබා ගත හැකි බව අනුව පෙරහන් කරන්න.",
    "works.step2": "සම්බන්ධ වී වෙන්කරවා ගන්න",
    "works.step2.desc":
      "සත්කාරකයන් සමඟ සෘජුව පණිවිඩ කරන්න, ඔවුන්ගේ පැතිකඩ සහ යොමු කිරීම් සමාලෝචනය කරන්න, පසුව ඔබේ කාලසටහනට සහ අයවැයට ගැලපෙන සේවාවන් වෙන්කරවා ගන්න.",
    "works.step3": "මානසික සාමය භුක්ති විඳින්න",
    "works.step3.desc":
      "ආරක්ෂිත ගෙවීම්, තත්‍ය කාලීන යාවත්කාලීන කිරීම් සහ 24/7 සහාය සමඟ ගුණාත්මක සත්කාරයක් ලබා ගන්න. අපගේ ප්‍රජාවට උදව් වීමට ඔබේ අත්දැකීම ශ්‍රේණිගත කරන්න.",

    // Safety section
    "safety.title": "ඔබේ ආරක්ෂාව අපගේ ප්‍රමුඛතාවයයි",
    "safety.subtitle":
      "සෑම සත්කාරකයෙකුම අපගේ සවිස්තරාත්මක 3-ස්ථර සත්‍යාපන පද්ධතිය හරහා ගමන් කරයි: ලේඛන සත්‍යාපනය, කුසලතා පුහුණුව සහ අඛණ්ඩ සේවා ගුණාත්මකභාව අධීක්ෂණය.",
    "safety.doc.title": "ලේඛන සත්‍යාපනය",
    "safety.doc.desc":
      "සියලුම සත්කාරකයන් සඳහා පොලිස් නිදහස් කිරීමේ සහතික, අධ්‍යාපනික අක්තපත්‍ර සහ සවිස්තරාත්මක අනන්‍යතා සත්‍යාපනය.",
    "safety.payment.title": "ආරක්ෂිත ගෙවීම්",
    "safety.payment.desc":
      "PayHere හරහා එස්ක්‍රෝ සේවාවන් සහ ආරක්ෂිත ගනුදෙනු ක්‍රියාකාරිත්වය සමඟ ආරක්ෂිත ගෙවීම්.",
    "safety.quality.title": "ගුණාත්මකභාව සහතිකය",
    "safety.quality.desc":
      "සේවා ප්‍රමිතීන් සහ අඛණ්ඩ වැඩිදියුණු කිරීම සහතික කිරීම සඳහා ගුණාත්මක නියෝජිතයන් විසින් නිතිපතා ස්ථානීය සංචාර.",

    // Statistics
    "stats.caregivers": "සත්‍යාපිත සත්කාරකයන්",
    "stats.families": "සතුටු පවුල්",
    "stats.rating": "සාමාන්‍ය ශ්‍රේණිගත කිරීම",
    "stats.support": "සහාය ලබා ගත හැකිය",

    // CTA section
    "cta.title": "ඔබේ පරිපූර්ණ සත්කාරකයා සොයා ගැනීමට සූදානම්ද?",
    "cta.subtitle":
      "ඔවුන්ගේ සත්කාර අවශ්‍යතා සඳහා CareFinder විශ්වාස කරන දහස් ගණන් පවුල් සමඟ එක් වන්න. අද ආරම්භ කර ඔබ ලැබිය යුතු මානසික සාමය අත්විඳින්න.",
    "cta.primary": "දැන් ආරම්භ කරන්න",
    "cta.secondary": "වැඩිදුර ඉගෙන ගන්න",
  },
  ta: {
    // Header
    "nav.home": "முகப்பு",
    "nav.services": "சேவைகள்",
    "nav.about": "எங்களைப் பற்றி",
    "nav.contact": "தொடர்பு",
    "nav.login": "நுழைவு",
    "nav.register": "பதிவு",
    "nav.how-it-works": "எப்படி வேலை செய்கிறது",
    "nav.safety": "பாதுகாப்பு",

    // Hero Section
    "hero.title": "இலங்கையில் நம்பகமான பராமரிப்பு சேவைகள்",
    "hero.subtitle":
      "குழந்தை பராமரிப்பு, முதியோர் பராமரிப்பு மற்றும் சிறப்பு தேவைகள் ஆதரவிற்காக சரிபார்க்கப்பட்ட பராமரிப்பாளர்களுடன் இணைந்தொழுகுங்கள். உங்கள் குடும்பத்திற்கான பாதுகாப்பான, நம்பகமான மற்றும் தொழில்முறை பராமரிப்பு தீர்வுகள்.",
    "hero.cta.primary": "பராமரிப்பாளர்களைக் கண்டறியுங்கள்",
    "hero.cta.secondary": "பராமரிப்பாளராக மாறுங்கள்",

    // Services
    "services.title": "எங்கள் பராமரிப்பு சேவைகள்",
    "services.comprehensive.title": "விரிவான பராமரிப்பு சேவைகள்",
    "services.comprehensive.subtitle":
      "உங்கள் குடும்பத்தின் தனித்துவமான தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட தொழில்முறை பராமரிப்பு தீர்வுகள்",
    "services.childcare.title": "குழந்தை பராமரிப்பு",
    "services.childcare.desc":
      "உங்கள் குழந்தைகளுக்கான தொழில்முறை குழந்தை பராமரிப்பு",
    "services.childcare.feature1": "பள்ளிக்குப் பிந்தைய பராமரிப்பு",
    "services.childcare.feature2": "வார இறுதி குழந்தை பராமரிப்பு",
    "services.childcare.feature3": "முழுநேர ஆயா சேவைகள்",
    "services.elderly.title": "முதியோர் பராமரிப்பு",
    "services.elderly.desc": "முதியவர்களுக்கான அன்பான பராமரிப்பு மற்றும் தோழமை",
    "services.elderly.feature1": "தனிப்பட்ட பராமரிப்பு உதவி",
    "services.elderly.feature2": "மருந்து நினைவூட்டல்கள்",
    "services.elderly.feature3": "தோழமை சேவைகள்",
    "services.special.title": "சிறப்பு தேவைகள்",
    "services.special.desc":
      "தனித்துவமான தேவைகள் உள்ள நபர்களுக்கான சிறப்பு ஆதரவு",
    "services.special.feature1": "பயிற்சி பெற்ற நிபுணர்கள்",
    "services.special.feature2": "தனிப்பயனாக்கப்பட்ட பராமரிப்பு திட்டங்கள்",
    "services.special.feature3": "24/7 கிடைக்கும் தன்மை",

    // Features
    "features.title": "ஏன் CareFinder ஐ தேர்வு செய்ய வேண்டும்?",
    "features.verified.title": "சரிபார்க்கப்பட்ட பராமரிப்பாளர்கள்",
    "features.verified.desc":
      "அனைத்து பராமரிப்பாளர்களும் பின்னணி சோதனைகள் மற்றும் சரிபார்ப்புக்கு உட்படுத்தப்படுகிறார்கள்",
    "features.quality.title": "தர உத்தரவாதம்",
    "features.quality.desc":
      "எங்கள் பயிற்சி பெற்ற முகவர்களால் தளத்தில் தர சோதனைகள்",
    "features.secure.title": "பாதுகாப்பான கொடுப்பனவுகள்",
    "features.secure.desc":
      "எஸ்க்ரோ பாதுகாப்புடன் பாதுகாப்பான கொடுப்பனவு செயலாக்கம்",
    "features.support.title": "24/7 ஆதரவு",
    "features.support.desc":
      "உங்களுக்கு தேவைப்படும் போது 24 மணி நேர வாடிக்கையாளர் ஆதரவு",

    // Footer
    "footer.company": "நிறுவனம்",
    "footer.services": "சேவைகள்",
    "footer.support": "ஆதரவு",
    "footer.legal": "சட்டப்பூர்வ",
    "footer.privacy": "தனியுரிமைக் கொள்கை",
    "footer.terms": "சேவை விதிமுறைகள்",
    "footer.copyright":
      "© 2024 CareFinder. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    // Trust indicators
    "trust.verified": "சரிபார்க்கப்பட்டது",
    "trust.verified.desc": "பின்னணி சோதனை",
    "trust.secure": "பாதுகாப்பான",
    "trust.secure.desc": "பாதுகாக்கப்பட்ட கொடுப்பனவுகள்",
    "trust.support": "24/7",
    "trust.support.desc": "ஆதரவு கிடைக்கும்",

    // How to get started
    "started.title": "எப்படி தொடங்குவது",
    "started.subtitle": "உங்கள் சரியான பராமரிப்பாளரைக் கண்டறிய எளிய படிகள்",
    "started.step1": "பராமரிப்பாளர்களைத் தேடுங்கள்",
    "started.step1.desc":
      "உங்கள் அருகில் சரிபார்க்கப்பட்ட பராமரிப்பாளர்களைக் கண்டறியுங்கள்",
    "started.step2": "விவரக்குறிப்புகளை மதிப்பாய்வு செய்யுங்கள்",
    "started.step2.desc": "மதிப்பீடுகள் மற்றும் மதிப்புரைகளைச் சரிபார்க்கவும்",
    "started.step3": "முன்பதிவு செய்து அனுபவியுங்கள்",
    "started.step3.desc": "மன அமைதியுடன் பாதுகாப்பான முன்பதிவு",

    // How it works
    "works.title": "CareFinder எப்படி வேலை செய்கிறது",
    "works.subtitle": "சரியான பராமரிப்பாளரைக் கண்டறிய எளிய படிகள்",
    "works.step1": "தேடுங்கள் மற்றும் வடிகட்டுங்கள்",
    "works.step1.desc":
      "உங்கள் பகுதியில் சரிபார்க்கப்பட்ட பராமரிப்பாளர்களை உலாவுங்கள். சரியான பொருத்தத்தைக் கண்டறிய சேவைகள், அனுபவம், மதிப்பீடுகள் மற்றும் கிடைக்கும் தன்மை மூலம் வடிகட்டுங்கள்.",
    "works.step2": "இணைந்து முன்பதிவு செய்யுங்கள்",
    "works.step2.desc":
      "பராமரிப்பாளர்களுடன் நேரடியாக செய்தி அனுப்புங்கள், அவர்களின் விவரக்குறிப்புகள் மற்றும் குறிப்புகளை மதிப்பாய்வு செய்யுங்கள், பின்னர் உங்கள் அட்டவணை மற்றும் பட்ஜெட்டுக்கு ஏற்ற சேவைகளை முன்பதிவு செய்யுங்கள்.",
    "works.step3": "மன அமைதியை அனுபவியுங்கள்",
    "works.step3.desc":
      "பாதுகாப்பான கொடுப்பனவுகள், நிகழ்நேர புதுப்பிப்புகள் மற்றும் 24/7 ஆதரவுடன் தரமான பராமரிப்பைப் பெறுங்கள். எங்கள் சமூகத்திற்கு உதவ உங்கள் அனுபவத்தை மதிப்பிடுங்கள்.",

    // Safety section
    "safety.title": "உங்கள் பாதுகாப்பு எங்கள் முன்னுரிமை",
    "safety.subtitle":
      "ஒவ்வொரு பராமரிப்பாளரும் எங்கள் விரிவான 3-அடுக்கு சரிபார்ப்பு அமைப்பு வழியாக செல்கிறார்கள்: ஆவண சரிபார்ப்பு, திறன் பயிற்சி மற்றும் தொடர்ச்சியான சேவை தரக் கண்காணிப்பு.",
    "safety.doc.title": "ஆவண சரிபார்ப்பு",
    "safety.doc.desc":
      "அனைத்து பராமரிப்பாளர்களுக்கும் போலீஸ் அனுமதி சான்றிதழ்கள், கல்வி சான்றுகள் மற்றும் விரிவான அடையாள சரிபார்ப்பு.",
    "safety.payment.title": "பாதுகாப்பான கொடுப்பனவுகள்",
    "safety.payment.desc":
      "PayHere மூலம் எஸ்க்ரோ சேவைகள் மற்றும் பாதுகாப்பான பரிவர்த்தனை செயலாக்கத்துடன் பாதுகாக்கப்பட்ட கொடுப்பனவுகள்.",
    "safety.quality.title": "தர உத்தரவாதம்",
    "safety.quality.desc":
      "சேவை தரநிலைகள் மற்றும் தொடர்ச்சியான மேம்பாட்டை உறுதிப்படுத்த தர முகவர்களால் வழக்கமான தள வருகைகள்.",

    // Statistics
    "stats.caregivers": "சரிபார்க்கப்பட்ட பராமரிப்பாளர்கள்",
    "stats.families": "மகிழ்ச்சியான குடும்பங்கள்",
    "stats.rating": "சராசரி மதிப்பீடு",
    "stats.support": "ஆதரவு கிடைக்கும்",

    // CTA section
    "cta.title": "உங்கள் சரியான பராமரிப்பாளரைக் கண்டறிய தயாரா?",
    "cta.subtitle":
      "அவர்களின் பராமரிப்பு தேவைகளுக்காக CareFinder ஐ நம்பும் ஆயிரக்கணக்கான குடும்பங்களுடன் சேருங்கள். இன்றே தொடங்கி நீங்கள் தகுதியான மன அமைதியை அனுபவியுங்கள்.",
    "cta.primary": "இப்போது தொடங்குங்கள்",
    "cta.secondary": "மேலும் அறியுங்கள்",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(
        "carefinder-language",
      ) as Language;
      if (savedLanguage && ["en", "si", "ta"].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("carefinder-language", lang);
    }
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
