import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentVariant = ({ slice }) => (
  <section class="bg-slate-300 rounded-3xl p-8 mb-12">
    <PrismicRichText field={slice.primary.variant_name} />

    <PrismicRichText field={slice.primary.description} />

    <ul class="flex list-none gap-1 p-0 m-0">
      { slice?.items?.map((item, i) => <li class="rounded-full bg-slate-700 text-white px-3 py-1">{ item.variant_name }</li>) }
    </ul>

    <ul class="flex lit-none gap-4 p-0 m-0">
      { slice?.items?.map((item, i) => <img src={item.variant_image.url} alt={item.variant_image.alt} class="m-0" />) }
    </ul>
  </section>
)

export default ComponentVariant