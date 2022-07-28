import { PrismicRichText, SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, navigation, settings }) => {
    if (!page.data.slices) {
        return (
          <div>
            <h1><PrismicRichText field={page.data.page_title} /></h1>
            <PrismicRichText field={page.data.main_text} />
          </div>
        );
    }
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  
  const page = await client.getByUID('documentation_page', params.uid)
  
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