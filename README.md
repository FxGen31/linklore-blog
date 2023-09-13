<p align="center">
  <img src="https://res.cloudinary.com/dv9jybv7h/image/upload/v1694510988/logo_ufckbh.png" alt="linklore blog logo" width="72" height="72" />
  <h1 align="center">Linklore Blog</h1>
  <p align="center">A personal blog built with Next.js, Contentlayer, and shadcn/ui.</p>
  
  Demo: [https://linklore-blog.vercel.app](https://linklore-blog.vercel.app)
  
  <details>
    <summary>Screenshots</summary>
    <img src="https://res.cloudinary.com/dv9jybv7h/image/upload/v1694568347/blog-dark-theme_bvi11z.png" alt="dark theme blog"/>
    <img src="https://res.cloudinary.com/dv9jybv7h/image/upload/v1694568350/blog-light-theme_mnqjav.png" alt="light theme blog"/>
  </details>
</p>

## Table of contents

- [Table of contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deploy](#deploy)

## Getting Started

First, clone the repository and install all the dependencies:

```bash
npm install -g pnpm
pnpm install
# or
npm install
```

Then, start the development server:

```bash
npm run dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

- Developed with [Next.js](https://nextjs.org)
- Uses [Contentlayer](https://contentlayer.dev) to transfer content into blog posts
- Applies styles and creates custom themes using [Tailwind CSS](https://tailwindcss.com)
- Supports both light and dark themes utilizing [next-themes](https://github.com/pacocoursey/next-themes)
- Fully responsive view
- Takes inspiration from [shadcn/ui](https://ui.shadcn.com/) to build ui component library

## Project Structure

```text
linklore-blog
├── app
│   ├── posts
│   │   └── [slug]
│   │       └── page.tsx
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── common-components.tsx
│   │   └── ...
│   ├── custom-components.tsx
│   └── ...
├── configs
│   ├── config-files.ts
│   └── ...
├── hooks
│   ├── custom-hooks.ts
│   └── ...
├── lib
│   └── utils.ts
├── posts
│   ├── blog-post.mdx
│   └── ...
├── public
├── contentlayer.config.ts
├── next.config.ts
├── tailwind.config.ts
└── ...
```

## Customization

- `configs/site-config.ts` - Contains site metadata and author information. (**Modify to your need**)
- `configs/projects-config.ts` - Contains placeholder details for portfolio projects. (**Modify to your need**)
- `configs/nav-config.ts` - Contains all the navigation links in the site navbar.
- `config/keyword-colors-config.ts` - Contains a mapping of keywords to their respective badge colors.
- `app/global.css` - Configures Tailwind CSS theme colors and global styles.
- `tailwind.config.ts` - Configures Tailwind CSS styles and plugins.
- `posts/*.mdx` - Contains a collection of dummy posts. (**Replace with your actual data**)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
