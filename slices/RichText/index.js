import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const RichText = ({ slice }) => {
  console.log(slice.primary.wysiwyg)
  return (
  <section>
    <PrismicRichText field={slice.primary.wysiwyg} />
  </section>
)}

export default RichText