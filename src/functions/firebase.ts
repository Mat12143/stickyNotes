import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { writable } from "svelte/store";

const fireConfig = {
  apiKey: "AIzaSyAj1GkpzzVE7tK9N3kq59X4gsInyFrueQw",

  authDomain: "stickynotes-3db0c.firebaseapp.com",

  projectId: "stickynotes-3db0c",

  storageBucket: "stickynotes-3db0c.appspot.com",

  messagingSenderId: "918176518330",

  appId: "1:918176518330:web:8896da0290840b40f1b283",

  measurementId: "G-QY2Q9KD7ZY",
};

const app = initializeApp(fireConfig);

export const auth = getAuth(app);
export const authUser = writable(null);
export const db = getFirestore(app);

auth.onAuthStateChanged((newStatus) => {
  if (newStatus) authUser.set(newStatus);
  else authUser.set(null);
});
