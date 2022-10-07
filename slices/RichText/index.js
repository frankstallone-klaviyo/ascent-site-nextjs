import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { pageElementAnchor } from '../../utils';

const RichText = ({ slice }) => {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.wysiwyg}
        components={{
          heading2: ({ children }) => (
            <h2
              id={`#${pageElementAnchor(
                children[0].props.children[0].props.children
              )}`}
            >
              {children}
            </h2>
          ),
          heading3: ({ children }) => (
            <h3
              id={`#${pageElementAnchor(
                children[0].props.children[0].props.children
              )}`}
            >
              {children}
            </h3>
          ),
        }}
      />
    </section>
  );
};

export default RichText;
