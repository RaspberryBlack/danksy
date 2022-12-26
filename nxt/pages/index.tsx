import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import {Hero, Header, ContactForm } from "@components";
import Image from "next/image";
import {absoluteUrl} from "@lib/utils";
import {RiInstagramFill, RiMailFill, RiPhoneFill} from "react-icons/ri";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import { useRouter } from "next/router";
import { useEffect } from "react";


interface IndexPageProps {
  nodes: DrupalNode
}

export default function IndexPage({ node }) {
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const query = router.query;
  }, [router.isReady, router.query]);
  console.log(router.query);

  return (
    <>
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
          className="relative block float-right min-w-[10rem] w-1/3 max-w-[20rem] h-auto -top-[8rem] md:-top-20 -mb-28 md:-mb-16 ml-[100%] sm:ml-2 md:ml-20 rotate-6 border-8 border-white drop-shadow"
        />
        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="mt-4"
          />
        )}
        <br/>
        <p>
          <RiInstagramFill className="inline-block mr-4" />
          <a href="https://www.instagram.com/danksy87">danksy87</a><br/>

          <RiMailFill className="inline-block mr-4" />
          <a href="mailto:&#100;&#097;&#110;&#105;&#097;&#108;&#098;&#114;&#097;&#100;&#102;&#111;&#114;&#100;&#064;&#105;&#099;&#108;&#111;&#117;&#100;&#046;&#099;&#111;&#109;">
            danialbradford<span style={{display:'none'}}>foo</span>@icloud.com
          </a><br/>

          <RiPhoneFill className="inline-block mr-4" />
          0484<span style={{display:'none'}}>bar</span> 128 161<br/>
        </p>


      </div>

      {/*<div className="container"><ContactForm/></div>*/}

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
