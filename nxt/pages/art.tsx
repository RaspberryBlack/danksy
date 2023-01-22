import artworks from "data/artwork.json";
import {Header} from "@components";
import Image from "next/image";
import Link from "next/link";
import {absoluteUrl, formatTitle} from "@lib/utils";

export default function Page({ nodes, node }) {
  return (
    <>
      <Header image={nodes[0].field_image[0] || nodes[0].field_image} title={node.title} />
      <main className="bg-white">
        <div className="md:container-wide px-8 grid sm:grid-cols-repeat gap-6 md:gap-12 py-6 md:py-12">
          {artworks.map(item => {
            const image = item.field_image[0] || item.field_image;

            return (
              image && (
                <Link key={item.id} href={item.path.alias}
                      className="group relative block overflow-hidden h-full -md:mb-8">

                  <figure className="sleeve">
                    <Image
                      className="object-cover w-full h-full aspect-square"
                      src={absoluteUrl(image.uri.url)}
                      width={500}
                      height={500}
                      alt={image.resourceIdObjMeta.alt}
                    />
                  </figure>

                  <div className="py-4">
                    <h2
                      // className="absolute top-full md:group-hover:translate-y-[calc(-100%_-_1rem)] transition-transform left-4 px-4 py-2 mr-4 font-body text-white text-base font-light leading-8 bg-opacity-60 bg-black z-[1]"
                      className="text-base my-0"
                    >
                    {formatTitle(item.title)}</h2>

                    <div className="flex justify-between">
                      {item.field_width && (
                        <div>{item.field_width} x {item.field_height}</div>
                      )}

                      {item.field_price && !item.field_sold && (
                        <div><b>AUD { item.field_price }</b></div>
                      )}

                      {item.field_sold && (
                        <div><b>Sold out</b></div>
                      )}
                    </div>

                  </div>


                </Link>
              )
            )}
          )}
        </div>

      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const nodes = JSON.parse(JSON.stringify(artworks)).filter((item) => {
    return item.field_type.name === "Painting"
  });

  if(nodes) {
    return {
      props: {
        nodes,
        node: {
          title: "Artworks"
        }
      },
    }
  }
}
