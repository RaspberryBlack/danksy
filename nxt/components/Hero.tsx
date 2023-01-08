import Image from "next/image";

export const Hero = ({title, image, tagline}) => {
  return (
    <section
      id="hero"
      className="relative flex items-center h-[15rem] sm:h-[40vw] xl:h-[30rem]"
    >

      <Image
        fill
        className="!fixed h-auto object-cover object-top"
        src={image}
        alt=""
      />

      <div className="fixed w-full h-[200%] bg-gradient-to-r from-white to-[rgba(255,255,255,.3)] md:from-[rgba(255,255,255,.7)]"></div>

        <div className="container sticky">
            <h1 className="text-pink-600 text-[20vw] sm:text-[7rem] font-black mb-0 break-keep">{title}</h1>
            {tagline && (
              <div
                dangerouslySetInnerHTML={{ __html: tagline }}
                className="font-body font-bold text-gray-900 border-b-[15px] sm:border-b-[20px] border-pink-600 sm:tracking-1 w-max text-[4vw] sm:text-xl -mt-2 sm:-mt-4 ml-1 sm:ml-2"
              />
            )}
      </div>
    </section>
  );
};

