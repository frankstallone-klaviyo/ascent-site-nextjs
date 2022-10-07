import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { classNames } from '../../../utils';
import { CheckIcon, NoSymbolIcon } from '@heroicons/react/24/outline';

const ComponentGuidelines = ({ slice }) => {
  // If slice.primary.row is true, guideline container to take entire row
  const singleGuidelinePerRow = slice.primary.row ? 'flex-col' : 'flex-row';

  return (
    <section className='xl:bg-slate-100 xl:rounded-3xl flex flex-col gap-8 xl:p-8 mb-12'>
      <h3 className='my-0'>{slice.primary.title}</h3>

      <PrismicRichText field={slice.primary.description} />

      <div className={`flex xl:gap-12 gap-8 ${singleGuidelinePerRow}`}>
        {slice?.items?.map((item, i) => {
          // If there is only one item & slice.primary.row is false, resize the container to half width
          const singleItemClassName =
            slice.items.length === 1 && !slice.primary.row ? 'w-1/2' : 'flex-1';

          return (
            <div
              className={`flex flex-col bg-white rounded-2xl overflow-hidden ${singleItemClassName}`}
              key={i}
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                className='self-center'
              />

              <div
                className={classNames(
                  item.type === 'positive'
                    ? 'border-green-700 bg-green-100'
                    : 'border-red-700 bg-red-100',
                  'border-t-8',
                  'px-6',
                  'pt-6',
                  'pb-8',
                  'lg:pb-12',
                  'grow',
                  'relative'
                )}
              >
                {item.type === 'positive' ? (
                  <CheckIcon className='text-green-400 w-6 lg:w-8 absolute bottom-3 right-3' />
                ) : (
                  <NoSymbolIcon className='text-red-400 w-6 lg:w-8 absolute bottom-3 right-3' />
                )}
                <p className='font-bold mb-2 mt-0'>{item.header}</p>
                <p className='mt-0 mb-1'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ComponentGuidelines;
