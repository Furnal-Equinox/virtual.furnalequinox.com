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

export interface Props {
  data: Array<Maybe<SocialLink>>
}

const SocialLinks: React.FC<Props> = ({ data }: Props) => {
  /* Oh, how I wish TypeScript had a match expression! */
  const matchIconName = ({ name }: SocialLink) => {
    switch (name) {
      case 'behance': return <Behance size='2rem' className='icon behance' />
      case 'deviantart': return <Deviantart size='2rem' className='icon deviantart' />
      case 'discord': return <Discord size='2rem' className='icon discord' />
      case 'etsy': return <Etsy size='2rem' className='icon etsy' />
      case 'facebook': return <Facebook size='2rem' className='icon facebook' />
      case 'furaffinity': return <Furaffinity size='2rem' className='icon furaffinity' />
      case 'github': return <Github size='2rem' className='icon github' />
      case 'instagram': return <Instagram size='2rem' className='icon instagram' />
      case 'picarto': return <PicartoDotTv size='2rem' className='icon picarto' />
      case 'pinterest': return <Pinterest size='2rem' className='icon pinterest' />
      case 'steam': return <Steam size='2rem' className='icon steam' />
      case 'telegram': return <Telegram size='2rem' className='icon telegram' />
      case 'tumblr': return <Tumblr size='2rem' className='icon tumblr' />
      case 'twitch': return <Twitch size='2rem' className='icon twitch' />
      case 'twitter': return <Twitter size='2rem' className='icon twitter' />
      case 'youtube': return <Youtube size='2rem' className='icon youtube' />
      // Reason: this case is meant to be a bottom / impossible case
      // and is here only to force TS to exhaustively check all cases of the enum
      // such that this behaves like an exhaustive match expression in an ML language
      // like OCaml, Haskell, or Rust.
      // If a case is not covered, this bottom case will trigger a type error indicating that
      // not all cases have been covered.
      // eslint-disable-next-line no-case-declarations
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
