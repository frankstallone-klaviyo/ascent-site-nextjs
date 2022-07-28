import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@prismicio/react";

const DocumentationPage = ({ page, navigation, settings }) => {
    console.log(page)
  return (
    <div>
      <h1><RichText render={data.page_title} /></h1>
      <RichText render={data.main_text} />
    </div>
  );
}

export default DocumentationPage;