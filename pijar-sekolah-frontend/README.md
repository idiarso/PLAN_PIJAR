# SIM Sekolah SMKN 1 Punggelan Frontend

This is the frontend application for the SIM Sekolah SMKN 1 Punggelan clone project. It is built with Next.js and integrates Firebase for push notifications.

## Features

- User login and authentication
- School data search and display
- Firebase Cloud Messaging integration for push notifications

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository or download the frontend folder.
2. Navigate to the frontend directory:

```bash
cd pijar-sekolah-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Firebase Setup

You need to configure Firebase for push notifications:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Cloud Messaging and get your Firebase config object.
3. Replace the placeholder values in `firebase-messaging.js` with your Firebase config.
4. Add your VAPID key in `firebase-messaging.js` for web push.

## Usage

- Use the login form to authenticate with the backend.
- Load and search schools using the provided interface.
- Receive push notifications via Firebase.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [SIM Sekolah SMKN 1 Punggelan UI Reference](https://anyflip.com/cmfah/vkpx/basic)
- [YouTube Tutorial](https://www.youtube.com/watch?v=lpi_jeJAjyk)
