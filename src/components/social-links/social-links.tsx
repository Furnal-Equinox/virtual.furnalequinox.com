import React from 'react'
import { Maybe, Just, Nothing } from 'purify-ts'
import './style.scss'

import {
  Behance,
  Deviantart,
  Discord,
  Etsy, 
  Facebook, 
  Furaffinity,
  Github,
  Instagram,
  PicartoDotTv,
  Pinterest,
  Steam,
  Telegram,
  Tumblr,
  Twitch,
  Twitter,
  Youtube
} from '@icons-pack/react-simple-icons'

export interface SocialLink {
  name: 
    'behance' 
  | 'deviantart' 
  | 'discord' 
  | 'etsy' 
  | 'facebook' 
  | 'furaffinity'
  | 'github'
  | 'instagram'
  | 'picarto'
  | 'pinterest'
  | 'steam'
  | 'telegram'
  | 'tumblr'
  | 'twitch'
  | 'twitter'
  | 'youtube'
  url: string
}

interface Props {
  data: Maybe<SocialLink>[]
}

const SocialLinks: React.FC<Props> = ({ data }: Props) => {
  /* Oh, how I wish TypeScript had a match expression! */
  const matchIconName = ({ name }: SocialLink) => {
    switch (name) {
      case 'behance': return <Behance size='3rem' className='icon behance' />
      case 'deviantart': return <Deviantart size='3rem' className='icon deviantart' />
      case 'discord': return <Discord size='3rem' className='icon discord' />
      case 'etsy': return <Etsy size='3rem' className='icon etsy' />
      case 'facebook': return <Facebook size='3rem' className='icon facebook' />
      case 'furaffinity': return <Furaffinity size='3rem' className='icon furaffinity' />
      case 'github': return <Github size='3rem' className='icon github' />
      case 'instagram': return <Instagram size='3rem' className='icon instagram' />
      case 'picarto': return <PicartoDotTv size='3rem' className='icon picarto' />
      case 'pinterest': return <Pinterest size='3rem' className='icon pinterest' />
      case 'steam': return <Steam size='3rem' className='icon steam' />
      case 'telegram': return <Telegram size='3rem' className='icon telegram' />
      case 'tumblr': return <Tumblr size='3rem' className='icon tumblr' />
      case 'twitch': return <Twitch size='3rem' className='icon twitch' />
      case 'twitter': return <Twitter size='3rem' className='icon twitter' />
      case 'youtube': return <Youtube size='3rem' className='icon youtube' />
      default: const _checkExhaustive: never = name 
    }
  }

  return (
    <div className='row'>
      {data.map(elem => 
        elem.caseOf({
          Just: x => (
            <div className='col'>
              <a href={x.url} target='_blank' rel='noopener noreferrer' className='icon-link'>
              {matchIconName(x)}
              </a>
            </div>
          ),
          Nothing: () => null
        })  
      )}
    </div>
  )
}

export default SocialLinks