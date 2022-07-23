import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  
  // Specific authentication for Google Accounts
  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
      if(!userAuth) return;

      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists());

      // Check if user data exists
      if(!userSnapshot.exists()) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

    // If data doesn't exist
          try {
              await setDoc(userDocRef, {
                  displayName, email, createdAt
              });
          } catch(error) {
              console.log('There was an error creating your user account.', error.message);
          }
      }

      return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async(email, password) => {
      if(!email || !password) return;

      return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}