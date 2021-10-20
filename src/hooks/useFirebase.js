import { useEffect } from 'react';
import initializeFirebase from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [userName, setUserName] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false); setError(''); setUserName(user.name) })
            .catch((error) => {
                const errorMessage = error.message;
                setUserName('')
                setError(errorMessage);
            })
    }

    const registerUsingEmailAndPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const regUser = userCredential.user;
                setUser(regUser);
                setUserName(name)
                setError('')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
    }

    const signInUsingEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
                setUserName('')
            })
            .finally(() => setLoading(false))
    }

    // Observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        error,
        registerUsingEmailAndPassword,
        userName,
        signInUsingEmailAndPassword
    }
};

export default useFirebase;