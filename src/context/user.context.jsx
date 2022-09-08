import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utilities/firebase/firebase.utilities";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
}); 

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload
            }
        
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};