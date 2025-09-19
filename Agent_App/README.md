# CareFinder Agent Mobile App

A React Native mobile application for CareFinder quality assurance agents to manage field operations, conduct on-site verifications, and maintain quality control standards.

## Features

### 🏠 Overview Dashboard
- Real-time assignment metrics and status
- Today's schedule with next assignment priority
- Performance statistics and activity feed
- Quick action buttons for immediate tasks

### 📋 Assignment Management
- Filter assignments by status (scheduled/in-progress/completed)
- Detailed assignment information with family and caregiver details
- GPS navigation integration with Google Maps
- Direct calling to families and emergency contacts
- Real-time location tracking and arrival confirmation

### 🗺️ Navigation & GPS
- Turn-by-turn navigation to assignment locations
- Route optimization for multiple daily visits
- GPS accuracy monitoring and location logging
- Traffic conditions and weather alerts
- Emergency contact integration

### 📸 Field Documentation
- Camera integration for evidence capture
- Photo attachments to assignment reports
- Document verification photos
- Quality assurance visual documentation

### 📝 Reporting System
- Create verification reports on-site
- Quality issue reporting with categorization
- Incident reporting with photo evidence
- Real-time report submission to admin dashboard

### 👤 Agent Profile
- Professional information and credentials
- Performance statistics and ratings
- Emergency contact management
- Vehicle and equipment information
- Work schedule and availability settings

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (File-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: Expo Vector Icons
- **Camera**: Expo Camera & Image Picker
- **GPS**: Expo Location
- **State Management**: React Hooks
- **TypeScript**: Full type safety

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)
- Expo Go app on physical device (for testing)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CareFinder/Agent_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional mobile packages**
   ```bash
   npx expo install expo-camera expo-image-picker expo-location expo-media-library
   ```

## Running the App

### Development Server
```bash
npm start
# or
npx expo start
```

### Platform-specific commands
```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web (for testing)
npm run web
```

## App Structure

```
Agent_App/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Overview Dashboard
│   │   ├── assignments.tsx # Assignment Management
│   │   ├── navigation.tsx  # GPS Navigation
│   │   ├── reports.tsx    # Reporting System
│   │   └── profile.tsx    # Agent Profile
│   ├── splash.tsx         # Splash Screen
│   ├── login.tsx          # Authentication
│   └── _layout.tsx        # Root Layout
├── components/            # Reusable Components
│   ├── CameraCapture.tsx  # Camera functionality
│   └── LocationTracker.tsx# GPS tracking
├── assets/               # Images and fonts
└── package.json         # Dependencies
```

## Key Features Implementation

### GPS Tracking
- Real-time location monitoring during field visits
- Arrival confirmation with GPS coordinates
- Route optimization for daily assignments
- Location accuracy settings (high/medium/low precision)

### Camera Integration
- Evidence photo capture during verifications
- Gallery photo selection
- Photo attachment to assignment reports
- Quality assurance documentation

### Navigation Integration
- Google Maps integration for turn-by-turn navigation
- Direct launching of external navigation apps
- Route planning and optimization
- Distance and time calculations

### Assignment Workflow
1. **Scheduled** → View assignment details, navigate to location
2. **In Progress** → GPS tracking active, photo documentation
3. **Completed** → Submit reports, rate service quality

### Reporting System
- **Verification Reports**: Standard quality checks
- **Quality Issues**: Flag problems requiring attention
- **Incident Reports**: Document emergencies or safety concerns

## Mobile-Specific Features

### Offline Capability
- Assignment data caching for offline access
- Photo storage with sync when connected
- GPS tracking continues offline

### Push Notifications
- New assignment alerts
- Route updates and traffic warnings
- Emergency communication from admin

### Hardware Integration
- Camera for documentation
- GPS for precise location tracking
- Phone integration for direct calling
- Vibration for important alerts

## Demo Credentials

For testing purposes, use:
- **Agent ID**: AGT001
- **Password**: demo123

Or use the "Demo Login" button for instant access.

## Permissions Required

### iOS
- Camera access for photo documentation
- Location services for GPS tracking
- Photo library access for evidence storage

### Android
- CAMERA permission
- ACCESS_FINE_LOCATION permission
- WRITE_EXTERNAL_STORAGE permission

## Building for Production

### iOS
```bash
npx eas build --platform ios
```

### Android
```bash
npx eas build --platform android
```

## Architecture Overview

The app follows the CareFinder workflow:

1. **Agent Login** → Authentication with agent credentials
2. **Assignment Allocation** → Location-based assignment (max 5 per agent)
3. **GPS Navigation** → Route to care seeker's location
4. **On-Site Verification** → Check caregiver performance quality
5. **Documentation** → Photo evidence and detailed reporting
6. **Report Submission** → Real-time submission to admin dashboard
7. **Quality Control** → Admin review and action on reports

## Support

For technical support or feature requests:
- Contact: support@carefinder.lk
- Emergency Line: +94 11 234 5678

## Version

Current Version: 1.0.0
Quality Assurance Mobile App for CareFinder Platform
