import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const AboutItem = () => {
  const experience = [
    {
      index: 1,
      name: "HTML",
      icon: <AiFillHtml5 size={90} className="text-[#D84A25]" />,
    },
    {
      index: 2,
      name: "CSS",
      icon: <IoLogoCss3 size={90} className="text-[#2549D9]" />,
    },
    {
      index: 3,
      name: "JS",
      icon: <IoLogoJavascript size={90} className="text-[#EBD51C]" />,
    },
    {
      index: 4,
      name: "React",
      icon: <FaReact size={90} className="text-[#5CCEEE]" />,
    },
    {
      index: 5,
      name: "Tailwind",
      icon: <SiTailwindcss size={90} className="text-[#16ACC9]" />,
    },
    {
      index: 6,
      name: "NodeJs",
      icon: <IoLogoNodejs size={90} className="text-[#24AA58]" />,
    },
  ];

  return (
    <>
      {experience.map(({ index, name, icon }) => (
        <li
          key={index}
          className={
            "sm:w-64 sm:h-64 w-44 h-44 border-2  mx-auto rounded-xl hover:shadow-lg "
          }
        >
          <div className="w-full h-3/4  flex justify-center items-center">
            {icon}
          </div>
          <p className="flex justify-center h-1/4 items-center">{name}</p>
        </li>
      ))}
    </>
  );
};
export default AboutItem;
