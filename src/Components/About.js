import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <div id="About" className="h-screen w-full flex justify-center  ">
      <div className="my-auto">
        <div className="my-8 text-slate-600 text-2xl sm:w-2/4 w-3/4 border-b-2 border-shadow-b mx-auto text-center">
          Personal experience using following languages and frameworks
        </div>
        <ul className="mx-auto  grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          <AboutItem />
        </ul>
      </div>
    </div>
  );
};
export default About;
