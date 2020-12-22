interface NavLink {
  to: string
  name: string
} 

export const NavbarLinks: NavLink[] = [
  {
    to: '/',
    name: 'Home'
  },
  // {
  //   id: 3,
  //   to: '/news/',
  //   name: 'News'
  // },
  {
    to: '/dealers/',
    name: 'Dealers Den'
  },
  {
    to: '/gallery/',
    name: 'Gallery'
  },
  {
    to: '/shop/',
    name: 'Shop'
  },
  {
    to: '/adult/',
    name: 'Adult'
  }
]

export const FooterLinks: NavLink[] = [
  {
    to: '',
    name: ''
  }
]
