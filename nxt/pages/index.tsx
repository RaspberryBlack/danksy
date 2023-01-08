import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import {Hero, GalleryBlock, Shape, Contact} from "@components";
import Image from "next/image";
import {absoluteUrl} from "@lib/utils";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";


interface IndexPageProps {
  nodes: DrupalNode
}

export default function IndexPage({ node }) {
  // const router = useRouter();
  //
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const query = router.query;
  // }, [router.isReady, router.query]);
  //console.log(router.query);

  return (
    <>
      <header>
        <Hero
          title={node.title}
          image={absoluteUrl(node.field_image[0].uri.url)}
          tagline={node.body?.summary}
        />
      </header>

      <main className="bg-white relative z-1 pt-12">
        <Shape className="bottom-full -mb-1" fillColor={undefined}/>

        <GalleryBlock />

        <div className="bg-slate-700">
          <div className="container text-white sm:grid grid-cols-2 gap-8">
            {node.body?.processed && (
              <div className="py-8">
                <div dangerouslySetInnerHTML={{ __html: node.body?.processed }} />
                <br/>
                <Contact />
              </div>
            )}

            <figure className="sleeve -sm:-mx-8 -xl:-mr-8 overflow-hidden min-h-[20rem]">
              <Image
                fill
                src={absoluteUrl(node.field_image[1].uri.url)}
                alt=""
                className="object-cover object-top sm:object-center lg:object-contain lg:object-right"
                // className="relative block float-right min-w-[10rem] w-1/3 max-w-[20rem] h-auto -top-[8rem] md:-top-20 -mb-28 md:-mb-16 ml-[100%] sm:ml-2 md:ml-20 rotate-6 border-8 border-white drop-shadow"
              />
            </figure>

          </div>
        </div>


        {/*<div className="container"><ContactForm/></div>*/}
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const params = new DrupalJsonApiParams()
    .addFilter("status", "1")
    .addInclude(["field_image"])
    .addFields("node--page", ["title","body","field_image"])

  const home = await drupal.getResource(
    "node--page",
    "dfce12a0-278e-49af-998b-2b6525ba28c6",
    {
      params: params.getQueryObject(),
    }
  )

  return {
    props: {
      node: home
    },
  }
}
