// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASzbC5b8eG7Im63jQE3kdHjTq1Xb2c8Y0",
  authDomain: "fir-auth-yt-297cf.firebaseapp.com",
  projectId: "fir-auth-yt-297cf",
  storageBucket: "fir-auth-yt-297cf.appspot.com",
  messagingSenderId: "413867420094",
  appId: "1:413867420094:web:7048bd4896ebfe530131ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app