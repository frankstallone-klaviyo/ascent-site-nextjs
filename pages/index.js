import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => {
  // return <div>Test</div>
  // console.log(typeof page.data.slices)
  // if (!page.data.slices) {
  //   return (
  //     <div>
  //       <h1><PrismicRichText field={page.data.page_title} /></h1>
  //       <PrismicRichText field={page.data.main_text} />
  //     </div>
  //   );
  // }
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
    },
  }
}