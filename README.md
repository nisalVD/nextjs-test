# Next.js + Tailwind CSS Headless Challenge

#### Your task is to displat a typical eCommerce product page from the provided store details found using the provided credentials with React Hooks, Tailwind CSS & SSR. Your solution will be judged based on the following things:

- How your query the Shopify API
- How your implement styling with TailwindCSS.
- Components
- Project structure
- Code quality

##### Notes:

- This project already has TailwindCSS configured for you.
- Submission will require you to upload this on a personal public repository that you will share with your contact at Convert Digital via email.
- Add to cart buttons are not expected to be functional.

##### Requirements:

- node 16 added a nvmrc that would change, prompt to use correct node version, also added restriction on package.json
- all the graphql types are generated with a codgen tool, if graphql code changes re-run the codegen, or run it on watch mode

```sh
yarn run codegen
```

to watch

```sh
yarn run codegen:watch
```

##### Things to improve on

- Pagination only works one way, couldn't get the pagination to work the other way :/
- prettier plugin to get nicer support for tailwind classes
- more component library like Button component
- alot of styling cleanup and a header for easier navigation
- I wanted just use .graphql files, but I couldn't get it to work, if i add the graphql loader it works fine
  but it breaks mjs files which some of the libraries used were depending on

##### Deployements

application is deployed on vercel
here https://nextjs-test-qg16.vercel.app/
