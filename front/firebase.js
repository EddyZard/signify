import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRXYvkPSAQLRFq4wG9bM0Ml51xdwc3qnM",
  projectId: "signify-sinais",
  storageBucket: "signify-sinais.firebasestorage.app",
  appId: "1:666284576054:android:1f1344840d9c43a21c3797",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export default app;
