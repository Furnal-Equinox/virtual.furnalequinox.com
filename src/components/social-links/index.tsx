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

import { isStrEmpty } from '../../utils/tools'

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
      {
        !isStrEmpty(data.behance) &&
          <div className='col'>
            <a href={data.behance as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Behance size='32px' className='icon behance' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.deviantart) &&
          <div className='col'>
            <a href={data.deviantart as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Deviantart size='32px' className='icon deviantart' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.discord) &&
          <div className='col'>
            <a href={data.discord as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Discord size='32px' className='icon discord' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.etsy) &&
          <div className='col'>
            <a href={data.etsy as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Etsy size='32px' className='icon etsy' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.facebook) &&
          <div className='col'>
            <a href={data.facebook as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Facebook size='32px' className='icon facebook' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.flickr) &&
          <div className='col'>
            <a href={data.flickr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Flickr size='32px' className='icon flickr' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.furaffinity) &&
          <div className='col'>
            <a href={data.furaffinity as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Furaffinity size='32px' className='icon furaffinity' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.github) &&
          <div className='col'>
            <a href={data.github as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Github size='32px' className='icon github' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.instagram) &&
          <div className='col'>
            <a href={data.instagram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Instagram size='32px' className='icon instagram' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.picarto) &&
          <div className='col'>
            <a href={data.picarto as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <PicartoDotTv size='32px' className='icon picarto' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.pinterest) &&
          <div className='col'>
            <a href={data.pinterest as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Pinterest size='32px' className='icon pinterest' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.steam) &&
          <div className='col'>
            <a href={data.steam as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Steam size='32px' className='icon steam' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.telegram) &&
          <div className='col'>
            <a href={data.telegram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Telegram size='32px' className='icon telegram' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.tumblr) &&
          <div className='col'>
            <a href={data.tumblr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Tumblr size='32px' className='icon tumblr' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.twitch) &&
          <div className='col'>
            <a href={data.twitch as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Twitch size='32px' className='icon twitch' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.twitter) &&
          <div className='col'>
            <a href={data.twitter as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Twitter size='32px' className='icon twitter' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.youtube) &&
          <div className='col'>
            <a href={data.youtube as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Youtube size='32px' className='icon youtube' />
            </a>
          </div>
      }
    </div>
  )
}

export default SocialLinks
