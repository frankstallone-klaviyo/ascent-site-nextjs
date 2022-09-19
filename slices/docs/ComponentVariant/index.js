import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentVariant = ({ slice }) => (
  <section className="bg-slate-300 rounded-3xl p-8 mb-12">
    <PrismicRichText field={slice.primary.variant_name} />

    <PrismicRichText field={slice.primary.description} />

    <ul className="flex list-none gap-1 p-0 m-0">
      { slice?.items?.map((item, i) => <li className="rounded-full bg-slate-700 text-white px-3 py-1" key={i}>{ item.variant_name }</li>) }
    </ul>

    <ul className="flex lit-none gap-4 p-0 m-0">
      { slice?.items?.map((item, i) => <img src={item.variant_image.url} alt={item.variant_image.alt} className="m-0" key={i} />) }
    </ul>
  </section>
)

export default ComponentVariant