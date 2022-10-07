import MyComponent from '../../../../../slices/docs/ComponentVariant';

export default {
  title: 'slices/docs/ComponentVariant',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [
        {
          variant_name: 'atmosphere',
          variant_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
          },
        },
      ],
      primary: {
        variant_name: 'married',
        description: [
          {
            type: 'paragraph',
            text: 'Aliquip anim aliqua adipisicing officia enim. Deserunt do nisi sit in sint enim duis.',
            spans: [],
          },
        ],
      },
      slice_type: 'component_variant',
      id: '_Default',
    }}
  />
);
_Default.storyName = '';
