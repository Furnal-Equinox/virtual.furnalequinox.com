interface NavbarLink {
  id: number
  to: string
  name: string
} 

const NavbarLinks: NavbarLink[] = [
  {
    id: 0,
    to: '/',
    name: 'Home'
  },
  {
    id: 1,
    to: '/dealers/',
    name: 'Dealers\' Den'
  },
  {
    id: 2,
    to: '/gallery/',
    name: 'Gallery'
  }
]

export default NavbarLinks