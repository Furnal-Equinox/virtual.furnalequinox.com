interface NavLink {
  to: string
  name: string
} 

export const NavbarLinks: NavLink[] = [
  {
    to: '/login/',
    name: 'Login'
  },
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/dealers/',
    name: 'Dealers Den'
  },
  {
    to: '/gallery/',
    name: 'Gallery'
  },
  {
    to: '/con-store/',
    name: 'Con-Store'
  },
  {
    to: '/info/',
    name: 'Info'
  },
  {
    to: '/adult/',
    name: 'Adult'
  }
]

export const FooterLinks: NavLink[] = [
  {
    to: '/help/',
    name: 'Help'
  }
]
