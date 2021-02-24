# Credits

## ⚠️ WARNING: these credits are incomplete and may change over time. I am working on adding all credits as we wrap up development of this website. If I am missing a credit for you, please open an issue. I will be happy to credit you! ⚠️

This website has had a very interesting life. It began as a fork of version 0.3.0 of my [personal website](https://github.com/willowell/williamhowell), which I was trying to transition from Bootstrap to Tailwind CSS at the time. Subsequently, there are references to PostCSS And Tailwind CSS in the commit history of this repository.

This website has been a massive effort on my part, so I want to give proper credit to all the sources and tutorials I have used over the course of this website's development.

## Gatstrap, the original base

This website is originally based on jaxx2104's [gatstrap](https://github.com/jaxx2104/gatsby-starter-bootstrap), a starter template for Gatsby that has Bootstrap ready to go.

The `html.tsx` file from this starter is still here intact, and I have kept the badge component (./src/components/badge/index.tsx) and the post template (./src/templates/post/post.tsx). I have also kept emergence.js in because it gives a nice, quick animation. I also removed everything relating to Google Analytics and Google Adsense. At present, the website uses just Google Tag Manager for analytics, and we have ads *only from the dealers*.

## Gatsby Advanced Starter

However, I found the gatsby-starter-bootstrap to be lacking. It's approach to templates made creating a template for the dealer pages a little confusing, so I referred to the [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter). In particular:
* I used their setup with `SiteConfig.js` and `gatsby-config.js`. I took the `SiteConfig.js` file, renamed it to `site-config.js`, and moved it to the root folder. 
* I read over their `gatsby-node.js` to figure out how to make separate pages for the dealers along with the news posts. 
* I used the CSS rules in their `./src/layout/index.css` file to get that full-width and full-height look and feel. I basically copied that over to `./src/scss/gatstrap.scss` and incorporated it into the global CSS rules that were already there.
* Same goes for the layout component in their `./src/layout/index.jsx`.
* I also used their SEO component in their `./src/components/SEO/SEO.jsx`. I converted it to TypeScript, went over it with ESLint, removed the dependency on moment, and got rid of fields that we don't need.

In hindsight, I wish I had started with it because it has just about everything you could ask for. Adding TypeScript would have been pretty easy, and it has very little styling, so adding styling should not have been too much trouble.

## Tania Rascia's personal website

Tania Rascia's personal website is [here](https://www.taniarascia.com/), and the repository for her website is [here](https://github.com/taniarascia/taniarascia.com).



## The Fauna DB API function in ./functions/src/utils/api.ts

I made this function following David Parks' tutorial [here](https://davidparks.dev/blog/building-a-like-counter-with-faunadb-and-nuxt/). In particular, I used the code snippet [here](https://davidparks.dev/blog/building-a-like-counter-with-faunadb-and-nuxt/#incrementing-likes-function), and adjusted it for use with our Fauna database by separating out their single handler into several functions for each of our database's endpoints, and finally wrapped the core part of each function in a try-catch block to gracefully deal with any exceptions that may occur in the function.

While there is only one function here, this function is a copy of the same function in the Donations Tool [here](https://github.com/Furnal-Equinox/donations-tool/blob/main/src/core/api.ts).

David Parks references [this blog post](https://www.joshwcomeau.com/react/serverless-hit-counter), so I want to point that out here, too. There is a small irony in me using Parks' version since they use Nuxt instead of Comeau's React version, but the Netlify Function logic works either way.

## The logic for periodically fetching the donation totals from the DB in ./src/components/charity-meter/index.tsx

I made the logic for this component following this [tutorial](https://js.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081). I made a few adjustments, namely using environment variables for the interval. I also portal the database fetching using an authorized fetch to a Netlify Function to protect the Fauna DB secret key.
