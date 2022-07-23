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

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== passwordConfirm) {
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
            <h1>Not a Stars Rewards Member? Sign Up!</h1>
            <p>Having a Stars Rewards account with Stacy's allows you to earn 2% unlimited cash back on all purchases made on stacys.com and Stacy's stores!</p>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Username"
                type="text"
                placeholder="Enter a username."
                required
                onChange={handleChange}
                name="username"
                value={username} 
                />
                <FormInput 
                label="Email"
                type="email"
                placeholder="Enter an email address."
                required
                onChange={handleChange}
                name="email"
                value={email} 
                />
                <FormInput 
                label="Password"
                type="password"
                placeholder="Enter a password."
                required
                onChange={handleChange}
                name="password"
                value={password} 
                />
                <FormInput 
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password."
                required
                onChange={handleChange}
                name="passwordConfirm"
                value={passwordConfirm} 
                />
            <Button type="submit">Sign Up & Start Earning Stars!</Button>
            </form>
        </div>
    )
}

export default SignUpForm;