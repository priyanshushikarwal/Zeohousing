import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log("Firebase Config:", {
    ...firebaseConfig,
    apiKey: firebaseConfig.apiKey ? "PRESENT" : "MISSING",
});

let app;
let auth: any;
let googleProvider: any;

try {
    if (!firebaseConfig.apiKey) {
        throw new Error("Missing Firebase API Key");
    }
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
} catch (error) {
    console.error("Firebase Initialization Error:", error);
}

export { auth, googleProvider };
