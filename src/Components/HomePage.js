import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ImageFull from "./ImageFull.png";
const HomePage = () => {
  return (
    <div
      id="Home"
      className="w-full h-screen  lg:mx-20 flex flex-col sm:flex-row  box-border bg-white "
    >
      {/* ***************** */}
      <div className="flex h-screen bg-white  w-full justify-center items-center">
        <div className="mx-8 justify-center   flex flex-col items-center sm:items-start  sm:mt-4 mt-14">
          <h1 className="font-bold text-3xl  sm:text-4xl text-[#EE7F79]">
            Hi, I`m Andone!
          </h1>
          <p className="mt-7 pl-4 text-md border-l-[#ee7f79] border-l-2 text-slate-700 w-3/4 ">
            Andone Cristian is a 21-year-old computer science student at Titu
            Maiorescu University who has a passion for front-end development,
            particularly React. He has gained a lot of knowledge and experience
            in HTML/CSS, JavaScript, Tailwind/Bootstrap, and Node.js.
          </p>
          <div className="w-64 flex  mt-6 gap-5 lg:text-2xl  sm:justify-start justify-center">
            <a
              className="cursor-pointer flex items-center gap-2"
              href={"instagram.com/andonecristi95"}
            >
              <FaInstagram
                size={30}
                className="text-[#EE7F79] hover:text-[#d9746f] hover:scale-105"
              />
              Instagram
            </a>
            <a
              className="cursor-pointer flex items-center gap-2"
              href={"instagram.com/andonecristi95"}
            >
              <FaLinkedin
                size={30}
                className="text-[#EE7F79] hover:text-[#d9746f] hover:scale-105"
              />
              Linkedin
            </a>
            <a
              className="cursor-pointer flex items-center gap-2"
              href={"instagram.com/andonecristi95"}
            >
              <FaGithub
                size={30}
                className="text-[#EE7F79] hover:text-[#d9746f] hover:scale-105"
              />
              GitHub
            </a>
          </div>
          <div className="">
            <button className="hidden sm:block w-32 h-10 mt-8 bg-[#EE7F79] text-sm text-white rounded-sm hover:bg-[#d9746f] hover:scale-105">
              RESUME
            </button>
          </div>
        </div>
      </div>
      {/* ******************** */}
      <div className="flex sm:h-screen h-1/2 w-full  items-center overflow-hidden ">
        <div className=" flex justify-center items-center    pt-10  ">
          <img
            className="bg-[#EE7F79] object-cover max-w-md rounded-full w-1/2 h-1/2 shadow-lg shadow-[#EE7F79]/50 sm:w-full sm:h-full "
            alt="Hero-img"
            src={ImageFull}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
