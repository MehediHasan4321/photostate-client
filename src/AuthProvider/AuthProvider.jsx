import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const singupWihtEmailPass = (email,passowed)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passowed)
    }
    const loginWithEmailPass = (email,passowed)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passowed)
    }
    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleAuth)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{setUser(currentuser),setLoading(false)})
        return ()=>unsubscribe()
    },[])
    const authInfo = {
        user,
        singupWihtEmailPass,
        loginWithEmailPass,
        loginWithGoogle,
        logOut,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;