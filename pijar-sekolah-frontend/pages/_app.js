import '../styles/globals.css';
import { useEffect } from 'react';
import { requestFirebaseNotificationPermission, onFirebaseMessage } from '../firebase-messaging';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    requestFirebaseNotificationPermission();
    onFirebaseMessage((payload) => {
      alert('New notification: ' + JSON.stringify(payload));
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
