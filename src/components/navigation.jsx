import React from "react";
import { Link } from "react-scroll";
import { BiHome, BiUser, BiCodeAlt } from "react-icons/bi";

export default function Navigation() {
    return (
        <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
                <div className="flex justify-between mx-auto bg-white text-green-800 p-2 rounded-full border-green-800 border-solid border-[1px] max-w-[200px] lg:flex-col"> 
                    <Link
                     to="home"
                     activeClass="active"
                     className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
                     offset={-100}
                     smooth={true}
                     spy={true}>
                        <BiHome />
                    </Link>
                    <Link
                     to="profile"
                     activeClass="active"
                     className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
                     offset={-100}
                     smooth={true}
                     spy={true}>
                        <BiUser />
                    </Link>
                    <Link
                     to="portofolio"
                     activeClass="active"
                     className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
                     offset={-100}
                     smooth={true}
                     spy={true}>
                        <BiCodeAlt />
                    </Link>
                </div>
            </div>
    );
}
