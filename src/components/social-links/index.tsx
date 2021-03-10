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
  Patreon,
  PicartoDotTv,
  Pinterest,
  Steam,
  Telegram,
  Tiktok,
  Tumblr,
  Twitch,
  Twitter,
  Youtube
} from '@icons-pack/react-simple-icons'
import { MarkdownRemarkFrontmatterSocial } from '../../../types/graphql-types'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { isStrEmpty } from '../../utils/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  | 'other'
  | 'patreon'
  | 'picarto'
  | 'pinterest'
  | 'steam'
  | 'telegram'
  | 'tiktok'
  | 'tumblr'
  | 'twitch'
  | 'twitter'
  | 'youtube'>
}

const SocialLinks: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className='row py-3'>
      {
        !isStrEmpty(data.behance) &&
          <div className='col'>
            <OutboundLink title='Behance' href={data.behance as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Behance size='32px' className='icon behance' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.deviantart) &&
          <div className='col'>
            <OutboundLink title='DeviantArt' href={data.deviantart as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Deviantart size='32px' className='icon deviantart' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.discord) &&
          <div className='col'>
            <OutboundLink title='Discord' href={data.discord as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Discord size='32px' className='icon discord' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.etsy) &&
          <div className='col'>
            <OutboundLink title='Etsy' href={data.etsy as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Etsy size='32px' className='icon etsy' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.facebook) &&
          <div className='col'>
            <OutboundLink title='Facebook' href={data.facebook as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Facebook size='32px' className='icon facebook' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.flickr) &&
          <div className='col'>
            <OutboundLink title='Flickr' href={data.flickr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Flickr size='32px' className='icon flickr' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.furaffinity) &&
          <div className='col'>
            <OutboundLink title='FurAffinity' href={data.furaffinity as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Furaffinity size='32px' className='icon furaffinity' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.github) &&
          <div className='col'>
            <OutboundLink title='GitHub' href={data.github as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Github size='32px' className='icon github' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.instagram) &&
          <div className='col'>
            <OutboundLink title='Instagram' href={data.instagram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Instagram size='32px' className='icon instagram' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.other) &&
          <div className='col'>
            <OutboundLink title='Other Social Media Link' href={data.other as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <FontAwesomeIcon icon='globe' size='2x' className='icon' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.patreon) &&
          <div className='col'>
            <OutboundLink title='Picarto.tv' href={data.patreon as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Patreon size='32px' className='icon patreon' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.picarto) &&
          <div className='col'>
            <OutboundLink title='Picarto.tv' href={data.picarto as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <PicartoDotTv size='32px' className='icon picarto' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.pinterest) &&
          <div className='col'>
            <OutboundLink title='Pinterest' href={data.pinterest as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Pinterest size='32px' className='icon pinterest' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.steam) &&
          <div className='col'>
            <OutboundLink title='Steam' href={data.steam as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Steam size='32px' className='icon steam' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.telegram) &&
          <div className='col'>
            <OutboundLink title='Telegram' href={data.telegram as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Telegram size='32px' className='icon telegram' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.tiktok) &&
          <div className='col'>
            <OutboundLink title='Tiktok' href={data.tiktok as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Tiktok size='32px' className='icon tiktok' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.tumblr) &&
          <div className='col'>
            <OutboundLink title='Tumblr' href={data.tumblr as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Tumblr size='32px' className='icon tumblr' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.twitch) &&
          <div className='col'>
            <OutboundLink title='Twitch' href={data.twitch as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Twitch size='32px' className='icon twitch' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.twitter) &&
          <div className='col'>
            <OutboundLink title='YouTube' href={data.twitter as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Twitter size='32px' className='icon twitter' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.youtube) &&
          <div className='col'>
            <OutboundLink title='YouTube' href={data.youtube as string} target='_blank' rel='noopener noreferrer' className='icon-link'>
              <Youtube size='32px' className='icon youtube' />
            </OutboundLink>
          </div>
      }
    </div>
  )
}

export default SocialLinks
