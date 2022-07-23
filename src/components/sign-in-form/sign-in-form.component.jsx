import { useState } from "react";
import { 
    auth,
    signInWithGooglePopUp,  
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword, 
} from "../../utilities/firebase/firebase.utilities";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    signInEmail: '',
    signInPassword: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { signInEmail, signInPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);
            console.log(response);
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("The email or password provided is incorrect.");
                    break;
                case 'auth/user-not-found':
                    alert("This email address isn't registered as a Stars Member. Please create an account instead.");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className="sign-in-container">
            <h1>Access Your Stars Rewards!</h1>
            <p>To view your rewards, sign in with your email & password.</p>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label='Sign In Email'
                type="email"
                placeholder="Enter your email address."
                required
                onChange={handleChange}
                name='signInEmail'
                value={signInEmail}
                />
                <FormInput 
                label='Sign In Password'
                type="password"
                placeholder="Enter your password."
                required
                onChange={handleChange}
                name='signInPassword'
                value={signInPassword}
                />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    )

}

export default SignInForm;