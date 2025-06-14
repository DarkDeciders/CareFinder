# 🏠 CareFinder Platform

> **Connecting families with verified caregivers through AI-powered trust and safety**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![AI Powered](https://img.shields.io/badge/AI-Powered-blue?style=flat-square&logo=openai)](https://ai.google.dev/)
[![Railway](https://img.shields.io/badge/Deploy-Railway-purple?style=flat-square&logo=railway)](https://railway.app/)

CareFinder is a comprehensive web platform that connects families seeking childcare and elderly care services with qualified, verified caregivers in Sri Lanka. The platform ensures safety through AI-powered document verification and provides intelligent matching through advanced algorithms.

## 🌟 Key Features

### 👨‍👩‍👧‍👦 For Families
- **Smart Caregiver Discovery**: Find verified caregivers by location, expertise, and availability
- **Secure Booking System**: Schedule one-time or recurring care services
- **Real-time Communication**: Direct messaging and video calls with caregivers
- **Safety First**: Access verified background checks and reviews

### 👩‍⚕️ For Caregivers
- **Professional Profiles**: Showcase experience, certifications, and specializations
- **Flexible Scheduling**: Manage availability and service preferences
- **Career Growth**: Build reputation through reviews and repeat bookings
- **Fair Compensation**: Transparent pricing and secure payment processing

### 🛡️ For Administrators
- **Hierarchical Management**: Multi-level admin system (Super, Regional, Department, Junior)
- **AI-Assisted Verification**: Automated document processing with human oversight
- **Quality Assurance**: Performance monitoring and compliance management
- **Analytics Dashboard**: Comprehensive platform insights and reporting

## 🤖 AI-Powered Features

### 📄 Document Verification System
- **Optical Character Recognition**: Extract and validate information from ID cards, licenses, and certificates
- **Fraud Detection**: Advanced algorithms to identify suspicious or tampered documents
- **Confidence Scoring**: AI-generated reliability scores for automated decision-making
- **Multi-format Support**: Process various document types with 95%+ accuracy

### 💬 RAG-Powered Chatbot
- **Intelligent Assistance**: Context-aware responses using Retrieval-Augmented Generation
- **Platform Knowledge**: Trained on CareFinder policies, procedures, and FAQ
- **Multi-language Support**: Sinhala and English language capabilities
- **24/7 Availability**: Round-the-clock customer support and guidance

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CAREFINDER PLATFORM                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Frontend (Next.js)     ←→     Backend (Node.js)       │
│  • User Interfaces              • Business Logic       │
│  • Real-time Updates            • API Endpoints        │
│  • Responsive Design            • Authentication       │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                    DATA & SERVICES                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  MongoDB Database    Cloudinary Storage    WebSocket   │
│  • User Data         • File Management     • Real-time │
│  • Bookings          • Media Optimization  • Chat      │
│  • Reviews           • CDN Distribution    • Updates   │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  AI Services          Third-party APIs                 │
│  • Gemini Vision     • PayHere Payments                │
│  • RAG Chatbot       • SendGrid Email                  │
│  • LangChain         • Railway Hosting                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit / Zustand
- **UI Components**: Headless UI / Radix UI
- **Forms**: React Hook Form + Zod validation

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer middleware
- **API Documentation**: Swagger/OpenAPI

### AI & Machine Learning
- **Document Verification**: Google Gemini Vision API
- **Chatbot**: Custom FastAPI + LangChain + RAG
- **Vector Database**: Pinecone / Chroma
- **Language Model**: Google Gemini Pro API

### External Services
- **Payments**: PayHere Gateway
- **Email**: SendGrid
- **File Storage**: Cloudinary
- **Hosting**: Railway
- **Real-time**: WebSocket

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance)
- **Git** for version control

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/carefinder-platform.git
cd carefinder-platform
```

### 2. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install AI service dependencies (if running locally)
cd ../ai-services
pip install -r requirements.txt
```

### 3. Environment Configuration
```bash
# Backend environment (.env)
cp .env.example .env

# Configure your environment variables:
# - MongoDB connection string
# - JWT secret key
# - API keys for external services
# - Database credentials
```

### 4. Database Setup
```bash
# Start MongoDB (if running locally)
mongod

# Run database migrations
cd backend
npm run db:migrate
```

### 5. Start Development Servers
```bash
# Terminal 1: Start backend server
cd backend
npm run dev

# Terminal 2: Start frontend server
cd frontend
npm run dev

# Terminal 3: Start AI services (if running locally)
cd ai-services
uvicorn main:app --reload
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **AI Services**: http://localhost:8001
- **API Documentation**: http://localhost:5000/api-docs

## 📁 Project Structure

```
carefinder-platform/
├── 📁 frontend/                 # Next.js application
│   ├── 📁 components/           # Reusable UI components
│   ├── 📁 pages/               # Next.js pages and routing
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 utils/               # Helper functions
│   └── 📁 styles/              # CSS and styling files
│
├── 📁 backend/                  # Node.js API server
│   ├── 📁 routes/              # API route handlers
│   ├── 📁 models/              # Database models
│   ├── 📁 middleware/          # Custom middleware
│   ├── 📁 services/            # Business logic services
│   └── 📁 utils/               # Utility functions
│
├── 📁 ai-services/             # AI microservices
│   ├── 📁 document-verification/ # Document processing
│   ├── 📁 rag-chatbot/         # Chatbot service
│   └── 📁 shared/              # Shared utilities
│
├── 📁 docs/                    # Documentation
├── 📁 scripts/                 # Deployment and utility scripts
└── 📄 README.md               # This file
```

## 🔧 Development Scripts

### Backend Scripts
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build production bundle
npm run start        # Start production server
npm run test         # Run test suite
npm run lint         # Run ESLint
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
```

### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Jest tests
npm run e2e          # Run Cypress end-to-end tests
```

## 🧪 Testing

### Unit Tests
```bash
# Backend unit tests
cd backend && npm test

# Frontend unit tests
cd frontend && npm test
```

### Integration Tests
```bash
# API integration tests
cd backend && npm run test:integration

# End-to-end tests
cd frontend && npm run test:e2e
```

### AI Service Tests
```bash
# AI service tests
cd ai-services && python -m pytest
```

## 🚀 Deployment

### Production Deployment on Railway

1. **Connect Repository**: Link your GitHub repository to Railway
2. **Environment Variables**: Configure production environment variables
3. **Database**: Set up MongoDB Atlas or Railway PostgreSQL
4. **Build & Deploy**: Railway automatically builds and deploys

### Manual Deployment
```bash
# Build applications
npm run build

# Start production servers
npm run start
```

### Docker Deployment
```bash
# Build Docker images
docker-compose build

# Start services
docker-compose up -d
```

## 🔐 Environment Variables

### Backend Configuration
```env
# Database
MONGODB_URI=mongodb://localhost:27017/carefinder
DB_NAME=carefinder

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRE=7d

# External APIs
GEMINI_API_KEY=your-gemini-api-key
PAYHERE_MERCHANT_ID=your-payhere-merchant-id
PAYHERE_SECRET=your-payhere-secret
SENDGRID_API_KEY=your-sendgrid-api-key

# File Storage
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend Configuration
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_AI_SERVICE_URL=http://localhost:8001

# External Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Getting Started with Development
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write or update tests
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style Guidelines
- Follow ESLint and Prettier configurations
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📊 Performance & Monitoring

### Key Metrics
- **Response Time**: < 200ms for API endpoints
- **Uptime**: 99.9% availability target
- **AI Accuracy**: 95%+ for document verification
- **User Satisfaction**: Tracked through reviews and feedback

### Monitoring Tools
- **Application Monitoring**: Railway built-in monitoring
- **Error Tracking**: Integrated error logging
- **Performance Metrics**: Custom analytics dashboard
- **User Analytics**: Behavior tracking and insights

## 🔒 Security

### Security Measures
- **Data Encryption**: End-to-end encryption for sensitive data
- **Authentication**: JWT-based secure authentication
- **Input Validation**: Comprehensive input sanitization
- **Rate Limiting**: API rate limiting to prevent abuse
- **Security Headers**: Proper HTTP security headers

### Privacy Compliance
- **GDPR Compliance**: Full European data protection compliance
- **Data Minimization**: Collect only necessary information
- **User Consent**: Clear consent mechanisms
- **Data Retention**: Automated data lifecycle management

## 📚 API Documentation

### REST API Endpoints
- **Authentication**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Caregivers**: `/api/caregivers/*`
- **Bookings**: `/api/bookings/*`
- **Payments**: `/api/payments/*`
- **Chat**: `/api/chat/*`

### AI Service Endpoints
- **Document Verification**: `/verify-document`
- **Chatbot**: `/chat`
- **Health Check**: `/health`

Full API documentation is available at `/api-docs` when running the development server.

## 🆘 Support & Help

### Getting Help
- **Documentation**: Check our comprehensive docs
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: contact@carefinder.lk for business inquiries

### FAQ
**Q: How do I reset my development database?**
A: Run `npm run db:reset` in the backend directory.

**Q: Why are my AI services not working?**
A: Ensure your API keys are properly configured in the environment variables.

**Q: How do I update dependencies?**
A: Use `npm update` and check for major version updates manually.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for advanced AI capabilities
- **Railway** for seamless deployment platform
- **Open Source Community** for excellent tools and libraries
- **Contributors** who help make CareFinder better

---

**Made with ❤️ by the CareFinder Team**

For more information, visit our [Documentation](docs/) or contact us at contact@carefinder.lk
