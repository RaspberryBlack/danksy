import Link from "next/link";
import Image from "next/image";

export const Thumbnail = ({item}) => {
  const title = item.title.replace(/ (?!\|)/gi, '\u00A0').replace(/ \|/gi, ' ');

  return (
    <Link href={item.path.alias}
          className="group relative block aspect-square overflow-hidden w-full h-full drop-shadow-lg md:min-w-[10rem] max-w-[40rem]">

      <h3
        className="absolute top-full md:group-hover:translate-y-[calc(-100%_-_1rem)] transition-transform left-4 px-4 py-2 mr-4 font-body text-white text-base font-light leading-6 bg-opacity-60 bg-black z-[1]">{title}</h3>

      {item.field_image && (
        <figure className="sleeve w-full h-full">
          <Image
            className="object-cover w-full h-full"
            src={item.field_image[0].links.large.href}
            width={500}
            height={500}
            alt={item.field_image[0].resourceIdObjMeta.alt}
          />
        </figure>
      )}
    </Link>
  )}

