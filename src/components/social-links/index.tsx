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

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { isStrEmpty } from '../../utils/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface Props {
  data: GatsbyTypes.MarkdownRemarkFrontmatterSocial
}

const SocialLinks: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className='row py-3'>
      {
        !isStrEmpty(data.behance) &&
          <div className='col'>
            <OutboundLink title='Behance. This link will open in a new tab.' href={data.behance as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Behance size='32px' className='icon behance' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.deviantart) &&
          <div className='col'>
            <OutboundLink title='DeviantArt. This link will open in a new tab.' href={data.deviantart as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Deviantart size='32px' className='icon deviantart' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.discord) &&
          <div className='col'>
            <div title='Discord Handle. This link will open in a new tab.' tabIndex={0}>
              <Discord size='32px' className='icon discord' />{' '}
              <p title='Discord Handle'>{data.discord as string}</p>
            </div>
          </div>
      }
      {
        !isStrEmpty(data.etsy) &&
          <div className='col'>
            <OutboundLink title='Etsy. This link will open in a new tab.' href={data.etsy as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Etsy size='32px' className='icon etsy' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.facebook) &&
          <div className='col'>
            <OutboundLink title='Facebook. This link will open in a new tab.' href={data.facebook as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Facebook size='32px' className='icon facebook' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.flickr) &&
          <div className='col'>
            <OutboundLink title='Flickr. This link will open in a new tab.' href={data.flickr as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Flickr size='32px' className='icon flickr' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.furaffinity) &&
          <div className='col'>
            <OutboundLink title='FurAffinity. This link will open in a new tab.' href={data.furaffinity as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Furaffinity size='32px' className='icon furaffinity' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.github) &&
          <div className='col'>
            <OutboundLink title='GitHub. This link will open in a new tab.' href={data.github as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Github size='32px' className='icon github' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.instagram) &&
          <div className='col'>
            <OutboundLink title='Instagram. This link will open in a new tab.' href={data.instagram as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Instagram size='32px' className='icon instagram' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.other) &&
          <div className='col'>
            <OutboundLink title='Other Social Media Link. This link will open in a new tab.' href={data.other as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <FontAwesomeIcon icon='globe' size='2x' className='icon' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.patreon) &&
          <div className='col'>
            <OutboundLink title='Patreon. This link will open in a new tab.' href={data.patreon as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Patreon size='32px' className='icon patreon' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.picarto) &&
          <div className='col'>
            <OutboundLink title='Picarto.tv. This link will open in a new tab.' href={data.picarto as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <PicartoDotTv size='32px' className='icon picarto' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.pinterest) &&
          <div className='col'>
            <OutboundLink title='Pinterest. This link will open in a new tab.' href={data.pinterest as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Pinterest size='32px' className='icon pinterest' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.steam) &&
          <div className='col'>
            <OutboundLink title='Steam. This link will open in a new tab.' href={data.steam as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Steam size='32px' className='icon steam' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.telegram) &&
          <div className='col'>
            <OutboundLink title='Telegram. This link will open in a new tab.' href={data.telegram as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Telegram size='32px' className='icon telegram' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.tiktok) &&
          <div className='col'>
            <OutboundLink title='Tiktok. This link will open in a new tab.' href={data.tiktok as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Tiktok size='32px' className='icon tiktok' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.tumblr) &&
          <div className='col'>
            <OutboundLink title='Tumblr. This link will open in a new tab.' href={data.tumblr as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Tumblr size='32px' className='icon tumblr' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.twitch) &&
          <div className='col'>
            <OutboundLink title='Twitch. This link will open in a new tab.' href={data.twitch as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Twitch size='32px' className='icon twitch' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.twitter) &&
          <div className='col'>
            <OutboundLink title='Twitter. This link will open in a new tab.' href={data.twitter as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Twitter size='32px' className='icon twitter' />
            </OutboundLink>
          </div>
      }
      {
        !isStrEmpty(data.youtube) &&
          <div className='col'>
            <OutboundLink title='YouTube. This link will open in a new tab.' href={data.youtube as string} target='_blank' rel='noopener noreferrer' className='icon-link' tabIndex={0}>
              <Youtube size='32px' className='icon youtube' />
            </OutboundLink>
          </div>
      }
    </div>
  )
}

export default SocialLinks
