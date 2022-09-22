import React from 'react'
import { PrismicLink } from '@prismicio/react'

const Header = ({ slice }) => (
  <header>
    <div className='logo'>
      <a href="/"><img src={slice.primary.Logo.url} alt={slice.primary.Logo.alt} /></a>
    </div>
    <div className='internal-links'>
      { slice?.items?.map((item, i) => 
      <a href={PrismicLink.url(item.ExternalLink)}>My Link</a>
      ) }
    </div>
    <div className='internal-links'>
      { slice?.items?.map((item, i) => 
      <a href={PrismicLink.url(item.InternalLink)}>My Link</a>
      ) }
    </div>
  </header>
)

export default Header