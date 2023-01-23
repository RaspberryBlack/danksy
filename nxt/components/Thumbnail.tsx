import Link from "next/link";
import Image from "next/image";
import {absoluteUrl, formatTitle} from "@lib/utils";

interface  ThumbnailProps{
  item:any,
  sizes?:string
}

export const Thumbnail = ({item, sizes}:ThumbnailProps) => {
  const image = item.field_image[0] || item.field_image;
  const soldTag = item.field_sold ? "before:content-['sold'] before:absolute before:uppercase before:text-sm before:right-4 before:top-4 before:bg-pink-600 before:block before:px-2 before:text-white before:tracking-wide before:z-[1]" : "";

  return (
    <Link href={item.path.alias}
          className="group relative block aspect-square overflow-hidden w-full h-full drop-shadow-lg md:min-w-[10rem]">

      <h3
        className="absolute top-full md:group-hover:translate-y-[calc(-100%_-_1rem)] transition-transform left-4 px-4 py-2 mr-4 font-body text-white text-base font-light leading-6 bg-opacity-60 bg-black z-[1]">{formatTitle(item.title)}</h3>

      {image && (
        <figure className={`sleeve w-full h-full ${soldTag}`}>
          <Image
            fill
            className="object-cover w-full h-full"
            src={absoluteUrl(image.uri.url)}
            sizes={sizes ||
              `(max-width: 985px) 33vw,
               (max-width: 1600px) 25vw
               366px`
            }
            alt={image.resourceIdObjMeta.alt}
          />
        </figure>
      )}
    </Link>
  )}

