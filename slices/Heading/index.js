import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Heading = ({ slice }) => (
  <>
    <PrismicRichText field={slice.primary.heading} />
  </>
)

export default Heading