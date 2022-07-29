import React from 'react'

const Image = ({ slice }) => (
  // TODO: Need to wrap in anchor tag if one exists. 
  /* import { Link } from 'prismic-reactjs' */
  /* <a href={Link.url(slice.primary.ImageLink)}>My Link</a> */

  <img src={slice.primary.Image.url} alt={slice.primary.Image.alt} />
)

export default Image