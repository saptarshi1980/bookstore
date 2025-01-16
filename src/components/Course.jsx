import React, { useEffect, useState } from "react";
import Cards from "./Cards";
//import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Reading books is a powerful tool for personal growth and self-improvement. It opens the mind to new ideas, perspectives, and cultures, fostering empathy and understanding. Books not only expand knowledge but also inspire creativity, spark curiosity, and encourage critical thinking. They serve as mentors, offering wisdom from great minds and life lessons that can guide you in various aspects of life. Cultivating a reading habit builds focus, patience, and a lifelong love for learning, empowering you to grow continuously and achieve your full potential. 
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
         </div>
        
      </div>
    </>
  );
}

export default Course;
