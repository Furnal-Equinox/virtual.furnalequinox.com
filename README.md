# virtual.furnalequinox.com
### The web platform for Furnal Equinox's virtual convention

Hello! This repository houses the code for Furnal Equinox's web platform hosted at https://virtual.furnalequinox.com.

This is website is based on [jaxx2104's Gatsby with Bootstrap starter](https://github.com/jaxx2104/gatsby-starter-bootstrap), heavily modified to suit our needs.




# Features
* Most of the code is in TypeScript rather than JavaScript for type safety.
* The code adheres to [Standard JS](https://standardjs.com/), with a few adjustments for consistency across JSX.
* Styled with Sass using Bootstrap.
* Deploys to Netlify with nothing more than what is in `netlify.toml`.

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
