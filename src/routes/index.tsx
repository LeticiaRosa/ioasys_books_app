import { useContext } from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
  

export function Router(){
 const {isAutenticated} = useContext(AuthContext);
    return(
    <Routes>
      <Route path="/" element={<SignUp />} />
      {isAutenticated &&
      <Route path="books" element = {<HomePage/>}/>
      }
    </Routes>
  )
  }