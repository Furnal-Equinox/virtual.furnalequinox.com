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
            <a
              title='Behance. This link will open in a new tab.'
              href={data.behance as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Behance size='32px' className='icon behance' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.deviantart) &&
          <div className='col'>
            <a
              title='DeviantArt. This link will open in a new tab.'
              href={data.deviantart as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Deviantart size='32px' className='icon deviantart' />
            </a>
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
            <a
              title='Etsy. This link will open in a new tab.'
              href={data.etsy as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Etsy size='32px' className='icon etsy' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.facebook) &&
          <div className='col'>
            <a
              title='Facebook. This link will open in a new tab.'
              href={data.facebook as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Facebook size='32px' className='icon facebook' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.flickr) &&
          <div className='col'>
            <a
              title='Flickr. This link will open in a new tab.'
              href={data.flickr as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Flickr size='32px' className='icon flickr' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.furaffinity) &&
          <div className='col'>
            <a
              title='FurAffinity. This link will open in a new tab.'
              href={data.furaffinity as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Furaffinity size='32px' className='icon furaffinity' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.github) &&
          <div className='col'>
            <a
              title='GitHub. This link will open in a new tab.'
              href={data.github as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Github size='32px' className='icon github' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.instagram) &&
          <div className='col'>
            <a
              title='Instagram. This link will open in a new tab.'
              href={data.instagram as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Instagram size='32px' className='icon instagram' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.other) &&
          <div className='col'>
            <a
              title='Other Social Media Link. This link will open in a new tab.'
              href={data.other as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <FontAwesomeIcon icon='globe' size='2x' className='icon' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.patreon) &&
          <div className='col'>
            <a
              title='Patreon. This link will open in a new tab.'
              href={data.patreon as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Patreon size='32px' className='icon patreon' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.picarto) &&
          <div className='col'>
            <a
              title='Picarto.tv. This link will open in a new tab.'
              href={data.picarto as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <PicartoDotTv size='32px' className='icon picarto' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.pinterest) &&
          <div className='col'>
            <a
              title='Pinterest. This link will open in a new tab.'
              href={data.pinterest as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Pinterest size='32px' className='icon pinterest' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.steam) &&
          <div className='col'>
            <a
              title='Steam. This link will open in a new tab.'
              href={data.steam as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Steam size='32px' className='icon steam' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.telegram) &&
          <div className='col'>
            <a
              title='Telegram. This link will open in a new tab.'
              href={data.telegram as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Telegram size='32px' className='icon telegram' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.tiktok) &&
          <div className='col'>
            <a
              title='Tiktok. This link will open in a new tab.'
              href={data.tiktok as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Tiktok size='32px' className='icon tiktok' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.tumblr) &&
          <div className='col'>
            <a
              title='Tumblr. This link will open in a new tab.'
              href={data.tumblr as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Tumblr size='32px' className='icon tumblr' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.twitch) &&
          <div className='col'>
            <a
              title='Twitch. This link will open in a new tab.'
              href={data.twitch as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Twitch size='32px' className='icon twitch' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.twitter) &&
          <div className='col'>
            <a
              title='Twitter. This link will open in a new tab.'
              href={data.twitter as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Twitter size='32px' className='icon twitter' />
            </a>
          </div>
      }
      {
        !isStrEmpty(data.youtube) &&
          <div className='col'>
            <a
              title='YouTube. This link will open in a new tab.'
              href={data.youtube as string}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              tabIndex={0}
            >
              <Youtube size='32px' className='icon youtube' />
            </a>
          </div>
      }
    </div>
  )
}

export default SocialLinks
