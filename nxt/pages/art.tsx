import artworks from "data/artwork.json";
import {Header} from "@components";
import Image from "next/image";
import Link from "next/link";

export default function Page({ nodes, node }) {
  return (
    <>
      <Header image={nodes[0].field_image[0]} title={node.title} />
      <main className="bg-white">
        <div className="container-wide md:grid grid-cols-3 gap-2 md:gap-8 py-6">
          {artworks.map(item => {
            const title = item.title.replace(/ (?!\|)/gi, '\u00A0').replace(/ \|/gi, ' ');
            return (
              item.field_image && (
                <Link key={item.id} href={item.path.alias}
                      className="group relative block overflow-hidden h-full md:min-w-[10rem] max-w-[40rem] -md:mb-8">

                  <figure className="sleeve">
                    <Image
                      className="object-cover w-full h-full aspect-square"
                      src={item.field_image[0].links.large.href}
                      width={500}
                      height={500}
                      alt={item.field_image[0].resourceIdObjMeta.alt}
                    />
                  </figure>

                  <div className="py-4">
                    <h2
                      // className="absolute top-full md:group-hover:translate-y-[calc(-100%_-_1rem)] transition-transform left-4 px-4 py-2 mr-4 font-body text-white text-base font-light leading-8 bg-opacity-60 bg-black z-[1]"
                      className="text-base my-0"
                    >
                    {title}</h2>

                    <div className="flex justify-between">
                      {item.field_width && (
                        <div>{item.field_width} x {item.field_height}</div>
                      )}

                      {/*{item.field_price && (*/}
                      <div>{item.field_price || "$680"}</div>
                      {/*)}*/}
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
