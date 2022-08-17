import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TableBlock = ({ slice }) => (
  <section>
    <h1><PrismicRichText field={slice.primary.header} /></h1>
  </section>
)

export default TableBlock