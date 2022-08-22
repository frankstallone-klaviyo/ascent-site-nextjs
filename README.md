This is a [Next.js](https://nextjs.org/) project with [Prismic](https://prismic.io/) integrations.

## Getting Started

### Next.js

Set up this project:

```bash
npm i
```

From here, one can run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prismic

Install [prismic-cli](https://prismic.io/docs/technical-reference/prismic-cli):
```bash
npm install -global prismic-cli
```

Sign into Prismic:
```bash
prismic login
```

Now you should be able to run Slice Machine:
```bash
npm run slicemachine
```

Open [http://localhost:9999](http://localhost:9999) with your browser to see Slice Machine.

## Deployment

This repo's `main` branch will automatically be deployed once it is pushed to GitHub.

## API routes in Next.js

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Learn more about Prismic

- [Prismic Documentation](https://prismic.io/docs) - learn about Prismic features and API.
- [Slice Machine and modeling content](https://prismic.io/docs/technologies/model-content-nextjs) — learn about modeling content with Slice Machine