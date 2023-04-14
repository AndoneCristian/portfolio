import React, { useState } from "react";

import { BiCode, BiCodeAlt } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

import HeaderItem from "./HeaderItem";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const myNavbartags = [
    {
      id: 1,
      tag: "Home",
      referal: "Home",
    },
    {
      id: 2,
      tag: "About",
      referal: "About",
    },
    {
      id: 3,
      tag: "Projects",
      referal: "Projects",
    },
    {
      id: 4,
      tag: "Contact",
      referal: "Contact",
    },
  ];
  return (
    <div className="z-90">
      {/* NAVBAR */}
      <div className="text-xl lg:text-2xl  fixed top-0 left-0 font-bold bg-white   w-full font-[Roboto] py-6 px-12 drop-shadow-xl">
        <div className="flex justify-between">
          <div className="flex items-center lg:pl-12  group/item cursor-pointer pl-0 sm:pl-10">
            <span className="ml-2 group  group-hover/item:-translate-x-1 duration-500">
              <BiCode size={25} className="text-[#EE7F79]" />
            </span>
            <span className="ml-2  group-hover/item:scale-105 group-hover/item:text-[#EE7F79] duration-500 ">
              Andone
            </span>
            <span className="ml-2   group-hover/item:translate-x-1 duration-500">
              <BiCodeAlt size={25} className="text-[#EE7F79] " />
            </span>
          </div>

          <div
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className=" md:hidden flex  cursor-pointer "
          >
            {isMenuOpened && (
              <div className="w-full h-screen   absolute  left-0 top-[4rem] ">
                <ul className="mt-4  h-screen bg-white  ">
                  {myNavbartags.map(({ id, tag, referal }) => {
                    return (
                      <HeaderItem
                        key={id}
                        id={id}
                        tag={tag}
                        referal={referal}
                        className={
                          "z-10 h-1/6 flex flex-col justify-center lg:pr-12 items-center border-b-2  py-4 hover:text-[#d9746f]  hover:scale-105 transition"
                        }
                      />
                    );
                  })}
                </ul>
              </div>
            )}

            {!isMenuOpened ? (
              <GiHamburgerMenu
                size={30}
                className="text-[#EE7F79] hover:scale-105"
              />
            ) : (
              <GrFormClose size={30} className="hover:scale-105 duration-300" />
            )}
          </div>
          <ul className="hidden md:flex ">
            {myNavbartags.map(({ id, tag, referal }) => {
              return (
                <HeaderItem
                  key={id}
                  id={id}
                  tag={tag}
                  referal={referal}
                  className={
                    "pl-4 pr-10 text-[#EE7F79]  hover:text-[#d9746f] cursor-pointer hover:border-b-2 duration-500 border-[#d9746f] hover:scale-105 transition "
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
