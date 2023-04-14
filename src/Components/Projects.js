import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  const [curr, setCurr] = useState(0);

  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png ",
  ];

  const nextProject = () => {
    curr === slides.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };
  const prevProject = () => {
    curr === 0 ? setCurr(slides.length - 1) : setCurr(curr - 1);
  };
  return (
    <div
      id="Projects"
      className="w-full h-screen z-30 flex flex-col sm:mt-0 mt-20 gap-10"
    >
      <div className="w-3/4 h-20 mx-auto mt-12 ">
        <p className="flex justify-center items-center h-full text-[#EE7F79] font-bold text-2xl ">
          Some personal projects
        </p>
      </div>
      {/* CAROUSEL */}
      <div className="sm:w-96 sm:h-96 w-60 h-60 flex mx-auto relative ">
        <img alt="my-img" src={slides[curr]}></img>
        <div className=" flex items-center w-full  justify-between p-4">
          <button
            className="absolute   justify-center items-center left-0 cursor-pointer w-12 h-12 bg-slate-400/70 rounded-full hover:bg-white "
            onClick={prevProject}
          >
            <AiOutlineArrowLeft
              size={50}
              className="text-white hover:text-slate-400"
            />
          </button>
          <button
            onClick={nextProject}
            className="absolute   justify-center items-center right-0 cursor-pointer w-12 h-12 bg-slate-400/70 rounded-full hover:bg-white "
          >
            <AiOutlineArrowRight
              size={50}
              className="text-white hover:text-slate-400"
            />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
      {/* END CAROUSEL  */}
    </div>
  );
};

export default Projects;
