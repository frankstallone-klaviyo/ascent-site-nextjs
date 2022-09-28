import MyComponent from '../../../../../slices/docs/ComponentGuidelines';

export default {
  title: 'slices/docs/ComponentGuidelines',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [
        {
          type: 'positive',
          image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1587840171670-8b850147754e',
          },
          header: 'manufacturing',
          description: 'winter',
        },
      ],
      primary: {
        title: 'space',
        description: [
          {
            type: 'paragraph',
            text: 'Esse tempor quis ut est nisi.',
            spans: [],
          },
        ],
        row: true,
      },
      slice_type: 'component_guidelines',
      id: '_Default',
    }}
  />
);
_Default.storyName = '';
