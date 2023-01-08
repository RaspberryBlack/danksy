import artworks from "data/artwork.json";
import {RiArrowRightSLine} from "react-icons/ri";
import {Thumbnail} from "./Thumbnail";
import Link from "next/link";

export const GalleryBlock = () => {
  const thumbs = [];
  for (let i = 0; i < artworks.length; i++) {

    if(thumbs.length > 4) break
    const item = artworks[i]

    if(item.promote === true && item.field_type.name === "Painting") {
      const hide = (thumbs.length > 2) ? '-lg:hidden':'';
      thumbs.push(
        <div key={item.id} className={`flex-auto aspect-square overflow-hidden first:col-span-2 first:row-span-2 ${hide}`}>
          <Thumbnail key={item.id} item={item}/>
        </div>
      );
    }

  }

  return (
  <>
    <section className="container-wide mb-12">
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:flex flex-wrap xl:flex-nowrap justify-center gap-2 md:gap-6 mb-4 md:mb-6">
        {thumbs}
      </div>

      <Link role="button" href="/art" className="btn ml-auto flex w-max">
        See all art
        <RiArrowRightSLine className="ml-1 -mr-1 w-6 h-6" />
      </Link>
    </section>
  </>
  )
}


