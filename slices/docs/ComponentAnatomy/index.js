import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentAnatomy = ({ slice }) => (
  <section className="bg-slate-300 rounded-3xl flex flex-row gap-8 p-8 mb-12">

    <ol className="my-0 pl-4 list-decimal">
      { slice?.items?.map((item, i) => <li className="mb-4" key={i}>
          <span className="block font-bold">{ item.part }</span>
          <span>{ item.part_description }</span>
      </li>) }
    </ol>    

    <img className="flex-grow my-0" src={slice.primary.anatomy_image.url} alt={slice.primary.anatomy_image.alt} />

  </section>
)

export default ComponentAnatomy