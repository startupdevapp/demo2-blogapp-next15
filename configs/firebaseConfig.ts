// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'stdev-bdd45.firebaseapp.com',
	projectId: 'stdev-bdd45',
	storageBucket: 'stdev-bdd45.appspot.com',
	messagingSenderId: '909447250733',
	appId: '1:909447250733:web:c1772b1b0a0260dab349a4',
	measurementId: 'G-B5FV1C5P7C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
