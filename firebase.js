const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { initializeAuth } = require("firebase/auth");
const ReactNativeAsyncStorage = require("@react-native-async-storage/async-storage");

const firebaseConfig = {
  apiKey: "AIzaSyDoNGcgxvGZj9VG4w2OIv77nqAdXUpya4c",
  authDomain: "cs35l-597d6.firebaseapp.com",
  projectId: "cs35l-597d6",
  storageBucket: "cs35l-597d6.appspot.com",
  messagingSenderId: "539845773741",
  appId: "1:539845773741:web:80b8b18e54668c80e47924",
  measurementId: "G-8Y8ZN2KD3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);
const db = getFirestore(app);

module.exports = { app, auth, db };
