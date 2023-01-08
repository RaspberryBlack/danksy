//import Navbar from "./Navbar";
//import {useState} from "react";
//import MobileNavbar from "./MobileNavbar";
//import { Divide as Hamburger } from 'hamburger-react';
import useScrollPosition from "../hooks/useScrollPosition";
import reactStringReplace from 'react-string-replace';
import {absoluteUrl} from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import {Logo} from "./Logo";

export const Header = ({ image, title }) => {
  const {position} = useScrollPosition();
  // Replace spaces with nbsp and slash+space with space.
  title = title.replace(/ (?!\|)/gi, '\u00A0').replace(/ \|/gi, ' ');

  return (
    <header className="relative w-full pt-4 h-32 md:h-60 -mb-[0.2rem] md:-mb-[0.35rem]">

      <Image
        className="fixed w-full top-0 left-0 opacity-20 -z-[1]"
        src={absoluteUrl(image.uri.url)}
        width={image.resourceIdObjMeta.width}
        height={image.resourceIdObjMeta.height}
        alt=""
      />

      <div className="container">
        <h1 className="absolute text-white text-xl word-spacing-wide md:text-6xl top-full -translate-y-full">{title}</h1>

        <div className="sm:flex">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile Menu Icon */}
            {/*<span className="sm:hidden">*/}
            {/*    <Hamburger toggled={isMobileNavShow} toggle={setIsMobileNavShow} size={25} color="white"/>*/}
            {/*</span>*/}
          </div>

          {/*/!* Desktop Navbar *!/*/}
          {/*<Navbar/>*/}

          {/*/!* Mobile Navbar *!/*/}
          {/*<MobileNavbar className={!isMobileNavShow ? "mt-0 h-0":"mt-3 h-[130px]"}/>*/}
        </div>
      </div>


    </header>
  );
};
