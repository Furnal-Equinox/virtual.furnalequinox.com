import React, { useEffect, useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import * as Yup from 'yup'

interface Inputs {
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

// TODO: credit regex found here: https://stackoverflow.com/a/21456918

const schema = Yup.object().shape({
  user_metadata: Yup.object().shape({
    full_name: Yup.string()
      .required('Please enter a name.')
      .min(1, 'Please enter at least one character for your name.')
  }),
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

const SignUpForm: React.FC = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const [formError, setFormError] = useState<string | null>(null)
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false)

  const onSubmit = async (data) => {
    setIsSigningUp(true)
    setFormError(null)

    await identity
      .signup(data)
      .then(() => {
        setIsSigningUp(false)
        navigate('/')
      })
      .catch((error) => {
        setIsSigningUp(false)
        setFormError(error.message)
      })
  }

  const AlreadyLoggedIn: React.FC = () =>
    <>
      <p className='h2'>
        You are already logged in!
      </p>
    </>

  const Form: React.FC = () =>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='h2'>
      Please sign up here.
      </p>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='user_metadata.full_name'
          className='form-control'
          placeholder='Your name'
          autoFocus
        />
        <label htmlFor='inputUsername'>
        Your name
        </label>
        {errors.user_metadata?.full_name !== undefined &&
          <p className='text-danger'>
            {errors.user_metadata?.full_name.message ?? 'Unknown error'}
          </p>
        }
        <div id='nameHelp' className='form-text'>
          Your name must be at least one character long.
        </div>
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='email' 
          className='form-control'
          placeholder='Email address'
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
          className='form-control'
          placeholder='Password'
        />
        <label htmlFor='inputPassword'>
        Password
        </label>
        <div id='passwordHelp' className='form-text'>
          Your password must:
          <ul>
            <li>
              be at least 8 characters long
            </li>
            <li>
              be no longer than 32 characters long
            </li>
            <li>
              have at least one lowercase letter
            </li>
            <li>
              have at least one uppercase letter
            </li>
            <li>
              have at least one number
            </li>
          </ul>
        </div>
        {errors.password !== undefined &&
          <p className='text-danger'>
            {errors.password?.message ?? 'Unknown error'}
          </p>
        }
        <p>
          Having trouble making a password?<br />
          Try this free password generator website!{' '}
          <a
            href='https://passwordsgenerator.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            passwordsgenerator.net
          </a>
        </p>
      </div>
      <div className='mb-3'>
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <button className='w-100 btn btn-lg btn-primary rounded-pill' type='submit'>Submit</button>
    </form>

  return (
    identity.user !== undefined
      ? <AlreadyLoggedIn />
      : <Form />
  )
}

export default SignUpForm