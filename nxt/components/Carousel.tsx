import Image from "next/image";
import {absoluteUrl} from "@lib/utils";

import React, { Component } from 'react';
import { Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class Carousel extends Component<{ images }> {
  render() {
    const { images } = this.props;

    return (
        <ResponsiveCarousel
          swipeable={true}
          showStatus={false}
          useKeyboardArrows={true}
          // dynamicHeight={true}
          renderThumbs={() =>
            images.map((item) => (
              <figure key={item.id} className="sleeve aspect-square">
                <Image
                  width={200}
                  height={200}
                  src={absoluteUrl(item.uri.url)}
                  alt={item.resourceIdObjMeta.alt}
                  // priotity="true"
                  // placeholder="blur"
                  className="object-cover object-center aspect-square"
                />
              </figure>
            ))
          }
        >
          {images.map((item) => (
            <figure key={item.id} className="sleeve">
              <Image
                src={absoluteUrl(item.uri.url)}
                width={item.resourceIdObjMeta.width}
                height={item.resourceIdObjMeta.height}
                // sizes=" (max-width: 576px) 100vw,
                //           50%"
                alt={item.resourceIdObjMeta.alt}
              />
            </figure>
          ))}

        </ResponsiveCarousel>
    );
  }
};
