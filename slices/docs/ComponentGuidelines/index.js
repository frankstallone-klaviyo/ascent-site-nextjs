import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const ComponentGuidelines = ({ slice }) => {
  // If there is only one item, resize the container to half width
  const singleItemClassName = slice.items.length === 1 ? 'w-1/2' : '';

  return (
    <section className='xl:bg-slate-100 xl:rounded-3xl flex flex-col gap-8 xl:p-8 mb-12'>
      <h3 className='my-0'>{slice.primary.title}</h3>

      <PrismicRichText field={slice.primary.description} />

      <div className={'flex xl:gap-12 gap-8 ' + singleItemClassName}>
        {slice?.items?.map((item, i) => (
          <div
            className='flex flex-col bg-white flex-1 rounded-2xl overflow-hidden'
            key={i}
          >
            <img
              src={item.image.url}
              alt={item.image.alt}
              className='self-center'
            />

            <div
              className={[
                item.type === 'positive'
                  ? 'border-green-700 bg-green-100'
                  : 'border-red-700 bg-red-100',
                'border-t-8',
                'p-6',
                'grow',
              ].join(' ')}
            >
              <p className='font-bold mb-2 mt-0'>{item.header}</p>
              <p className='mt-0 mb-1'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentGuidelines;
