import { createContext, useEffect, useState } from "react";
import prof  from '../assets/1.png'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user")) || null 
  );

  const login=()=>{
  setCurrentuser({id:1,name:"Aayush jha" ,pic:{prof}})
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser) );
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser,login}}>
      {children}
    </AuthContext.Provider>
  );
};