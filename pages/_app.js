import '../styles/globals.css'
import { ContentfulClient, ContentfulProvider } from 'react-contentful';


function MyApp({ Component, pageProps }) {
  const contentfulClient = new ContentfulClient({
    accessToken: "gVpfrSHQx_a3H5hRL80RMDoylDtjEWLgAVkiFIs2TZQ",
    space: "ux6zoqmg26bc",
  });
  return (
  <ContentfulProvider client={contentfulClient}>
    <Component {...pageProps} />
  </ContentfulProvider>
  )
}

export default MyApp
