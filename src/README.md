This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure Overview

To help with navigating the project, each folder now includes a README.md file to describe its purpose and responsibilites. Here's a breakdown of the key folders:

  * lib/: Contains utility functions, custom hooks, and reusable business logic.  See `lib/README.md` for details.
  * schemas/: Houses Sanity schema definitions, including document types, object schemas, and custom field types. Refer to `schemas/README.md` for further details.
  * styles/: Defines global and local styles for the app, including TailwindCSS customizations and component-level styles. Check `styles/README.md` for further details.
  * types/: Contains TypeScript type definitions for data models, component props, and utility functions. For more information, refer to `types/README.md`.
  * ui/: Houses reusable UI components like buttons, modals, form elements, and layout structures. See `ui/README.md` for further information.
  
Each of these directories provides a `README.md` that gives an overview of its contents and usage, mainly to help in understanding the role of each folder in the project. This structure ensures better organization and maintainability, making it easier to onboard new developers and keep the codebase clean.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
