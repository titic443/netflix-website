import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZoRyJHblGrAWZmzGVKsY31xQbF84qedc",
  authDomain: "react-netflix-clone-cede8.firebaseapp.com",
  projectId: "react-netflix-clone-cede8",
  storageBucket: "react-netflix-clone-cede8.appspot.com",
  messagingSenderId: "303260050502",
  appId: "1:303260050502:web:c6e462f26566d2060fd647",
  measurementId: "G-37SB03Z1DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);