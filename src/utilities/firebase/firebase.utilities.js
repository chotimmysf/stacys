import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBt6MdlFV0xtYDO1ANd86MqwjjWaNcCTk8",
    authDomain: "stacys-b7667.firebaseapp.com",
    projectId: "stacys-b7667",
    storageBucket: "stacys-b7667.appspot.com",
    messagingSenderId: "45190167052",
    appId: "1:45190167052:web:c3a573e50d9a0885004c29",
    measurementId: "G-9HDM03SSSY"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  // Specific authentication for Google Accounts
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);