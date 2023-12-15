
import React from "react";
import sanddev from '../assets/sanddev.jpg';
import { RiArrowRightSLine } from "react-icons/ri";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold my-3 text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have a five years of Diploma and Degree in IT education. 
          I want to learn all my life and i have passion for coding. I have worked as a free lancer for four years with big tech gaints.
          I love to work with React, javascript , html, css, tailwindcss, Next Js, TypeScript , Redux , Node , MongoDb, and express.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
              <RiArrowRightSLine size={25} className="ml-1" />
               
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={sanddev}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;