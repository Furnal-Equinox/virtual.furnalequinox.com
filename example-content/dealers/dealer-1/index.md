---
# Note the bars at the top and bottom of this section! This is a special YAML segment
# called frontmatter. gatsby-transformer-remark parses the YAML here into data fields.

# If you look at a post under /posts/, you will see that the text below this YAML segment
# is rendered as the body of the post. You can leave it blank if you like.

# The folder structure should look like:
#  dealers
#    * dealer-one (this folder)
#      * index.md (this file)
#      * banner.png
#      * image-1.png
#      * image-2.jpg
#      * optional-gif.gif
#      * etc.
#    * dealer-two (this folder)
#      * index.md (this file)
#      * banner.png
#      * image-1.png
#      * image-2.jpg
#      * optional-gif.gif
#      * etc.

# ⚠️ The folder name can be anything you want, but:
#   * it must be URL-friendly (no apostrophes, for instance)
#   * it must be lowecase and use hyphens like the rest of the pages are.

# gatsby-node.js uses this field to determine which template to use
# for generating a page.
# Please do not change this field!
layout: dealer

# the dealer's store's name
title: "Title"

# The dealer's name
dealer: "Dealer's name"

# we're not using this field, but we could use this to distinguish
# dealers that specialize in 2D / 3D art verses dealers that specialize in merchandise
kind: "dealer"

# whether or not the dealer's content is 18+ / NSFW
isAdult: false 

# whether or not the dealer has paid for a premium spot
isPremium: true 

# A short blurb describing the store
description: "Description"

# Keywords for the dealer's store.
# The search engine will use these terms.
# This syntax corresponds to a list.
keywords:
  - "Keyword 1"
  - "Keyword 2"
  - "Keyword 3"

# The URL of the dealer's store or website.
url: "Dealer's website"

# A big image that the website uses as a thumbnail on the dealers page
# and as a hero image on the dealer's individual page.
# The "./" at the start is a shorthand for the current folder / directory.
# You can leave it out if you like.
banner: 
  file: "./the-image-file-in-the-same-folder-as-this-file.png"
  desc: "A short, screen-reader-friendly description"

# Images to display below the dealer's info.
images:
  - file: "./the-image-file-in-the-same-folder-as-this-file-2.png"
    desc: "A short, screen-reader-friendly description"
  - file: "./the-image-file-in-the-same-folder-as-this-file-3.png"
    desc: "A short, screen-reader-friendly description"
  - file: "./the-image-file-in-the-same-folder-as-this-file-4.png"
    desc: "A short, screen-reader-friendly description"

# Optional GIFs.
gifs:
  - file: "./an-optional-gif.gif"
    desc: "A short, screen-reader-friendly description"

# Social media URLs.
# ⚠️ Use the full URL, not just the username!
# You can fill in as many of these as you like.
social:
  behance: ""
  deviantart: "Dealer's DeviantArt"
  discord: ""
  etsy: ""
  facebook: ""
  furaffinity: "Dealer's FurAffinity"
  github: ""
  instagram: ""
  picarto: "Dealer's Picarto"
  pinterest: ""
  steam: ""
  telegram: ""
  tumblr: ""
  twitch: ""
  twitter: "Dealer's Twitter"
  youtube: ""

# Times when the dealer is streaming / doing a panel.
# times here are based in the 24-hour clock.
# The home page will use these times to display a table
# showing when everyone is streaming.
# You can add and name the days whatever you like - just be sure
# you change the code that references these values!
streaming:
  friday:
    - start: "0:00"
      end: "1:00"
    - start: "2:00"
      end: "3:00"
  saturday:
    - start: "0:00"
      end: "1:00"
    - start: "2:00"
      end: "3:00"
  sunday:
    - start: "13:00"
      end: "14:00"
    - start: "15:00"
      end: "16:00"
---

Add the dealer's long description here. The dealer may use any Markdown formatting here :)

See [this website](https://www.markdownguide.org/cheat-sheet/) for available Markdown syntax.