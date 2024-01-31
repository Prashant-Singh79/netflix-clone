import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAG4fzr5lt25O1FqC2Grha6ms063h9hiy8",
  authDomain: "netflix-clone-9a7c6.firebaseapp.com",
  projectId: "netflix-clone-9a7c6",
  storageBucket: "netflix-clone-9a7c6.appspot.com",
  messagingSenderId: "562621238839",
  appId: "1:562621238839:web:f7356cf8b75c4a3214f9b2",
  measurementId: "G-G0WQV6JXLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)