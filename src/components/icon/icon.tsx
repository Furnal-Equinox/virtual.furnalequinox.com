import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'

import {
  faBehance,
  faDeviantart,
  faDiscord,
  faEtsy,
  faFacebookF,
  faGithub,
  faHtml5,
  faInstagram,
  faPinterestP,
  faSteamSymbol,
  faTelegramPlane,
  faTumblr,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faBehance,
  faDeviantart,
  faDiscord,
  faEtsy,
  faFacebookF,
  faGithub,
  faInstagram,
  faPinterestP,
  faSteamSymbol,
  faTelegramPlane,
  faTumblr,
  faTwitch,
  faTwitter,
  faYoutube
)

interface Props {
  name: 'behance' 
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
  title: string
}

const Icon: React.FC<Props> = ({ name, title }: Props) => (
  <div className='icon' title={title}>
    <FontAwesomeIcon icon={['fab', name as IconName]} />
  </div>
)

export default Icon
