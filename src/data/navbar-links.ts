interface NavLink {
  to: string
  name: string
}

export const NavbarLinks: NavLink[] = [
  {
    to: '/event/livestream/',
    name: 'Livestream'
  },
  {
    to: '/event/dealers/',
    name: 'Dealers Den'
  },
  {
    to: '/event/discord-vr/',
    name: 'Discord & VR'
  },
  {
    to: '/event/gallery/',
    name: 'Gallery'
  },
  {
    to: '/event/con-store/',
    name: 'Con-Store'
  },
  {
    to: '/event/djs/',
    name: 'DJs'
  },
  {
    to: '/event/how-to/',
    name: 'How-To'
  }
]
