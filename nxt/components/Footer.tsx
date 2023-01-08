import {Logo, Contact, MenuLinks} from "@components";

export const Footer = () => (
  <footer className="bg-slate-900/90 sticky bottom-0 left-0 w-full pt-8 pb-4 text-white z-[1] text-sm tracking-wider">
    <div className="container sm:grid md:grid-cols-4 gap-4">
      <div className="md:text-right col-span-2 md:order-3">
        <Logo className="scale-75 origin-top-left md:origin-top-right" /><br/>
        art • photo • video<br/>
        Perth WA Australia
      </div>

      <div className="mt-10 md:mt-4 md:order-2">
        <h5 className="text-base">get in touch</h5>
        <Contact />
      </div>

      <div className="mt-10 md:mt-4">
        <h5 className="text-base">menu</h5>
        <MenuLinks/>
      </div>

    </div>
    <div className="container flex justify-between gap-8 pt-8 text-white/50">
      <div>
        ©{new Date().getFullYear()} Danial Bradford. All Rights Reserved.
      </div>
      <div className="text-right">
        <a href="#top" className="hover:text-white">Back to top<>&ensp;</>↑</a>
      </div>
    </div>
  </footer>
)
