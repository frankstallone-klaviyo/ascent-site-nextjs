import React from "react";

const ComponentAnatomy = ({ slice }) => (
  <section className="xl:bg-slate-100 xl:rounded-3xl flex flex-col-reverse 2xl:flex-row gap-8 xl:p-8 mb-12">
    <ol className="my-0 pl-4 list-decimal grow sm:columns-3 sm:gap-8 2xl:columns-auto">
      {slice?.items?.map((item, i) => (
        <li className="mt-0 mb-4 break-inside-avoid-column" key={i}>
          <span className="block font-bold">{item.part}</span>
          <span>{item.part_description}</span>
        </li>
      ))}
    </ol>

    <img
      className="grow my-0"
      src={slice.primary.anatomy_image.url}
      alt={slice.primary.anatomy_image.alt}
    />
  </section>
);

export default ComponentAnatomy;
