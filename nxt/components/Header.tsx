import {absoluteUrl } from "@lib/utils";
import Image from "next/image";
import {Navbar} from "@components";

export const Header = ({ image, title }) => {
  return (
    <header className="relative w-full pt-4 h-32 md:h-60 -mb-[0.2rem] md:-mb-[0.5rem]">

      <Image
        className="fixed w-full top-0 left-0 opacity-20 -z-[1]"
        src={absoluteUrl(image.uri.url)}
        width={image.resourceIdObjMeta.width}
        height={image.resourceIdObjMeta.height}
        alt=""
      />

      <div className="container">
        <Navbar />
        <h1 className="absolute text-white text-xl word-spacing-wide md:text-6xl top-full -translate-y-full">{title}</h1>
      </div>
    </header>
  );
};
