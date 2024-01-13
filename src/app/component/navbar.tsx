"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

const NavBar = () => {
 
  return (
  
      <header className="text-white body-font ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center bg-[#2d5d5b]">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/logo.jpg")}
              alt="Ammara Gul"
              height={70}
              width={70}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl font-semibold ">Ammara GUL</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="font-semibold mr-5 hover:text-[#c0dcdb]">
              Home
            </Link>
            <Link href={"#"} className="font-semibold mr-5 hover:text-[#4badaa]">
              About
            </Link>
            <Link href={"#"} className="font-semibold mr-5 hover:text-[#4badaa]">
              Skills
            </Link>
            <Link href={"#"} className="font-semibold mr-5 hover:text-[#4badaa]">
              Projects
            </Link>
            <Link href={"#"} className="font-semibold mr-5 hover:text-[#4badaa]">
              Contact
            </Link>
          </nav>
          <button className="text-[#3b4848] font-semibold inline-flex items-center bg-[#c0dcdb] border-0 py-1 px-3 focus:outline-none hover:background-gray-200 rounded text-base mt-4 md:mt-0 hover:text-[#9af5f3] hover:bg-[#446666]">
            <a href = "#">
            Download CV <AiOutlineCloudDownload  className="text-xl ml-9"/>
            </a>
          </button>
        </div>
      </header>
    
  );
};
export default NavBar;
