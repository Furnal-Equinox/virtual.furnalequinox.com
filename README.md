# ![Furnal Equinox logo](./static/favicon.ico) virtual.furnalequinox.com
[![Netlify Status](https://api.netlify.com/api/v1/badges/8cad1cab-da94-4033-82b7-24b9fd36514d/deploy-status)](https://app.netlify.com/sites/virtual-furnal-equinox/deploys)
### The web platform for Furnal Equinox's virtual convention!

Hello! This repository houses the code for Furnal Equinox's web platform hosted at https://virtual.furnalequinox.com.

Since this website is hosted on Netlify, you can also access it at https://virtual-furnal-equinox.netlify.app/.

This website is based on [jaxx2104's Gatsby with Bootstrap starter](https://github.com/jaxx2104/gatsby-starter-bootstrap), *heavily* modified to suit Furnal Equinox.

After a lot of discussion, we are keeping this web platform open source under the MIT license in the hope that it may be useful to other furry conventions trying to run their own virtual conventions, regardless of their size. In these strange times, it is even more important that we help each other and stick together. If you want to use this website, all we ask is that you respect the terms of the license, replace the logos in `/static/`, and adjust this website to suit your needs. If this website has helped you and your local furry community, please consider contributing your changes back to us in the form of a pull request!

To use this website for your own furry convention, you will need to know and understand:
* Some HTML, CSS, and JavaScript.
* Some TypeScript.
* What React is and how it works.
* What Gatsby is and how it works with React.
* What GraphQL is, how Gatsby uses it to store the website's data, and how you can interact with the GraphQL schema.
* How Gatsby can programmatically generate pages from data.
* What Sass and Bootstrap are.
* What Netlify is and how to deploy a Gatsby website to Netlify. You can absolutely deploy this to another host, but we may not be able to help you.
* What role-based access control is.

***Please read through this file very carefully because I have tried to provide as much information as possible about what's going on with this repository.***

By the way, when you see "I" in this document, that's me, Ardal / William Howell, the original author of this source code!

# Features
* Built using [Gatsby](https://www.gatsbyjs.com/), a static site generator for [React](https://reactjs.org/).
* (WIP) Compliance with WCAG2AA thanks to [pa11y](https://pa11y.org/)!
* Written mostly in [TypeScript](https://www.typescriptlang.org) to help catch bugs, errors, and other weirdness from JavaScript's dynamic type system at compile time.
* Adheres to [Standard JS](https://standardjs.com/), with a few adjustments for consistency across JSX / TSX.
* Styled with [Sass](https://sass-lang.com/) using [Bootstrap 5](https://getbootstrap.com/).
* Deploys to Netlify with nothing more than what is in `netlify.toml`.
* Uses the Gatsby cache during deployment for fast build times thanks to `netlify-plugin-gatsby-cache`!
* Uses [Storybook](https://storybook.js.org/) for previewing and designing components in isolation!
* Deploys the Storybook to [Chromatic](https://www.chromatic.com/) for easy discussion about the design of the components.
* Client-side and server-side role-based access control thanks to `react-netlify-identity-gotrue`!
* Integrates Stripe into Netlify Identity, using Fauna DB (a NoSQL database with a GraphQL interface) as a connector.
* Uses Stripe to allow users to donate to our organization and to allow users to buy subscriptions that change their role in Netlify Identity.

# 💾 What's in This Repository? 💾
### 📄 Loose Files 📄
* `.env`: holds environment variables. As these are sensitive, I have provided `.env.example`, which is `.env` without the keys. You have to fill this out yourself!
* `.estlintrc.js` and `.estlintignore`: configuration files for ESLint, which helps enforce a consistent code style and avoid some ambiguities and errors.
* `.gitignore`: tells Git which folders and files to ignore to keep the repository size down on GitHub.
* `.gitmodules`: tells Git which repositories to pull in as submodules and where they go. Our only `content` submodule is private, so trying to clone it will fail unless you have access to it. You should replace this submodule with your own content.
* `.stylelintrc.js`: configuration file for stylelint, which does the same thing as ESLint but for CSS and its cousins like SASS / SCSS.
* `.textlintrc`: configuration file for textlint, which can check prose for grammar problems.
* `gatsby-browser.js`: Gatsby injects whatever is in here into the final HTML. This is good for global JS utilities like jQuery and Popper.js.
* `gatsby-config.js`: configuration file for Gatsby. This is where all of the plugins for Gatsby go, such as the one that allows Gatsby to understand Markdown files. This is also where Gatsby keeps metadata about the website.
* `gatsby-node.js`: this file instructs Gatsby how to do some things during the build process, such as generating slugs and programmatically generating pages.
* `LICENSE`: the license file.
* `netlify.toml`: configuration file for Netlify. Tells Netlify how to build the website and what folder should be deployed.
* `README.md`: what you're reading right now!
* `package.json`: this file tells NPM / Yarn what this project's dependencies are. ***⚠️ Please be careful with updating the dependencies! Even seemingly innocuous updates may cause the website to break. ⚠️***
* `site-config.js`: I adapted this file from the `./data/SiteConfig.js` file from the Gatsby Advanced Starter. This is the single source of truth for metadata for the website.
* `tsconfig.json`: configuration file for the TypeScript compiler.
* `yarn.lock`: Yarn automatically generates this file to save the exact version of packages that match the specification in `package.json`. This makes sure any copy of this website will be using the same dependencies.

### 📂 Folders 📂
* 📕 `/.storybook/`: settings for Storybook, which I am using for visual testing and design discussion.
* 🖌 `/content/`: holds all images and text to be added to the website. This is a hidden submodule as it contains IP-protected content.
  * `/ads/`: holds the images and info for the shop items on the shop page.
  * `/dealers/`: holds the images and info for each individual dealer.
  * `/gallery/`: likewise, but for the images in the art gallery.
  * `/images/`: general images used throughout the website, like the logo and the splash image.
  * `/posts/`: holds the images and text for each blog post.
  * `/shop/`: holds the images used for the shop page.
* 🗄 `/docs/`: holds all the sketches, UI mockups, and WIP screenshots. The `README.md` has a list of helpful links.
  * `/Form Input/`: notes on info and data needed from dealers and artists.
  * `/Routines/`: notes on some common stuff like adding new pages.
  * `/Sketches/`: any UI mock-ups and sketches, categorized by date.
  * `/WIP Screenshots/`: screen shots I have taken of the website.
  * The `README.md` in this folder contains a collection of useful links.
* `/example-content/`: In the spirit of the MIT license, this folder is a copy of content redone so that you can use it to bootstrap your content.
* `/fauna-db/`: Holds one file: `schema.graphql`, which describes the shape of the user record used to keep Netlify Identity and Stripe in sync.
* `/functions/`: Holds serverless Netlify Functions, each in their own directory with their own dependencies.
* 📋 `/pa11y-reports/`: Output from running pa11y on URLs from the live website.
* 📃 `/scripts/`: Scripts used to help automate stuff. These don't play any direct role in the website - they're just helpful tools.
  * `pa11yRunner.hs`: A Haskell script that automates running pa11y over a set of URLs from the live website and saves the reports to `/pa11y-reports/`.
* 💾 `/src/`: holds the source code for the website.
  * `/components/`: holds the source code for UI components. 
    * Each component has:
      * `index.tsx`, which represents the structure of that component.
      * (optional) `style.module.scss`, which represents the presentation of that component. The SCSS file is modularized to the component and has no effect outside of the component.
      * (optional) `(something).stories.tsx`, which is a mock-up version of the component for the Storybook UI library.
  * `/data/`: holds the source code for any static data that is needed only inside `/src/`, such as the links in the navbar component.
  * `/layouts/`: components that control the layout of the website, including general containers like `<section></section>` elements.
  * `/pages/`: holds the source code for each page. Gatsby generates a web page for each of the files in this folder.
    * `index.tsx`: in particular, this is the home page! 
  * `/scss/`: holds the global SCSS for the website, namely colors, fonts, and any configuration of Bootstrap.
  * `/templates/`: holds the templates for generated pages. Gatsby uses these in `gatsby-node.js` to programmatically generate pages for the data in `/content/`. Each template also has its own SCSS file.
  * `/utils/`: assorted utility functions that don't fit anywhere else or are used in multiple places, such as the form validators.
* 📦 `/static/`: holds the favicon, logo, and redirects file.
* 📐 `/types/`: holds any TypeScript type declaration files. At the moment, the only file is the one Gatsby generates for all the GraphQL queries in the website. This file changes VERY often.


# 🌎 Environment Details 🌎
This website was built with these tools, if for some reason the website build fails due to a compatibility issue with these tools.
* [NodeJS](https://nodejs.org/en/) version: 14.15.1 (lts/fermium)
* [NPM](https://www.npmjs.com/) version: 6.14.10
* [Yarn](https://yarnpkg.com/) version: 1.22.10
* [Gatsby](https://www.gatsbyjs.com/) CLI version: 2.14.1


# 🛠 Build Instructions 🛠
***Assuming a Unix operating system such as macOS or Linux***

0. Make sure you have installed NodeJS for your system. I recommend the workflow described [here on Tania Rascia's blog](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/#nodejs). 
   1. Since this project uses a specific version, be sure to run `nvm install lts/fermium` and then `nvm alias default lts/fermium` (to set this version as the default) or `nvm use lts/fermium` (to use this version just for this session - you will have to run this every time you start a terminal, though!).
   2. Run `npm i -g yarn` to install Yarn.
1. Click on the green "Code" button at the top of the repository and clone or download this repository.
2. `cd` into the directory and run `yarn` to install all the dependencies for this website.
3. Run `gatsby develop` to start the local development server.
4. If all went well, the website will be ready at `http://localhost:8000/`.
5. Enjoy!!


# 🚀 Deploy Instructions 🚀
***⚠️ Warning: You must have access to the Netlify team in order to deploy to virtual.furnalequinox.com ⚠️*** 

***⚠️ Warning: I have turned off automatic deploys. Deploys must be done via the Netlify CLI. ⚠️***

Deployment can be handled either through Netlify's website or through the Netlify CLI.
Triggering a deploy on the website is as simple as pressing a button.

To deploy the website through the CLI:
1. Perform the build instructions above.
2. Run `netlify build`.
3. If all went well, run `netlify deploy` to perform a draft deploy.
4. Check the temporary URL for any errors!
5. Deploy the website for real with `netlify deploy --prod`.

Deploying the website via the Netlify CLI has the benefit of saving build minutes on Netlify, but if your computer does not have a lot of processing power, it is better to just let Netlify build it for you.

# Design Notes

## ESLint Configuration
For ESLint, I chose Standard JS because I feel it gives a distinct look and feel to JavaScript code. I like the functional programming side of JavaScript, and I am used to languages that don't use semicolons to end statements, like Swift, Python, and Haskell, to name a few.

# That's it!

If you have any questions about this README or about the repository, please open an issue with your question!

[![FOSSA Status](https://app.fossa.io/api/projects/custom%2B22676%2Fgithub.com%2FFurnal-Equinox%2Fvirtual.furnalequinox.com.svg?type=large)](https://app.fossa.io/projects/custom%2B22676%2Fgithub.com%2FFurnal-Equinox%2Fvirtual.furnalequinox.com?ref=badge_large)