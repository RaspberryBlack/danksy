import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"
import {Header} from "./Header";
import {GallerySet} from "./GallerySet";
import Link from "next/link";

interface NodeArtworkProps {
  node: DrupalNode
}

export function NodeArtwork({ node, ...props }) {
  return (
    <>
      <Header image={node.field_image[0]} title={node.title}></Header>

      <main className="bg-white">
        <article {...props} className="container sm:flex gap-4 py-6 sm:py-8">
          <div className="sm:w-1/2">
            {node.field_image && (
              <figure className="sleeve">
                <Image
                  className="max-w-full -sm:mb-6"
                  src={absoluteUrl(node.field_image[0].uri.url)}
                  width={800}
                  height={800}
                  alt={node.field_image[0].resourceIdObjMeta.alt}
                  priority
                />
                {node.field_image[0].resourceIdObjMeta.title && (
                  <figcaption className="py-2 text-sm text-center text-gray-600">
                    {node.field_image.resourceIdObjMeta.title}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          <div className=" prose flex items-end">
            {node.field_material && (
              <><b>Material: </b>{node.field_material}<br /></>
            )}
            {node.field_width && (
              <><b>Dimensions: </b>{node.field_width} x {node.field_height}<br /></>
            )}
            {node.body?.processed && (
              <div dangerouslySetInnerHTML={{ __html: node.body.processed }}></div>
            )}
            {node.field_set && (
              <p>Part of the series
                &ldquo;<Link href={`#${encodeURIComponent(node.field_set.name)}`}>
                  {node.field_set.name}
                </Link>&rdquo; ↓
              </p>
            )}
          </div>

        </article>

        {node.field_set && (
          <GallerySet set={node.field_set.name} />
        )}
      </main>

    </>

  )
}
