import React from 'react';

const FoundationsFontStack = ({ slice }) => (
  <section>
    <h2>{slice.primary.stack_name}</h2>
    <p>{slice.primary.stack_application}</p>
    <div className='md:flex xl:gap-12 gap-8'>
      {slice?.items?.map((item, i) => (
        <img src={item.stack_image.url} alt={item.stack_image.alt} key={i} />
      ))}
    </div>
  </section>
);

export default FoundationsFontStack;
