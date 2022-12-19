import {Shape} from "@components"

export const Hero = ({title, image, tagline}) => {
  return (
    <section
      id="hero"
      style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,.7), transparent 60%), url(${image})`}}
      className="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[50vh] lg:h-[60vh] flex items-center"
    >

      {/*linear-gradient(to right, rgba(255, 255, 255, .7) 50%, transparent 100%), url("http://danksy.lndo.site/sites/default/files/2022-12/IMG-20221102-WA0003_0.jpg")*/}
      <div className="container -translate-y-10">
        <div className="mt-8">
          {/*sm:text-[45px] md:text-[55px]*/}
          <h1 className="text-pink-600 text-[5rem] sm:text-[7rem] font-black leading-none">{title}</h1>
          {tagline && (
            <div
              dangerouslySetInnerHTML={{ __html: tagline }}
              className="font-body font-bold text-gray-900 border-b-[20px] border-pink-600 tracking-1 w-max text-l sm:text-xl -mt-3 ml-2"
            />
          )}

        </div>
      </div>

      <Shape className="hidden md:block" fillColor={undefined}/>
    </section>
  );
};

