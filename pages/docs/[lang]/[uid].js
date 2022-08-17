import { PrismicRichText, SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import { createClient, linkResolver } from '../../../prismicio'
import { components } from '../../../slices'

const Page = ({ page, navigation, settings }) => {
    if (!page.data.slices || page.data.slices.length === 0) {
        return (
          <div>
            <PrismicRichText field={page.data.main_text} />
          </div>
        );
    }
  // console.log(page.data.slices);
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

    const { uid, lang } = params;

    // Ensure route is set up correctly in prismicio.js
    const page = await client.getByUID('documentation_page', uid, { lang })

    
    return {
      props: {
        page,
      },
    }
  }
  
  export async function getStaticPaths() {
    const client = createClient()
    
    const pages = await client.getAllByType('documentation_page')

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}