import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRXYvkPSAQLRFq4wG9bM0Ml51xdwc3qnM",
  projectId: "signify-sinais",
  storageBucket: "signify-sinais.firebasestorage.app",
  appId: "1:666284576054:android:1f1344840d9c43a21c3797",
  databaseURL: "https://signify-sinais-default-rtdb.firebaseio.com/"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const database = getDatabase(app);
export default app;
