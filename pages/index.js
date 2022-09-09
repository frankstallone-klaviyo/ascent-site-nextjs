import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => {
  return <div className='prose'><SliceZone slices={page.data.slices} components={components} /></div>
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