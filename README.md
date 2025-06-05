# Angular Firebase Authentication System

This project provides a complete user authentication system using Angular and Firebase. It includes registration, login, protected routes, and session management.

## Features

- 🔐 Email/password authentication  
- 🛡️ Route protection with auth guards  
- 📱 Firebase integration  
- 🔄 Real-time authentication state  
- 🧩 Modular Angular components  

## Prerequisites

- Node.js (v18+)  
- Angular CLI (v17+)  
- Firebase account  
- Git (optional)  

## Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)  
2. Create a new project  
3. Enable **Email/Password** authentication:  
   - Authentication → Sign-in method → Enable Email/Password  

### 2. Get Firebase Configuration
1. In Firebase Console:  
   - Project settings → Your apps → Web app  
2. Register your app and copy the configuration object  

### 3. Set Up Angular Project
``bash
# Clone the repository
git clone https://github.com/yourusername/angular-firebase-auth.git
cd angular-firebase-auth

# Install dependencies
npm install

# Configure Firebase
# Create environment file with your Firebase config
echo "export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};" > src/environments/environment.ts




## Project Structure
src/
├── app/
│   ├── auth/
│   │   ├── auth.service.ts
│   │   └── auth.guard.ts
│   ├── components/
│   │   ├── login/
│   │   ├── register/
│   │   └── dashboard/
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   └── app.component.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── index.html
