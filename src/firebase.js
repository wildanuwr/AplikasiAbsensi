// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqBPw-PSGgQOq2h8NiFE1e5pYk_BWgmmg",
  authDomain: "maps-d3977.firebaseapp.com",
  projectId: "maps-d3977",
  storageBucket: "maps-d3977.appspot.com",
  messagingSenderId: "983207563658",
  appId: "1:983207563658:web:bf4378e96ec78dbd567873",
  measurementId: "G-6LYZM02PRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Export Firebase Auth and Auth functions
export { auth, signInWithEmailAndPassword };
