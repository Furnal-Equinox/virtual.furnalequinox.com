import React, { useState } from 'react'
import fetch from 'node-fetch'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import { ContactInputs, contactSchema } from '../../../utils/form-validators'

const encode = (data: Record<string, string>): string => Object.keys(data)
  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

interface Props {
  navigateTarget?: string
}

const ContactForm: React.FC<Props> = ({ navigateTarget }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState
  } = useForm<ContactInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(contactSchema)
  })

  const {
    isSubmitting,
    isSubmitSuccessful
  } = formState

  const [formError, setFormError] = useState<string | null>(null)

  const onSubmit = async ({ name, email, message }: ContactInputs): Promise<void> => {
    setFormError(null)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name,
        email: email,
        message: message
      })
    })
      .then(() => {
        navigateTarget !== undefined && navigate(navigateTarget)
      })
      .catch((error: Error) => {
        setFormError(error.message)
      })
  }

  const Spinner: React.FC = () =>
    <>
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      />{' '}
      {"Submitting..."}
    </>

  const Form: React.FC = () =>
    <form
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type='hidden' name='form-name' value='contact' />
      <div hidden>
        <label>
          {"Don’t fill this out:"}{' '}
          <input name='bot-field' />
        </label>
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='name'
          id='inputName'
          aria-labelledby='inputNameLabel'
          type='text'
          className={[
            'form-control',
            errors.message !== undefined ? 'is-invalid' : null
          ].join(' ')}
          placeholder='Your name'
          autoFocus
        />
        <label id='inputNameLabel' htmlFor='inputName'>
          {"Your name"}
        </label>
        {errors.name !== undefined &&
          <p className='text-danger'>
            {errors.name?.message ?? 'Unknown error'}
          </p>}
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='email'
          id='inputEmail'
          aria-labelledby='inputEmailLabel'
          type='text'
          className={[
            'form-control',
            errors.message !== undefined ? 'is-invalid' : null
          ].join(' ')}
          placeholder='Email address'
        />
        <label id='inputEmailLabel' htmlFor='inputEmail'>
          {"Your email address"}
        </label>
        {errors.email !== undefined &&
          <p className='text-danger'>
            {errors.email?.message ?? 'Unknown error'}
          </p>}
      </div>
      <div className='form-floating mb-3'>
        <textarea
          ref={register}
          name='message'
          id='inputMessage'
          aria-labelledby='inputMessageLabel'
          className={[
            'form-control',
            errors.message !== undefined ? 'is-invalid' : null
          ].join(' ')}
          style={{ height: '100px' }}
          placeholder='Your message'
        />
        <label id='inputMessageLabel' htmlFor='inputMessage'>
          {"Your message"}
        </label>
        {errors.message !== undefined &&
          <p className='text-danger'>
            {errors.message?.message ?? 'Unknown error'}
          </p>}
      </div>
      <div className='mb-3'>
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <div className='mb-3'>
        <button
          className='w-100 btn btn-lg btn-primary rounded-3'
          type='submit'
          disabled={isSubmitting}
        >
          {!isSubmitting
            ? 'Submit'
            : <Spinner />}
        </button>
      </div>
      {isSubmitSuccessful &&
        <div className='mb-3'>
          <p className='lead'>
            {"Thank you for your message! Please keep an eye on your email -"}{' '}
            {"we'll reply to you as soon as we can."}
          </p>
        </div>}
    </form>

  return <Form />
}

export default ContactForm
