import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBa73AtzPLJrrYvXHGB4qp5Cw79C2mdrrM",
  authDomain: "webproject-48f23.firebaseapp.com",
  projectId: "webproject-48f23",
  storageBucket: "webproject-48f23.firebasestorage.app",
  messagingSenderId: "323298714813",
  appId: "1:323298714813:web:a5076e44294a9aeb9cc3d4",
  measurementId: "G-JKY5BSMWLC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(
  app,
  "https://webproject-48f23-default-rtdb.firebaseio.com"
);