import { getByDisplayValue } from "@testing-library/react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";

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
        <div>
            <h1>Sign Up with your Email & Password</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                    <input type="text" placeholder="Enter a username." required 
                    onChange={handleChange} name="username" value={username} />
                <label for="email">Email</label>
                    <input type="email" placeholder="Enter your email." required 
                    onChange={handleChange} name="email" value={email} />
                <label for="password">Password</label>
                    <input type="password" placeholder="Enter a password." required 
                    onChange={handleChange} name="password" value={password} />
                <label for="passwordConfirm">Confirm your Password</label>
                    <input type="password" placeholder="Confirm your password." required 
                    onChange={handleChange} name="passwordConfirm" value={passwordConfirm} />
                <button type="submit">Become a Stars Rewards Member!</button>
            </form>
        </div>
    )
}

export default SignUpForm;