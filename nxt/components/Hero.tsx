import {Shape} from "@components";
import Image from "next/image";

export const Hero = ({title, image, tagline}) => {
  return (
    <section
      id="hero"
      className="relative flex items-center h-[300px] sm:h-[50vh] lg:h-[60vh] bg-gradient-to-r from-white to-[rgba(255,255,255,.3)] md:from-[rgba(255,255,255,.7)]"
    >

      <Image
        fill
        className="object-cover object-left-top -z-[1]"
        src={image}
        alt=""
      />

      <div className="container -translate-y-10">
        <div className="md:mt-8">
          <h1 className="text-pink-600 text-[20vw] sm:text-[7rem] font-black leading-none">{title}</h1>
          {tagline && (
            <div
              dangerouslySetInnerHTML={{ __html: tagline }}
              className="font-body font-bold text-gray-900 border-b-[15px] sm:border-b-[20px] border-pink-600 sm:tracking-1 w-max text-[4vw] sm:text-xl -mt-2 sm:-mt-3 ml-1 sm:ml-2"
            />
          )}

        </div>
      </div>

      <Shape className="hidden md:block" fillColor={undefined}/>
    </section>
  );
};

