# virtual.furnalequinox.com
### The web platform for Furnal Equinox's virtual convention

Hello! This repository houses the code for Furnal Equinox's web platform hosted at https://virtual.furnalequinox.com.

This is website is based on [jaxx2104's Gatsby with Bootstrap starter](https://github.com/jaxx2104/gatsby-starter-bootstrap), heavily modified to suit our needs.




# Features
* Most of the code is in TypeScript rather than JavaScript for type safety.
* The code adheres to [Standard JS](https://standardjs.com/), with a few adjustments for consistency across JSX.
* Styled with Sass using Bootstrap.
* Deploys to Netlify with nothing more than what is in `netlify.toml`.

# What's in This Repository?
Loose Files
* `.estlintrc.js` and `.estlintignore`: configuration files for ESLint, which helps enforce consistency and avoid some ambiguities and errors.
* `.gitignore`: tells Git which folders and files to ignore to keep the repository size down on GitHub.
* `.stylelintrc.js`: configuration file for stylelint, which does the same thing as ESLint but for CSS and its cousins like SASS / SCSS.
* `.textlintrc`: configuration file for textlint, which can check prose for grammar problems.
* `LICENSE`: the license file.
* `README.md`: what you're reading right now!
* `gatsby-browser.js`: Gatsby injects whatever is in here into the final HTML. This is good for global CSS and JS utilities like Bootstrap and jQuery.
* `gatsby-config.js`: configuration file for Gatsby. This is where all of the plugins for Gatsby go, such as the one that allows Gatsby to understand Markdown files. This is also where Gatsby keeps metadata about the website.
* `gatsby-node.js`: this file instructs Gatsby how to do some things during the build process, such as generating slugs and programmatically generating pages.
* `netlify.toml`: configuration file for Netlify. Tells Netlify how to build the website and what folder should be deployed.
* `package.json`: this file tells NPM / Yarn what this project's dependencies are.
* `site-config.js`: I adapted this file from the `./data/SiteConfig.js` file from the Gatsby Advanced Starter. This is the single source of truth for metadata for the website.
* `tsconfig.json`: configuration file for the TypeScript compiler.
* `yarn.lock`: Yarn automatically generates this file to save the exact version of packages that match the specification in `package.json`. This makes sure any copy of this website will be using the same dependencies.

Folders
* `/content/`: holds all images and text to be added to the website.
* `/src/`: holds the source code for the website.
  * `/components/`: holds the source code for UI components.
  * `/data/`: holds the source code for any static data that is needed only inside `/src/`, such as the links in the navbar component.
  * `/pages/`: holds the source code for each page. Gatsby generates a web page for each of the files in this folder.
  * `/scss/`: holds the global SCSS for the website, namely colors, fonts, and any configuration of Bootstrap.
  * `/templates/`: holds the templates for generated pages. Gatsby uses these in `gatsby-node.js` to programmatically generate pages for the data in `/content/`.
  * `html.tsx`: Gatsby optionally uses this file as the base HTML file for any HTML file it generates.
* `/static/`: holds the favicon and logo.
* `/types/`: holds any TypeScript type declaration files. At the moment, the only file is the one Gatsby generates for all the GraphQL queries in the website.

# Environment Details
This website was built with these tools, if for some reason the website build fails due to a compatibility issue with these tools.
* NodeJS version: 14.15.0 (lts/fermium)
* NPM version: 6.14.9
* Yarn version: 1.22.10
* Gatsby CLI version: 2.14.1

# Build Instructions
***Assuming a Unix operating system such as macOS or Linux***

1. Clone or download this repository.
2. `cd` into the directory and run `yarn`.
3. Run `gastby develop` to start the local development server.
4. If all went well, the website will be ready at `http://localhost:8000/`.
5. Enjoy!!
   
# Deploy Instructions
***Warning: You must have access to the Netlify team in order to deploy to virtual.furnalequinox.com***

Deployment can be handled either through Netlify's website or through the Netlify CLI.
Triggering a deploy on the website is as simple as pressing a button.

To deploy the website through the CLI:
1. Perform the build instructions above.
2. Run `netlify build`.
3. If all went well, run `netlify deploy` to perform a draft deploy.
4. Check the temporary URL for any errors!
5. Deploy the website for real with `netlify deploy --prod`.

Deploying the website via the Netlify CLI has the benefit of saving build minutes on Netlify, but if your computer does not have a lot of processing power, it is better to just let Netlify build it for you.
