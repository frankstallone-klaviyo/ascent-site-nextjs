import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { pageElementAnchor } from '../../utils';

const Heading = ({ slice }) => (
  <>
    <PrismicRichText
      field={slice.primary.heading}
      components={{
        heading1: ({ children }) => (
          <h1 id={`#${pageElementAnchor(slice.primary.heading[0].text)}`}>
            {children}
          </h1>
        ),
        heading2: ({ children }) => (
          <h2 id={`#${pageElementAnchor(slice.primary.heading[0].text)}`}>
            {children}
          </h2>
        ),
        heading3: ({ children }) => (
          <h3 id={`#${pageElementAnchor(slice.primary.heading[0].text)}`}>
            {children}
          </h3>
        ),
      }}
    />
  </>
);

export default Heading;
