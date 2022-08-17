import React from 'react'
import Image from 'next/image'

const PrismicImage = ({ slice }) => (
  // TODO: Need to wrap in anchor tag if one exists. 
  /* import { Link } from 'prismic-reactjs' */
  /* <a href={Link.url(slice.primary.ImageLink)}>My Link</a> */

  <Image src={slice.primary.image.url} alt={slice.primary.image.alt} />
)

export default PrismicImage