import {Logo, Contact, MenuLinks} from "@components";
import useScrollPosition from "../hooks/useScrollPosition";
import {animateScroll} from "react-scroll";

export const Footer = () => {
  const {position} = useScrollPosition();
  // test
  return (
    <footer className={`bg-slate-800 bottom-0  left-0 w-full pt-8 pb-4 text-white text-sm tracking-wider z-[1] transition-opacity
      ${position >= 100 ? "sticky" : "opacity-0"}
      `}>
      <div className="container sm:grid md:grid-cols-4 gap-4">
        <div className="md:text-right col-span-2 md:order-3">
          <Logo className="scale-75 origin-top-left md:origin-top-right" /><br/>
          art • photo • video<br/>
          Perth WA Australia
        </div>

        <div className="mt-10 md:mt-4 md:order-2">
          <h5 className="text-base -scroll-m-[100%]" id="contact">get in touch</h5>
          <Contact />
        </div>

        <div className="mt-10 md:mt-4">
          <h5 className="text-base">menu</h5>
          <MenuLinks className="" classNameLink="block my-2" />
        </div>

      </div>
      <div className="container flex justify-between gap-8 pt-8 text-white/50 leading-4">
        <div>
          © Danial Bradford {new Date().getFullYear()}. All Rights Reserved.
        </div>
        <div className="text-right">
          <a href="#top" className="hover:text-white"
             onClick={() => animateScroll.scrollToTop({duration:200})}
          >
            Back to top<>&nbsp;</>↑
          </a>
        </div>
      </div>
    </footer>
)}
