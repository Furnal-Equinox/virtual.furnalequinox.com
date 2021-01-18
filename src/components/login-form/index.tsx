import React, { useEffect, useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import * as Yup from 'yup'

interface Inputs {
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

// TODO: credit regex found here: https://stackoverflow.com/a/21456918

const schema = Yup.object().shape({
  /* name: Yup.string()
    .required('Please enter a name.')
    .min(1, 'Please enter at least one character for your name.'), */
  email: Yup.string()
    .required('Please enter an email address.')
    .email('This doesn\'t look like an email address.'),
  password: Yup.string()
    .required('Please enter a password.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/gm, 
      'Your password does not meet the requirements.'
    )
    .notOneOf(blacklistedPasswords, 'Please choose a different password.')
})

interface Props {
  navigateTarget?: string
}

const LoginForm: React.FC<Props> = ({ navigateTarget }) => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<Inputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const [formError, setFormError] = useState<string | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

  useEffect(() => {
    navigateTarget !== undefined &&
    identity.user !== undefined &&
    navigate(navigateTarget)
  }, [navigateTarget, identity.user])

  const onSubmit = async data => {
    setIsLoggingIn(true)
    setFormError(null)

    await identity
      .login({ email: data.email, password: data.password })
      .then(() => {
        setIsLoggingIn(false)
        navigateTarget !== undefined && navigate(navigateTarget)
      })
      .catch((error) => {
        setIsLoggingIn(false)
        setFormError(error.message)
      })
  }

  const AlreadyLoggedIn: React.FC = () =>
    <>
      <p className='h2'>
        You are already logged in!
      </p>
    </>

  const ProvisionalUser: React.FC = () =>
    <>
      <p>
        Your account has not yet been confirmed. Please check your email.
      </p>
    </>

  const Form: React.FC = () =>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='h2'>
      Please log in to continue.
      </p>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='email'
          type='text' 
          className='form-control'
          placeholder='Email address'
          autoFocus
        />
        <label htmlFor='inputEmail'>
        Email address
        </label>
        {errors.email !== undefined &&
          <p className='text-danger'>
            {errors.email?.message ?? 'Unknown error'}
          </p>
        }
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='password'
          type='password'
          className='form-control'
          placeholder='************'
        />
        <label htmlFor='inputPassword'>
        Password
        </label>
        {errors.password !== undefined &&
          <p className='text-danger'>
            {errors.password?.message ?? 'Unknown error'}
          </p>
        }
      </div>
      <div className='mb-3'>
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <button className='w-100 btn btn-lg btn-primary rounded-pill' type='submit'>Submit</button>
    </form>

  return (
    identity.user !== undefined
      ? <AlreadyLoggedIn />
      : identity.provisionalUser
        ? <ProvisionalUser />
        : <Form />
  )
}

export default LoginForm
