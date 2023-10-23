import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Bottom from "./components/Bottom";
import Explore from "../src/pages/Explore"
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import WhyEM from "./pages/WhyEM";
import BrowserV from "./pages/BrowserV";
import Signup from "./pages/Signup";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar /> 
          <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/Explore" element={<Explore/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/whyEm" element={<WhyEM/>}/>
          <Route path="/browser" element={<BrowserV/>}/>
          <Route path="/getStartFree" element={<Signup/>}/>
        
          </Routes>
        <Bottom/>
      </header>
    </div>
  );
}

export default App;
