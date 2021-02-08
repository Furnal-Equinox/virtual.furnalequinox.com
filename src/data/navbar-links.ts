interface NavLink {
  to: string
  name: string
}

export const NavbarLinks: NavLink[] = [
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
  }
]

export const NavbarAccountLinks: NavLink[] = [
  {
    to: '/sign-up/',
    name: 'Sign Up'
  },
  {
    to: '/login/',
    name: 'Login'
  }
]

export const FooterLinks: NavLink[] = [
  {
    to: '/help/',
    name: 'Help'
  }
]
