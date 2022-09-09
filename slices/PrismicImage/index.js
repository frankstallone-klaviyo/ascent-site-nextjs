import React from "react";
import Image from "next/image";
// import { PrismicLink } from "@prismicio/react";

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

  return <>{SliceImage}</>;
};

export default PrismicImage;
