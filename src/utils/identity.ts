export interface Identity {
  user: User
}

export interface User {
  id?: string
  aud?: string
  role?: string
  email?: string
  app_metadata?: {
    roles?: string[]
  }
  user_metadata?: {
    full_name?: string
  }
  created_at?: string
  confirmed_at?: string
  updated_at?: string
}

export const doesUserHaveAllowedRoles = ({ user }: Identity, allowedRoles?: string[]): boolean =>
  allowedRoles?.some(role => user?.app_metadata?.roles?.includes(role)) ?? true
