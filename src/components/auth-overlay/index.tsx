import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  PasswordRecoveryAndInvitationInputs,
  passwordRecoveryAndInvitationSchema
} from '../../utils/form-validators'

import Modal from 'react-bootstrap/Modal'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const AuthOverlay: React.FC = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<PasswordRecoveryAndInvitationInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(passwordRecoveryAndInvitationSchema)
  })

  const [show, setShow] = useState<boolean>(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formProcessing, setFormProcessing] = useState<boolean>(false)

  useEffect(() => {
    if (identity.urlToken !== undefined) {
      setShow(true)
    }
  }, [identity.urlToken])

  const onSubmit = async (data: PasswordRecoveryAndInvitationInputs): Promise<void> => {
    setFormProcessing(true)
    setFormError(null)

    await identity.completeUrlTokenTwoStep(data)
      .catch((_err: Error) => setFormError('Having an issue.. please try later'))

    setFormProcessing(false)
  }

  const handleHide = (): void => setShow(false)

  const Spinner: React.FC = () =>
    <>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      />{' '}
      <p className='h2'>Logging in...</p>
    </>

  const PasswordForm: React.FC = () =>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='password'
          id='inputPassword'
          aria-labelledby='inputPasswordLabel'
          aria-describedby='passwordHelp'
          type='password'
          className='form-control'
          placeholder='************'
        />
        <label id='inputPasswordLabel' htmlFor='inputPassword'>
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
          </p>}
        <p>
          Having trouble making a password?
          <br />
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
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <button
        className='w-100 btn btn-lg btn-primary rounded-3'
        type='submit'
        disabled={formProcessing}
      >
        {!formProcessing
          ? 'Submit'
          : <Spinner />}
      </button>
    </form>

  return (
    <>
      {(identity.urlToken?.type === 'passwordRecovery' || identity.urlToken?.type === 'invite') &&
        <Modal
          show={show}
          onHide={handleHide}
          centered
          backdrop='static'
          aria-labelledby='modal-title'
        >
          <Modal.Header>
            <Modal.Title id='modal-title'>
              {identity.urlToken?.type === 'passwordRecovery' && "Let's reset your password."}
              {identity.urlToken?.type === 'invite' && "Let's finish setting up your account."}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center px-3'>
            <PasswordForm />
          </Modal.Body>
        </Modal>}
    </>
  )
}

export default AuthOverlay
