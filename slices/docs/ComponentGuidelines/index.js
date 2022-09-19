import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentGuidelines = ({ slice }) => (
  <section class="bg-slate-300 rounded-3xl flex flex-col gap-8 p-8 mb-12">
    <PrismicRichText field={slice.primary.title} />

    <PrismicRichText field={slice.primary.description} />

    <div class="flex gap-12">
      
      { 
        slice?.items?.map((item, i) => 
          <div class="bg-white flex-1 rounded-2xl overflow-hidden">
            
            <img src={item.image.url} alt={item.image.alt} />
            
            <div class={ [item.type === "positive" ? "border-green-700 bg-green-400" : "border-red-700 bg-red-400", "border-t-8", "p-4", "flex-grow"].join(" ") }>
              <p class="font-bold mb-2">{ item.header }</p>
              <p class="mt-0">{ item.description }</p>
            </div>
          </div>) 
      }

    </div>
  </section>
)

export default ComponentGuidelines