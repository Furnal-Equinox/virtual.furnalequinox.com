import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../site-config'

import {
  Jumbotron,
  Meta,
  TextCard
} from '../components'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.InfoQueryQuery
}

const Info: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const staff = data?.remark?.frontmatter?.staff

  return (
    <Event location={location}>
      <Helmet title={`Info | ${config.siteTitle}`} />
      <Meta customDescription='Information' />
      <div>
        <Jumbotron title='Info' subtitle='' />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>{"Our Charity"}</h1>
                <h2>{"Hobbitstee Wildlife Refuge"}</h2>
                <p className='py-3'>
                  {"This year’s charity is none other than Hobbitstee Wildlife Refuge!"}
                </p>
                <p className='pb-3'>
                  {"Based in Jarvis, Ontario, Hobbitstee is an entirely volunteer-run wildlife rescue"}{' '}
                  {"that ranges all over southwestern Ontario."}{' '}
                  {"If an animal lives outdoors and needs help, Hobbitstee has an army of volunteers"}{' '}
                  {"to go and rescue them. Like any non-profit, they always have resources they need,"}{' '}
                  {"and your donations this year will help fund things like a portable IV pump,"}{' '}
                  {"an expanded raptor enclosure (no, not dinosaurs!) and a permanent beaver habitat."}{' '}
                  {"For more information, follow them on Facebook or visit their website to learn more!"}
                </p>
                <a
                  title={"Link to Hobbitstee Wildlife Refuge's website. This link will open in a new tab."}
                  href='http://www.hobbitstee.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary btn-lg rounded-3'
                >
                  {"SUPPORT"}
                </a>
              </div>
            </div>
          </TextCard>
        </Section>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>{"Affiliate Canadian Conventions"}</h1>
                <div className='container'>
                  <div className='row py-3'>
                    <div className='col'>
                      <a
                        title={"Link to Vancoufur's website. This link will open in a new tab."}
                        href='https://vancoufur.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        {"VANCOUFUR"}
                      </a>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <a
                        title={"Link to Fur Eh!'s website. This link will open in a new tab."}
                        href='https://www.fureh.ca/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        {"FUR EH!"}
                      </a>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <a
                        title={"Link to Anthro East Coast's website. This link will open in a new tab."}
                        href='https://anthroeastcoast.ca/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        {"ANTHRO EAST COAST"}
                      </a>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <a
                        title={"Link to Furality's website. This link will open in a new tab."}
                        href='https://furality.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        {"FURALITY"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TextCard>
        </Section>
        <Section isContainer isTextCenter pos='middle' id='credits'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>{"Credits"}</h1>
                <p>
                  {"Furnal Equinox 2021: Pixel Purrfect was made possible by"}
                </p>
              </div>
            </div>
            <div className='row'>
              {staff?.map(name => name !== undefined &&
                <div className='col-sm-6 col-md-4 col-lg-3' key={name}>
                  <p>{name}</p>
                </div>
              )}
            </div>
          </TextCard>
        </Section>
      </div>
    </Event>
  )
}

export default Info

export const infoQuery = graphql`
  query InfoQuery {
    remark: markdownRemark(fileAbsolutePath: { regex: "/staff.md/" }) {
      frontmatter {
        staff
      }
    }
  }
`
