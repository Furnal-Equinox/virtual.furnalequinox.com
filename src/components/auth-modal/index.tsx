import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpInputs, signUpSchema } from '../../utils/form-validators'

import Button from '../button'
import LoginForm from '../login-form'

import Modal from 'react-bootstrap/Modal'

const AuthModal: React.FC = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<SignUpInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(signUpSchema)
  })
  
  const [formError, setFormError] = useState<string | null>(null)
  const [formProcessing, setFormProcessing] = useState<boolean>(false)
  const [forceShowOverlay, setForceShowOverlay] = useState<string | null>(null)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
      <Modal show={forceShowOverlay !== null} onHide={handleClose}>
        {identity.urlToken?.type === 'confirmation' &&
            <>
              <Modal.Header closeButton>
                <Modal.Title>
                  Confirming user...
                </Modal.Title>
              </Modal.Header>
            </>
        }
        {identity.urlToken?.type === 'email_change' && (
          identity.user !== undefined
            ? <>
              <Modal.Header closeButton>
                <Modal.Title>
                      Changing email...
                </Modal.Title>
              </Modal.Header>
            </>
            : <>
              <Modal.Header closeButton>
                <Modal.Title>
                    In order to confirm your email change, you must log in with your prior credentials.
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <LoginForm />
              </Modal.Body>
            </>
        )}
        {forceShowOverlay !== null &&
            <>
              <Modal.Header closeButton>
                <Modal.Title>
                  {forceShowOverlay}
                </Modal.Title>
              </Modal.Header>
            </>
        }
        {identity.urlToken?.type === 'passwordRecovery' &&
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Reset password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
          </>
        }
      </Modal>
      }
    </>
  )
}

export default AuthModal
