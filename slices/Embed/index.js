import React from 'react'

const Embed = ({ slice }) => (
  <section>
    <span className="Embed">
      {/* // you might want to use a lib here (eg. react-oembed-container) */}
      <div  dangerouslySetInnerHTML={{ __html: slice.primary.Embed.html }} />
    </span>
  </section>
)

export default Embed