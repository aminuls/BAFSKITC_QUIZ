import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   const logOut = () => {
      return signOut(auth);
   };
   const updateUser = (userInfo) => {
      return updateProfile(auth.currentUser, userInfo);
   };
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("User observing");
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unsubscribe();
      };
   }, []);
   const authData = { createUser, logIn, logOut, updateUser, user, loading };
   return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
