import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYYWk7cP4rrUtUDeEZp1pPYuLSUAt8w7c",

  authDomain: "post-app-react-72dec.firebaseapp.com",

  projectId: "post-app-react-72dec",

  storageBucket: "post-app-react-72dec.firebasestorage.app",

  messagingSenderId: "1091020508086",

  appId: "1:1091020508086:web:b6b87a83a34fb2b8758f17",

  measurementId: "G-Y5TN3B3XLR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
