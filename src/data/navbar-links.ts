interface NavLink {
  to: string
  name: string
  desc: string
}

export const NavbarLinks: NavLink[] = [
  {
    to: '/event/livestream/',
    name: 'Livestream',
    desc: "Link to the livestream page, where you'll find the livestream, our event lineup, and our progress towards our donations goal!"
  },
  {
    to: '/event/dealers/',
    name: 'Dealers Den',
    desc: "Link to the dealers den page, where you'll find all our dealers! You can search for specific dealers or use our 'Feeling lucky?' button to discover dealers."
  },
  {
    to: '/event/discord-vr/',
    name: 'Discord & VR',
    desc: "Link to the Discord and Virtual Reality page, where you'll find links to our Discord server and our VRChat worlds."
  },
  {
    to: '/event/gallery/',
    name: 'Gallery',
    desc: "Link to the art gallery page, where you'll find all the art pieces artists have submitted to the website!"
  },
  {
    to: '/event/con-store/',
    name: 'Con-Store',
    desc: "Link to the con store page, where you'll find the items we're selling and links to where you can buy them."
  },
  {
    to: '/event/djs/',
    name: 'DJs',
    desc: 'Link to the DJs page, where you can learn more about our DJs and find links to their websites and social media.'
  },
  {
    to: '/event/how-to/',
    name: 'How-To',
    desc: 'Link to the how to page, where you can learn how to make the most of Discord and VRChat! We have tutorial videos with transcriptions.'
  },
  {
    to: '/info/',
    name: 'Info',
    desc: 'Link to the info page, where you can learn more about our charity, Hobbitstee Wildlife Refuge, find some links to our affiliate Canadian conventions, and credits to our staff.'
  },
  {
    to: '/help/',
    name: 'Help',
    desc: 'Link to the help page, where we have a contact form you can use to send us a message.'
  }
]
