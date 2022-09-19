import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ComponentGuidelines = ({ slice }) => (
  <section className="bg-slate-300 rounded-3xl flex flex-col gap-8 p-8 mb-12">
    <PrismicRichText field={slice.primary.title} />

    <PrismicRichText field={slice.primary.description} />

    <div className="flex gap-12">
      
      { 
        slice?.items?.map((item, i) => 
          <div className="bg-white flex-1 rounded-2xl overflow-hidden" key={i}>
            
            <img src={item.image.url} alt={item.image.alt} />
            
            <div className={ [item.type === "positive" ? "border-green-700 bg-green-400" : "border-red-700 bg-red-400", "border-t-8", "p-4", "flex-grow"].join(" ") }>
              <p className="font-bold mb-2">{ item.header }</p>
              <p className="mt-0">{ item.description }</p>
            </div>
          </div>) 
      }

    </div>
  </section>
)

export default ComponentGuidelines