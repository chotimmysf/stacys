import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, passwordConfirm } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password != passwordConfirm) {
            alert("Passwords do not match.");
            return;
        }

        if(password.length < 8) {
            alert("Your password must include at least 8 characters.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
          
            await createUserDocumentFromAuth(user, {
                username, email
            });
            resetFormFields();

            alert("Success! Welcome to the Stacy's Stars Rewards Club!");

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("There is already an existing account using this email.")
            }
            console.error('There was an error in creating your user information.', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Not a Stars Rewards Member?</h2>
            <span>Sign Up with your Email & Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Username"
                id="username"
                type="text"
                placeholder="Enter a username."
                required
                onChange={handleChange}
                name="username"
                value={username} 
                />
                <FormInput 
                label="Email"
                id="emailAddress"
                type="email"
                placeholder="Enter an email address."
                required
                onChange={handleChange}
                name="email"
                value={email} 
                />
                <FormInput 
                label="Password"
                id="password"
                type="password"
                placeholder="Enter a password."
                required
                onChange={handleChange}
                name="password"
                value={password} 
                />
                <FormInput 
                label="Confirm Password"
                id="passwordConfirm"
                type="password"
                placeholder="Confirm your password."
                required
                onChange={handleChange}
                name="passwordConfirm"
                value={passwordConfirm} 
                />
            <Button type="submit">Become a Stacy's Member!</Button>
            </form>
        </div>
    )
}

export default SignUpForm;