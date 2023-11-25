import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import axios from "axios";
import auth from "../config/AuthConfig";

export const AllContext = createContext()

const Authprovider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignInWithPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userlogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)


            // const userEmail = currentUser?.email || user?.email;
            // // set a token for this user 
            // if (currentUser) {
            //     axios.post('https://community-food-sharing-server-chi.vercel.app/jwt', { email: userEmail }, { withCredentials: true })
            //         .then(res => {
            //             console.log('Token set : ', res.data)
            //         })
            // }// set a token for this user end

            // //remove token if user logout
            // else {
            //     axios.post('https://community-food-sharing-server-chi.vercel.app/logout', { email: userEmail }, { withCredentials: true })
            //         .then(res => {
            //             console.log('Token removed', res.data)
            //         })
            // }//remove token if user logout end



        });


        return () => {
            unSubscribe()
        }

    }, [])


    const allInfo = {
        user,
        setUser,
        loading,
        googleSignInWithPopup,
        registerUser,
        userLogIn,
        userlogOut,
        userUpdateOnSignUp,
        name: 'Abdullah al araf'
    }
    return (
        <>
            <AllContext.Provider value={allInfo}>
                {children}
            </AllContext.Provider>
        </>
    );
};

export default Authprovider;

Authprovider.propTypes = {
    children: PropTypes.node
};
