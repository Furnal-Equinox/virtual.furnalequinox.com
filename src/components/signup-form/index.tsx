import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import { SignUpInputs, signUpSchema } from '../../utils/form-validators'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const SignUpForm: React.FC = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<SignUpInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(signUpSchema)
  })

  const [formError, setFormError] = useState<string | null>(null)
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false)

  const onSubmit = async ({ email, password, user_metadata }: SignUpInputs): Promise<void> => {
    setIsSigningUp(true)
    setFormError(null)

    await identity
      .signup(email, password, user_metadata)
      .then(() => {
        setIsSigningUp(false)

        // I am using the void operator here to consume the Promise<void> navigate() returns.
        // eslint-disable-next-line no-void
        void navigate('/')
      })
      .catch((error: Error) => {
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

  const Spinner: React.FC = () =>
    <>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      />{' '}
      Signing up...
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
          type='text'
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
          </p>}
        <div id='nameHelp' className='form-text'>
          Name must be at least one character long.
        </div>
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='email'
          type='text'
          className='form-control'
          placeholder='Email address'
        />
        <label htmlFor='inputEmail'>
          Email address
        </label>
        {errors.email !== undefined &&
          <p className='text-danger'>
            {errors.email?.message ?? 'Unknown error'}
          </p>}
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
          </p>}
        <div id='passwordHelp' className='form-text'>
          Password must:
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
        <p>
          Having trouble making a password?<br />
          Try this free password generator website!{' '}
          <OutboundLink
            title='passwordsgenerator.net'
            href='https://passwordsgenerator.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            passwordsgenerator.net
          </OutboundLink>
        </p>
      </div>
      <div className='mb-3'>
        {formError !== null &&
          <p className='text-danger'>
            {`Error: ${formError}`}
          </p>}
      </div>
      <button
        className='w-100 btn btn-lg btn-primary rounded-pill'
        type='submit'
        disabled={isSigningUp}
      >
        {!isSigningUp
          ? 'Submit'
          : <Spinner />}
      </button>
    </form>

  return (
    identity.user !== undefined
      ? <AlreadyLoggedIn />
      : <Form />
  )
}

export default SignUpForm
