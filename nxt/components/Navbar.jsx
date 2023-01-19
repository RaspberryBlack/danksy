import {Logo, MenuLinks} from "@components";
import {useState} from "react";
import {RiMenuFill, RiCloseFill} from "react-icons/ri";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuMobileClass = `-sm:absolute ${menuOpen ? "flex" : "hidden"}
  -sm:bg-slate-900 -sm:flex-col -sm:text-right -sm:gap-4 -sm:w-screen -sm:left-0 -sm:z-[50] -sm:p-6 -sm:mt-1 -sm:top-full -sm:-mx-8`;

  return (
    <div className="flex w-full items-end justify-between relative">
      <Logo />

      <div className="flex pb-1">
        <button
          className="text-white cursor-pointer text-xl leading-none outline-none focus:outline-none sm:hidden"
          type="button"
          title={menuOpen ? "close menu" : "open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
        </button>
        <MenuLinks
          className={`sm:flex sm:gap-4 text-white uppercase text-sm tracking-widest ${menuMobileClass}`}
          classNameLink="hover:underline hover:decoration-pink-500 -sm:container" />
      </div>

    </div>
  )
}

