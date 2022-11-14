import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-FO7x2yzx3aBpfNGAfhFZ9QWXN1-DG4",
  authDomain: "eshop-fcfc7.firebaseapp.com",
  projectId: "eshop-fcfc7",
  storageBucket: "eshop-fcfc7.appspot.com",
  messagingSenderId: "798477045134",
  appId: "1:798477045134:web:c1f10ec1f9d3f449a8a8df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;