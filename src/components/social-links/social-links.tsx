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
  return (
    <div className='row'>
      {data.behance !== null && data.behance !== undefined
        ? <div className='col'>
          <a href={data.behance} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Behance size='2rem' className='icon behance' />
          </a>
        </div>
        : <></>
      }
      {data.deviantart !== null && data.deviantart !== undefined 
        ? <div className='col'>
          <a href={data.deviantart} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Deviantart size='2rem' className='icon deviantart' />
          </a>
        </div>
        : <></>
      }
      {data.discord !== null && data.discord !== undefined
        ? <div className='col'>
          <a href={data.discord} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Discord size='2rem' className='icon discord' />
          </a>
        </div>
        : <></>
      }
      {data.etsy !== null && data.etsy !== undefined
        ? <div className='col'>
          <a href={data.etsy} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Etsy size='2rem' className='icon etsy' />
          </a>
        </div>
        : <></>
      }
      {data.facebook !== null && data.facebook !== undefined
        ? <div className='col'>
          <a href={data.facebook} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Facebook size='2rem' className='icon facebook' />
          </a>
        </div>
        : <></>
      }
      {data.flickr !== null && data.flickr !== undefined
        ? <div className='col'>
          <a href={data.flickr} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Flickr size='2rem' className='icon flickr' />
          </a>
        </div>
        : <></>
      }
      {data.furaffinity !== null && data.furaffinity !== undefined
        ? <div className='col'>
          <a href={data.furaffinity} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Furaffinity size='2rem' className='icon furaffinity' />
          </a>
        </div>
        : <></>
      }
      {data.github !== null && data.github !== undefined
        ? <div className='col'>
          <a href={data.github} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Github size='2rem' className='icon github' />
          </a>
        </div>
        : <></>
      }
      {data.instagram !== null && data.instagram !== undefined
        ? <div className='col'>
          <a href={data.instagram} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Instagram size='2rem' className='icon instagram' />
          </a>
        </div>
        : <></>
      }
      {data.picarto !== null && data.picarto !== undefined
        ? <div className='col'>
          <a href={data.picarto} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <PicartoDotTv size='2rem' className='icon picarto' />
          </a>
        </div>
        : <></>
      }
      {data.pinterest !== null && data.pinterest !== undefined
        ? <div className='col'>
          <a href={data.pinterest} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Pinterest size='2rem' className='icon pinterest' />
          </a>
        </div>
        : <></>
      }
      {data.steam !== null && data.steam !== undefined
        ? <div className='col'>
          <a href={data.steam} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Steam size='2rem' className='icon steam' />
          </a>
        </div>
        : <></>
      }
      {data.telegram !== null && data.telegram !== undefined
        ? <div className='col'>
          <a href={data.telegram} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Telegram size='2rem' className='icon telegram' />
          </a>
        </div>
        : <></>
      }
      {data.tumblr !== null && data.tumblr !== undefined
        ? <div className='col'>
          <a href={data.tumblr} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Tumblr size='2rem' className='icon tumblr' />
          </a>
        </div>
        : <></>
      }
      {data.twitch !== null && data.twitch !== undefined
        ? <div className='col'>
          <a href={data.twitch} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Twitch size='2rem' className='icon twitch' />
          </a>
        </div>
        : <></>
      }
      {data.twitter !== null && data.twitter !== undefined
        ? <div className='col'>
          <a href={data.twitter} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Twitter size='2rem' className='icon twitter' />
          </a>
        </div>
        : <></>
      }
      {data.youtube !== null && data.youtube !== undefined
        ? <div className='col'>
          <a href={data.youtube} target='_blank' rel='noopener noreferrer' className='icon-link'>
            <Youtube size='2rem' className='icon youtube' />
          </a>
        </div>
        : <></>
      }
    </div>
  )
}

export default SocialLinks
