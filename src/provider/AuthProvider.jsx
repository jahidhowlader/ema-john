import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignin = _ => {
        return signInWithPopup(auth, googleProvider)
    }

    const creatUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const siginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logout = _ => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe
        }

    }, [])

    const data = {
        user,
        loading,
        creatUser,
        siginUser,
        logout,
        googleSignin
    }


    return (
        <AuthContext.Provider
            value={data} 
        >{children}</AuthContext.Provider>
    );
};

export default AuthProvider;