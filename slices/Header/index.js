import React from 'react'
import { Link } from '@prismicio/react'

const Header = ({ slice }) => (
  <header>
    <div className='logo'>
      <a href="/"><img src={slice.primary.Logo.url} alt={slice.primary.Logo.alt} /></a>
    </div>
    <div className='internal-links'>
      { slice?.items?.map((item, i) => /* import { Link } from 'prismic-reactjs' */
      <a href={Link.url(item.ExternalLink)}>My Link</a>
      ) }
    </div>
    <div className='internal-links'>
      { slice?.items?.map((item, i) => /* import { Link } from 'prismic-reactjs' */
      <a href={Link.url(item.InternalLink)}>My Link</a>
      ) }
    </div>
  </header>
)

export default Header