/* eslint-disable react/prop-types */
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Fire.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const profileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        }).then(() => {
            setUser((prevUser) => ({
                ...prevUser,
                displayName: name,
                photoURL: image,
            }));
        }).catch((error) => {
            console.error('Profile update error:', error);
        });
    };
    

    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

   
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitprovider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { createUser, loginUser, googleSign, user, logOut, loading, profileUpdate,githubLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;