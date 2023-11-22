// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import{getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjBUpc_L9wDAvX_zVIfWOxfxwuhbWjos",
  authDomain: "react-native-login-3a7de.firebaseapp.com",
  projectId: "react-native-login-3a7de",
  storageBucket: "react-native-login-3a7de.appspot.com",
  messagingSenderId: "558236258647",
  appId: "1:558236258647:web:2d6a958266bf0689c2ae12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication servers
export const auth=getAuth(app);