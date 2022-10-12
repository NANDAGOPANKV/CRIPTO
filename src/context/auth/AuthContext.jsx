import React, {
  useLayoutEffect,
  createContext,
  useState,
  useContext,
} from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase/Firebase";

import { doc, setDoc } from "firebase/firestore";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // create-account-with-email&password
  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, "users", email), {
      FavoriteCoins: [],
    });
  };

  // siginIn-with-email&password
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log-Out-user
  const LogOut = () => {
    return signOut(auth);
  };

  // is user valid
  useLayoutEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
    });

    return () => {
      return unSubscribe();
    };
  }, [setUser]);
  return (
    <UserContext.Provider value={{ SignIn, SignUp, LogOut, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
