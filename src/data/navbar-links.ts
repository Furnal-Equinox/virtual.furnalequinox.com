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
  // {
  //   id: 1,
  //   to: '/stream-two/',
  //   name: 'Stream 2'
  // },
  // {
  //   id: 2,
  //   to: '/stream-three/',
  //   name: 'Stream 3'
  // },
  // {
  //   id: 3,
  //   to: '/news/',
  //   name: 'News'
  // },
  {
    id: 4,
    to: '/dealers/',
    name: 'Dealers Den'
  },
  {
    id: 5,
    to: '/gallery/',
    name: 'Gallery'
  },
  {
    id: 6,
    to: '/shop/',
    name: 'Shop'
  },
  {
    id: 7,
    to: '/adult/',
    name: 'Adult'
  }
]

export const FooterLinks: NavLink[] = [
  {
    id: 0,
    to: '',
    name: ''
  }
]
