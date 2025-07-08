import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFirebaseNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
    console.log("Firebase notification token:", token);
    return token;
  } catch (error) {
    console.error("Error getting Firebase notification token", error);
  }
};

export const onFirebaseMessage = (callback) => {
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    callback(payload);
  });
};
