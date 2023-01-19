import { DrupalNode } from "next-drupal"
import {absoluteUrl, formatDate, formatTitle, stripTitle} from "lib/utils"
import {Header, GallerySet, Carousel} from "@components";
import Link from "next/link";
import {animateScroll} from "react-scroll";

interface NodeArtworkProps {
  node: DrupalNode
}

export function NodeArtwork({ node, ...props }) {
  // @todo never have array of field_image
  let images = [node.field_image[0] || node.field_image];
  node.field_media.forEach((image) => {
    images.push(image.field_media_image);
  });

  return (
    <>
      <Header image={images[0]} title={formatTitle(node.title)}></Header>

      <main className="bg-white">
        <article {...props} className="container md:flex gap-4 md:gap-8 py-6 sm:py-8">
          <div className="md:w-1/2 md:min-w-[30rem] basis-2/3 flex-auto">
            {images && (
              <Carousel images={images}></Carousel>
            )}
          </div>

          <div className="prose basis-1/3 flex-auto">
            <hr className="-md:hidden"  />
            {node.field_set && (
              <p>Part of the series
                &ldquo;<a href={`#${encodeURIComponent(node.field_set.name)}`}
                          onClick={() => animateScroll.scrollToTop({duration:200})}
                >
                  {node.field_set.name}
                </a>&rdquo;&nbsp;↓
              </p>
            )}
            {node.field_material && (
              <><b>Material: </b>{node.field_material}<br /></>
            )}
            {node.field_width && (
              <><b>Size: </b>{node.field_width/10}cm x {node.field_height/10}cm<br /></>
            )}
            <br />
            <div><b>AUD {node.field_price || "$680"}</b></div>

            {node.body?.processed && (
              <>
                <hr/>
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: node.body.processed }} />
              </>

            )}

            <hr />

            <p>Custom frames available.</p>
            <p>Please leave your name and email to enquire about this painting:</p>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="subject"
                     value={`Inquiry for ${stripTitle(node.title)}`} />
              <label className="form-item-wrapper">
                <span>First Name: </span>
                <input type="text" name="name" placeholder="First Name" className="form-input" required />
              </label>
              <label className="form-item-wrapper">
                <span>Email: </span>
                <input type="email" name="email" placeholder="Email" className="form-input" required />
              </label>
              <p>
                <button type="submit" className="btn ml-auto flex w-max rounded-none">Enquire</button>
              </p>
            </form>
            {/*<p className="text-sm">Your data won't be stored or sold.</p>*/}


          </div>

        </article>

        {node.field_set && (
          <GallerySet set={node.field_set.name} />
        )}
      </main>

    </>

  )
}
