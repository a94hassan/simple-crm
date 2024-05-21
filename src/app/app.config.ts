import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-23c12","appId":"1:479640825162:web:fa7d8fedf5c1046b7165b3","storageBucket":"simple-crm-23c12.appspot.com","apiKey":"AIzaSyDdlS0FUcKMpjrsHqi-GUuGhNR9sWaPW1E","authDomain":"simple-crm-23c12.firebaseapp.com","messagingSenderId":"479640825162"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-23c12","appId":"1:479640825162:web:fa7d8fedf5c1046b7165b3","storageBucket":"simple-crm-23c12.appspot.com","apiKey":"AIzaSyDdlS0FUcKMpjrsHqi-GUuGhNR9sWaPW1E","authDomain":"simple-crm-23c12.firebaseapp.com","messagingSenderId":"479640825162"})), provideFirestore(() => getFirestore())]
};
