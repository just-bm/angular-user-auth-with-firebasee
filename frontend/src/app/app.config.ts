import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular-auth-47325", appId: "1:286582940074:web:557ea863138ab4a0e64bd3", storageBucket: "angular-auth-47325.firebasestorage.app", apiKey: "AIzaSyA_DwE7vJjG9gnwCe_ZCIwPGduKtEKXW50", authDomain: "angular-auth-47325.firebaseapp.com", messagingSenderId: "286582940074", measurementId: "G-38WHQR3ED6" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
