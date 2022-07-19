import { 
    auth,
    signInWithGooglePopUp, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth, 
} from "../../utilities/firebase/firebase.utilities";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In to see your Stacy's Stars Rewards!</h1>
            <p>Having a Stars Rewards account with Stacy's allows you to earn 2% unlimited cash back on all purchases made on stacys.com and Stacy's stores!</p>
            <p>To accomodate for the needs of all our customers, we have multiple ways for you to sign in and view your Stars Rewards!</p>
            <button onClick={logGoogleUser}>Sign In via Google (Popup)</button>
            <button onClick={signInWithGoogleRedirect}>Sign In via Google (Redirect)</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;