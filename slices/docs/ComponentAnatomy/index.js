import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentAnatomy = ({ slice }) => (
  <section class="bg-slate-300 rounded-3xl flex flex-row gap-8 p-8 mb-12">

    <ol class="my-0 pl-4 list-decimal">
      { slice?.items?.map((item, i) => <li class="mb-4">
          <span class="block font-bold">{ item.part }</span>
          <span>{ item.part_description }</span>
      </li>) }
    </ol>    

    <img class="flex-grow my-0" src={slice.primary.anatomy_image.url} alt={slice.primary.anatomy_image.alt} />

  </section>
)

export default ComponentAnatomy