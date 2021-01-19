import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { navigate } from 'gatsby'
import { ContactInputs, contactSchema } from '../../utils/form-validators'

const encode = (data) => Object.keys(data)
  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

interface Props {
  navigateTarget?: string
}

const ContactForm: React.FC<Props> = ({ navigateTarget }) => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm<ContactInputs>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(contactSchema)
  })

  const [formError, setFormError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setFormError(null)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: data.name,
        email: data.email,
        message: data.message
      })
    })
      .then(() => {
        setIsSubmitting(false)
        navigateTarget !== undefined && navigate(navigateTarget)
      })
      .catch((error) => {
        setIsSubmitting(false)
        setFormError(error.message)
      })
  }

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
          Don’t fill this out:{' '}
          <input name='bot-field' />
        </label>
      </div>
      <div className='form-floating mb-3'>
        <input
          ref={register}
          name='name'
          type='text' 
          className='form-control'
          placeholder='Your name'
          autoFocus
        />
        <label htmlFor='inputName'>
        Your name
        </label>
        {errors.name !== undefined &&
          <p className='text-danger'>
            {errors.name?.message ?? 'Unknown error'}
          </p>
        }
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
          </p>
        }
      </div>
      <div className='form-floating mb-3'>
        <textarea
          ref={register}
          name='message'
          className='form-control'
          placeholder='Your message'
        />
        <label htmlFor='inputMessage'>
        Your message
        </label>
        {errors.message !== undefined &&
          <p className='text-danger'>
            {errors.message?.message ?? 'Unknown error'}
          </p>
        }
      </div>
      <div className='mb-3'>
        {formError !== null && <p>{`Error: ${formError}`}</p>}
      </div>
      <button className='w-100 btn btn-lg btn-primary rounded-pill' type='submit'>Submit</button>
    </form>

  return <Form />
}

export default ContactForm
