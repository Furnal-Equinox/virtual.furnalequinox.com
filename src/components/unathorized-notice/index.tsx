import React from 'react'

import Section from '../../layouts/section'
import { TextCard } from '../cards'

const UnauthorizedNotice: React.FC = () =>
  <Section isContainer isTextCenter pos='middle'>
    <TextCard>
      <div className='row'>
        <div className='col mx-auto'>
          <h1>Unauthorized</h1>
          <img
            src='https://http.cat/401'
            className='rounded-3'
            alt='Image of a cat outside a glass door with a sign that says "no cats allowed"'
          />
          <p className='lead'>
            Oops! You don't have permission to view this page.<br />
            Please check your account and try changing your ticket.<br />
            If you think you've found an error, email{' '}
            <a
              title="Ardal's email address"
              href='mailto:ardal@furnalequinox.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ardal
            </a>.
          </p>
        </div>
      </div>
    </TextCard>
  </Section>

export default UnauthorizedNotice
