import React, { useEffect, useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import { LoginInputs, loginSchema } from '../../../utils/form-validators'

import {
  Link  
} from '../../index'

interface Props {
  navigateTarget?: string
}

const LoginForm: React.FC<Props> = ({ navigateTarget }) => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<LoginInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(loginSchema)
  })

  const [formError, setFormError] = useState<string | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

  useEffect(() => {
    navigateTarget !== undefined &&
    identity.user !== undefined &&
    navigate(navigateTarget)
  }, [navigateTarget, identity.user])

  const onSubmit = async ({ email, password }: LoginInputs): Promise<void> => {
    setIsLoggingIn(true)
    setFormError(null)

    await identity
      .login({ email: email, password: password })
      .then(() => {
        setIsLoggingIn(false)
        navigateTarget !== undefined && navigate(navigateTarget)
      })
      .catch((error: Error) => {
        setIsLoggingIn(false)
        setFormError(error.message)
      })
  }

  const AlreadyLoggedIn: React.FC = () => 
    <div>
      <p className='h3 mb-3'>You are already logged in!</p>
      <Link to={`/event/`} label='Return to the home page' isFullwidth />
    </div>

  const Spinner: React.FC = () =>
    <>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      />{' '}
      <p className='h2'>Logging in...</p>
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
          id='inputEmail'
          aria-labelledby='inputEmailLabel'
          type='text'
          className='form-control'
          placeholder='Email address'
          autoFocus
        />
        <label id='inputEmailLabel' htmlFor='inputEmail'>
          Your email address
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
          id='inputPassword'
          aria-labelledby='inputPasswordLabel'
          type='password'
          className='form-control'
          placeholder='************'
        />
        <label id='inputPasswordLabel' htmlFor='inputPassword'>
          Your password
        </label>
        {errors.password !== undefined &&
          <p className='text-danger'>
            {errors.password?.message ?? 'Unknown error'}
          </p>}
      </div>
      <div className='mb-3'>
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <button
        className='w-100 btn btn-lg btn-primary rounded-3'
        type='submit'
        disabled={isLoggingIn}
      >
        {!isLoggingIn
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

export default LoginForm
