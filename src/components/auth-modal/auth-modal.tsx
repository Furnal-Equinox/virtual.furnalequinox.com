import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Button from '../button/button'
import LoginForm from '../login-form/login-form'

interface Inputs {
  user_metadata: {
    full_name: string
  }
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
  password: Yup.string()
    .required('Please enter a password.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/gm, 
      'Your password does not meet the requirements.'
    )
    .notOneOf(blacklistedPasswords, 'Please choose a different password.')
})

const AuthModal: React.FC = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const [formError, setFormError] = useState<string | null>(null)
  const [formProcessing, setFormProcessing] = useState<boolean>(false)
  const [forceShowOverlay, setForceShowOverlay] = useState<string | null>(null)

  useEffect(() => {
    if (identity.provisionalUser !== undefined) {
      setForceShowOverlay('Please check your email for an account confirmation email!')
      const timeoutId = setTimeout(() => setForceShowOverlay(null), 5000)
      return () => clearTimeout(timeoutId)
    }
  }, [identity.provisionalUser])

  const onSubmit = async (data) => {
    setFormProcessing(true)
    setFormError(null)

    await identity.completeUrlTokenTwoStep(data)
      .catch(_ => setFormError('Oops! I\'m having trouble. Please try again later!'))

    setFormProcessing(false)
  }

  return (
    <>
      {(identity.urlToken !== undefined || forceShowOverlay !== null) &&
      <div
        className='modal fade' 
        id='exampleModal'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          {identity.urlToken?.type === 'confirmation' &&
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Confirming user...
                </h5>
                <Button
                  isClose
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
            </div>
          }
          {identity.urlToken?.type === 'email_change' && (
            identity.user !== undefined
              ? <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                      Changing email...
                  </h5>
                  <Button
                    isClose
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  />
                </div>
              </div>
              : <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    In order to confirm your email change, you must log in with your prior credentials.
                  </h5>
                  <Button
                    isClose
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  />
                </div>
                <div className='modal-body'>
                  <LoginForm />
                </div>
              </div>
          )}
          {forceShowOverlay !== null &&
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  {forceShowOverlay}
                </h5>
                <Button
                  isClose
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
            </div>
          }
          {identity.urlToken?.type === 'passwordRecovery' &&
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Reset password
              </h5>
              <Button
                isClose
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {identity.urlToken?.type === 'invite' &&
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
                      </p>
                    }
                    <div id='nameHelp' className='form-text'>
                      Your name must be at least one character long.
                    </div>
                  </div>
                }
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
                <Button 
                  label='Set New Password'
                  type='submit'
                  isFullwidth
                  disabled={formProcessing}
                />
              </form>
            </div>
          </div>
          }
        </div>
      </div>
      }
    </>
  )
}

export default AuthModal
