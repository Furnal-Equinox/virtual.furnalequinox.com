# Adding Pages to the Website

To add a page to the website, first build out the page in `/src/pages/`. Gatsby will immediately include the page.

To hook the page up to the navigation bar, just make a new entry in `/src/data/navbar-links.ts`. Make sure that the name in the `to` part matches the name in the page component - e.g., `/shop/` for `shop.tsx`.