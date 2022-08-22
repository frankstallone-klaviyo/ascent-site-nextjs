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

  const RenderImage = slice.primary.ImageLink !== 'Any' ? (
    <PrismicLink field={slice.primary.ImageLink}>
      {SliceImage}
    </PrismicLink>
  ) : (
    {SliceImage}
  );

  return <>{RenderImage}</>;
};

export default PrismicImage;
