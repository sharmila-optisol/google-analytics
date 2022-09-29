import { createContext } from "react";
import {useContext,useEffect,useState} from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../firebase'

// @ts-ignore
const userAuthContext = createContext();

export function UserAuthContextProvider({children}:any) {
  const [user,setUser] = useState("");
    function signUp(email:any,password:any){
      return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email:any,password:any){
      return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
      return signOut(auth);
    }
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser:any)=>{
            setUser(currentUser);
      });
      return () =>{
        unSubscribe();
      }
    },[])
  return <userAuthContext.Provider value={{user,signUp,logIn,logOut}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
  return useContext(userAuthContext)
}