import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { pageElementAnchor } from '../../../utils';

const ComponentVariant = ({ slice }) => (
  <section className='xl:bg-slate-100 xl:rounded-3xl xl:p-8 mb-12'>
    <h3
      className='mt-0'
      id={`#${pageElementAnchor(slice.primary.variant_name)}`}
    >
      {slice.primary.variant_name}
    </h3>

    <PrismicRichText field={slice.primary.description} />

    <ul className='flex list-none gap-2 p-0 m-0'>
      {slice?.items?.map((item, i) => (
        <li className='rounded-full bg-slate-700 text-white px-4 py-1' key={i}>
          {item.variant_name}
        </li>
      ))}
    </ul>

    <ul className='flex lit-none gap-4 p-0 m-0'>
      {slice?.items?.map((item, i) =>
        item.variant_image.url ? (
          <li key={i}>
            <img
              src={item.variant_image.url}
              alt={item.variant_image.alt}
              className='m-0'
            />
          </li>
        ) : null
      )}
    </ul>
  </section>
);

export default ComponentVariant;
