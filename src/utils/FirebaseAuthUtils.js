import firebase from "firebase";
import "firebase/auth";

/**
 * This is the place where you should put firebase related code
 */

const firebaseConfig = {
    apiKey: "AIzaSyD3ExwW8TlsWKQ8pAGfCWttuVZRcyquNKY",
    authDomain: "thriftshiftci.firebaseapp.com",
    databaseURL: "https://thriftshiftci.firebaseio.com",
    projectId: "thriftshiftci",
    storageBucket: "thriftshiftci.appspot.com",
    messagingSenderId: "98663373843",
    appId: "1:98663373843:web:1807a837b55d13864133e6",
    measurementId: "G-GFTWS7EP1T"
};

// Initialize firebase
if (!firebase.apps.length) {
    console.log("[Message] Initialize firebase app")
    firebase.initializeApp(firebaseConfig);
}

// Get current user, but if you want to change the user state, please pass setUser in App.js to your component
const getUser = () => {
    return firebase.auth().currentUser
}

// Change the user state when user logged in or logged out
const updateUserState = (setUser) => {
    firebase.auth().onAuthStateChanged(setUser);
}

// Sign out the user
const signOut = () => {
    firebase.auth().signOut()
}

// Sign in with google with a popup window
const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

export { getUser, signOut, signInWithGoogle, updateUserState}
