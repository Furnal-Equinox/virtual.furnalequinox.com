import * as Yup from 'yup'

// TODO: credit regex found here: https://stackoverflow.com/a/21456918

/**
 * Inputs to the sign up form.
 */
export interface SignUpInputs {
  user_metadata: {
    full_name: string
  }
  email: string
  password: string
}

/**
 * Inputs to the login form.
 */
export interface LoginInputs {
  email: string
  password: string
}

/**
 * Inputs to the password recovery and invitation form.
 */
export interface PasswordRecoveryAndInvitationInputs {
  password: string
}

/**
 * Inputs to the contact form.
 */
export interface ContactInputs {
  name: string
  email: string
  message: string
}

const blacklistedPasswords: string[] = [
  'password', 'Password',
  '12345678', 'abcd1234',
  'fur4life', 'Fur4Life',
  'catsdogs', 'C4tsDogs',
  'Pass1234', 'pAss1234',
  'paSs1234', 'pasS1234'
]

// eslint-disable-next-line @typescript-eslint/naming-convention
const usernameSchema = Yup.string()
  .required('Please enter a name.')
  .min(1, 'Please enter at least one character for your name.')

const userMetadataSchema = Yup.object().shape({
  full_name: usernameSchema
})

const emailSchema = Yup.string()
  .required('Please enter an email address.')
  .email('This doesn\'t look like an email address.')

const passwordSchema = Yup.string()
  .required('Please enter a password.')
  .matches(
    /*
    8 - 32 characters,
    at least one uppercase letter,
    at least one lowercase letter,
    at least one number,
    and at least one special character,
    with an alternative case for grandfathering old passwords with no special characters.
    TODO: credit https://stackoverflow.com/a/21456918 !!!
    */
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{};:,."'`~_?><|+=])[A-Za-z\d!@#$%^&*()[\]{};:,."'`~_?><|+=]{8,32}|[A-Za-z\d]{8,32}$/gm,
    'Your password does not meet the requirements.'
  )
  .notOneOf(blacklistedPasswords, 'Please choose a different password.')

const messageSchema = Yup.string()
  .required('Please enter a message.')
  .min(1, 'Your message cannot be empty!')

  

/**
 * The Yup form schema for the sign up form.
 */
export const signUpSchema = Yup.object().shape({
  user_metadata: userMetadataSchema,
  email: emailSchema,
  password: passwordSchema
})

/**
 * The Yup form schema for the login form.
 */
export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema
})

/**
 * The Yup form schema for the password recovery and invitation form.
 */
export const passwordRecoveryAndInvitationSchema = Yup.object().shape({
  password: passwordSchema
})

/**
 * The Yup form schema for the contact form.
 */
export const contactSchema = Yup.object().shape({
  name: usernameSchema,
  email: emailSchema,
  message: messageSchema
})
