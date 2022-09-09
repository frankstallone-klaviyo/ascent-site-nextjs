import React from "react";
import Image from "next/image";
import { PrismicLink } from "@prismicio/react";

const PrismicImage = ({ slice }) => {
  const SliceImage = (
    <Image
      src={slice.primary.Image.url}
      alt={slice.primary.Image.alt}
      height={slice.primary.Image.dimensions.height}
      width={slice.primary.Image.dimensions.width}
      layout="responsive"
    />
  );
  
  // If we need an image with a link, wrap it here
  {SliceImage}

  return <>{SliceImage}</>;
};

export default PrismicImage;
