import React from 'react'

import Home from './Home/Home';
import Course from './components/Course';
import {Navigate,Route,Routes} from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {

  const [authUser, setAuthUser] = useAuth();
  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
   </Routes>
   <Toaster />
    
    </>
  )
}

export default App