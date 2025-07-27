import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    console.log(user);

    const createNewUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
    };

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser);
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