import React from "react";
import UserContext from "./userContext.js";
// import { useState } from "react"; //as i used React.useState instead of useState so i dont have to import it

const UserContextProvider = ({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;