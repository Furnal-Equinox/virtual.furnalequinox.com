import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

// TODO: credit regex found here: https://stackoverflow.com/a/21456918

export interface Inputs {
  user_metadata: {
    full_name: string
  }
  email: string
  password: string
}

const blacklistedPasswords: string[] = [
  'password',
  'Password',
  '12345678',
  'abcd1234',
  'fur4life',
  'catsdogs'
]

const user_metadataSchema = Yup.object().shape({
    full_name: Yup.string()
      .required('Please enter a name.')
      .min(1, 'Please enter at least one character for your name.')
  })

const emailSchema = Yup.string()
  .required('Please enter an email address.')
  .email('This doesn\'t look like an email address.') 

const passwordSchema = Yup.string()
  .required('Please enter a password.')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/gm, 
    'Your password does not meet the requirements.'
  )
  .notOneOf(blacklistedPasswords, 'Please choose a different password.')

export const signUpSchema = Yup.object().shape({
  user_metadata: user_metadataSchema,
  email: emailSchema,
  password: passwordSchema
})

export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema
})
