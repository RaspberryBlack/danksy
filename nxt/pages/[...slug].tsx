import artworks from "data/artwork.json";
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import {NodeBasicPage} from "../components/node--basic-page";
import {NodeArtwork} from "../components/node--artwork";
import { drupal } from "@lib/drupal";

export default function Page({ node }) {
  return <NodeArtwork node={node} />
}

// Build paths for all `node--page` and `node--artwork`.
export async function getStaticPaths(context) {
  const paths = await drupal.getStaticPathsFromContext("node--artwork", context)
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const node = JSON.parse(JSON.stringify(artworks)).filter((item) => {
    return (
      item.field_type.name === "Painting" &&
      item.path.alias === `/${context.params.slug.join('/')}`
    )
  });

  if(node) {
    return {
      props: {
        node: node[0]
      },
    }
  }
}
