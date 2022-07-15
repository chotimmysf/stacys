import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

// useEffect with fetchData const (Does NOT cause sign in page to blank out!)
useEffect(() => {
    const fetchData = async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }
}, []);

// useEffect without fetchData const (Causes sign in page to blank out!)
useEffect(async() => {
    const response = await getRedirectResult(auth);
    console.log(response);
}, []);

const testVariable = print("Hello World");