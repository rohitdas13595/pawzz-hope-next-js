// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNsvdHCTp_gdmdSjxOJSqoO5yqFWE4Tk",
  authDomain: "pawzz-hope.firebaseapp.com",
  projectId: "pawzz-hope",
  storageBucket: "pawzz-hope.appspot.com",
  messagingSenderId: "449734718907",
  appId: "1:449734718907:web:0d507b907d02619267009e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function onAuthStateChanged(cb) {
  return auth.onAuthStateChanged(cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
