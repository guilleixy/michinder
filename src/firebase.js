import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV1xt47e2rcyci5hN7i3H4i9SiVcwEfhA",
  authDomain: "michinder-b45a0.firebaseapp.com",
  projectId: "michinder-b45a0",
  storageBucket: "michinder-b45a0.appspot.com",
  messagingSenderId: "679263779595",
  appId: "1:679263779595:web:423a9c12532dd8b911400e",
  measurementId: "G-VM5VPH2SH0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };