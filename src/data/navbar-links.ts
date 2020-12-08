interface NavLink {
  id: number
  to: string
  name: string
} 

export const NavbarLinks: NavLink[] = [
  {
    id: 0,
    to: '/',
    name: 'Home'
  },
  {
    id: 1,
    to: '/news/',
    name: 'News'
  },
  {
    id: 2,
    to: '/dealers/',
    name: 'Dealers\' Den'
  },
  {
    id: 3,
    to: '/gallery/',
    name: 'Gallery'
  }
]

export const FooterLinks: NavLink[] = [
  {
    id: 0,
    to: '',
    name: ''
  }
]