import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const changePassword = (user, newPassword) => {
        setLoading(true)
        return updatePassword(user, newPassword)
    }

    const changeEmail = (user, userEmailValue) => {
        setLoading(true)
        return updateEmail(user, userEmailValue)
    }

    const changeProfilePic = (user, imageLink) => {
        setLoading(true)
        return updateProfile(user, {
            photoURL: imageLink
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
                setUser(currentUser)
                // axios.post("http://localhost:5000/jwt", { email: currentUser.email }).then(data => {
                //     localStorage.setItem('access-token', data.data.token)
                // })
            }
            else {
                console.log('no user')
                // localStorage.removeItem('access-token')
            }

        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        changePassword,
        changeEmail,
        changeProfilePic
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;