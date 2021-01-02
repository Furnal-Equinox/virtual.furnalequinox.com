import React from 'react'
import './style.scss'

import {
  Behance,
  Deviantart,
  Discord,
  Etsy, 
  Facebook,
  Flickr,
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
import { MarkdownRemarkFrontmatterSocial } from '../../../types/graphql-types'

export interface Props {
  data: Pick<MarkdownRemarkFrontmatterSocial, 
  'behance' 
  | 'deviantart' 
  | 'discord' 
  | 'etsy' 
  | 'facebook'
  | 'flickr' 
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
  | 'youtube'>
}

const SocialLinks: React.FC<Props> = ({ data }: Props) => {
  const isLinkEmpty = (socialLink: string | null | undefined): boolean => 
    socialLink === undefined || socialLink === null || socialLink === ''
  
  return (
    <div className='row'>
      {!isLinkEmpty(data.behance)
        ? <div className='col'>
          <a href={data.behance as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Behance size='2rem' className='icon behance' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.deviantart)
        ? <div className='col'>
          <a href={data.deviantart as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Deviantart size='2rem' className='icon deviantart' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.discord)
        ? <div className='col'>
          <a href={data.discord as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Discord size='2rem' className='icon discord' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.etsy)
        ? <div className='col'>
          <a href={data.etsy as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Etsy size='2rem' className='icon etsy' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.facebook)
        ? <div className='col'>
          <a href={data.facebook as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Facebook size='2rem' className='icon facebook' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.flickr)
        ? <div className='col'>
          <a href={data.flickr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Flickr size='2rem' className='icon flickr' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.furaffinity)
        ? <div className='col'>
          <a href={data.furaffinity as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Furaffinity size='2rem' className='icon furaffinity' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.github)
        ? <div className='col'>
          <a href={data.github} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Github size='2rem' className='icon github' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.instagram)
        ? <div className='col'>
          <a href={data.instagram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Instagram size='2rem' className='icon instagram' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.picarto)
        ? <div className='col'>
          <a href={data.picarto} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <PicartoDotTv size='2rem' className='icon picarto' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.pinterest)
        ? <div className='col'>
          <a href={data.pinterest as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Pinterest size='2rem' className='icon pinterest' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.steam)
        ? <div className='col'>
          <a href={data.steam as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Steam size='2rem' className='icon steam' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.telegram)
        ? <div className='col'>
          <a href={data.telegram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Telegram size='2rem' className='icon telegram' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.tumblr)
        ? <div className='col'>
          <a href={data.tumblr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Tumblr size='2rem' className='icon tumblr' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.twitch)
        ? <div className='col'>
          <a href={data.twitch} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Twitch size='2rem' className='icon twitch' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.twitter)
        ? <div className='col'>
          <a href={data.twitter as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Twitter size='2rem' className='icon twitter' />
          </a>
        </div>
        : <></>
      }
      {!isLinkEmpty(data.youtube)
        ? <div className='col'>
          <a href={data.youtube as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Youtube size='2rem' className='icon youtube' />
          </a>
        </div>
        : <></>
      }
    </div>
  )
}

export default SocialLinks
