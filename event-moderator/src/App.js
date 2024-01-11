import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bottom from "./components/Bottom";
import Explore from "../src/pages/Explore"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import WhyEM from "./pages/WhyEM";
import BrowserV from "./pages/BrowserV";
import Signup from "./pages/Signup";
import { createContext, useReducer, useState } from "react";
import Profile from "./pages/Profile";
import LoginM from "./components/LoginM";
import UserDashboard from "./pages/UserDashboard";
import LogOut from "./components/LogOut";
import { initialState,reducer } from "./components/reducer/userReducer";
export const UserContex=createContext()
 const Routing=()=>{
  return(
    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/Explore" element={<Explore/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/whyEm" element={<WhyEM/>}/>
    <Route path="/browser" element={<BrowserV/>}/>
    <Route path="/getStartFree" element={<Signup/>}/>
    <Route path="/LoginM" element={<LoginM />}/>
    <Route path="/UDashbord" element={<UserDashboard />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/logout" element={<LogOut />}/>
    </Routes> 
  )
 }
function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
     
 <UserContex.Provider value={{state,dispatch}}>
      <Navbar/> 
      <Routing/>
      </UserContex.Provider>
            
        <Bottom/>
  
    </>
  );
}

export default App;
