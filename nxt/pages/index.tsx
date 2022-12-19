import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import {Hero, Header} from "@components";
import Image from "next/image";
import {absoluteUrl} from "@lib/utils";
import * as FontAwesome from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";

interface IndexPageProps {
  nodes: DrupalNode
}

export default function IndexPage({ node }) {
  return (
    <>
      <Header/>
      <Hero
        title={node.title}
        image={absoluteUrl(node.field_image[0].uri.url)}
        tagline={node.body?.summary}
      />

      <div className="container mb-20">
        <Image
          src={absoluteUrl(node.field_image[1].uri.url)}
          alt=""
          width="500"
          height="500"
          className="relative block float-right w-[50%] sm:w-[30%] h-auto -top-20 ml-2 md:ml-20 rotate-6 border-8 border-white"
        />
        {node.body?.processed && (
          <p
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="mt-4"
          />
        )}
      </div>


      {/*<div className="mt-3">*/}
      {/*  <RiInstagramFill className="w-12 h-12" />*/}
      {/*</div>*/}
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
