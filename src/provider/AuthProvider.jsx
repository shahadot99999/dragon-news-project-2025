import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, 
    onAuthStateChanged, signOut, 
    signInWithEmailAndPassword, updateProfile } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);
    console.log(loading,user);

    const createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }



    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        loading,
        updateUserProfile,
    };

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser);
              setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    }, [])

    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;