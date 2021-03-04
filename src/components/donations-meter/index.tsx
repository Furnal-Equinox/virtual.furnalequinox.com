import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Img from 'gatsby-image'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

const DonationsMeter: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.DonationsMeterQueryQuery>(donationsMeterQuery)
  const donationsMeterBG = data?.donationsMeterBG?.childImageSharp?.fluid
  const [total, setTotal] = useState<number | null>(null)
  const donationGoal = parseInt(process.env.GATSBY_DONATION_GOAL as string)
  const timeToCheck = parseInt(process.env.GATSBY_INTERVAL_IN_MS_TO_CHECK_TOTAL_DONATION_AMOUNT as string)

  const identity = useIdentityContext()

  useEffect(() => {
    const fetchTotals = async (): Promise<void> => {
      try {
        const res = await identity.authorizedFetch('/.netlify/functions/fetch-totals', {
          method: 'POST'
        })

        const data: number | null = await res.json()

        setTotal(data)
      } catch (err: any) {
        console.error(err)
      }
    }

    fetchTotals()
      .catch((err: any) => console.error(err))

    const interval = setInterval(() => {
      fetchTotals()
        .catch((err: any) => console.error(err))
    }, timeToCheck)

    return () => clearInterval(interval)
  }, [])

  const getPercentOfGoal = (): number =>
    ((total ?? 0) / donationGoal) * 100

  const ProgressBar: React.FC = () => {
    const percent = getPercentOfGoal()

    return (
      <div className='progress progress-larger'>
        <div
          className='progress-bar bg-secondary progress-bar-striped progress-bar-animated'
          role='progressbar'
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={[
            'This is our donations progress bar!',
            `We're currently ${percent.toFixed()}% to our goal of ${donationGoal}!`
          ].join(' ')}
          style={{ width: `${percent}%` }}
        />
      </div>
    )
  }

  return (
    <div className='card rounded-3 border border-primary border-5'>
      {donationsMeterBG !== undefined && <Img 
        fluid={donationsMeterBG}
        className='img-fluid rounded-3'
        alt={[
          "This image is the background for the donations meter.",
          "It has the words 'Donation Meter' in the top left,",
          "our donation goal of $6000 in the top right,",
          "and Marty along the right side grinning and giving two thumbs up!"
        ].join(' ')}
      />}
      <div className='card-img-overlay p-1 p-md-3'>
        <div className='container w-100 h-100 d-grid align-items-end'>
          <div className='row'>
            <div className='col'>
              <p>{' '}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-9'>
              <ProgressBar />
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col'>
              <p
                className='h3 m-0'
                style={{ textShadow: '0px 0px 10px #ff3d6f, 0px 0px 10px #ff3d6f' }}
              >
                {`$${total?.toFixed() ?? 0}`}
              </p>
            </div>
            <div className='col'>
              <OutboundLink
                title='Link to our donation page on RegFox'
                href='https://fe.regfox.com/pixel-purrfect-donations'
                className='link h3'
                style={{ textShadow: '0px 0px 10px #ff3d6f, 0px 0px 10px #ff3d6f' }}
              >
                DONATE
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationsMeter

export const donationsMeterQuery = graphql`
  query DonationsMeterQuery {
    donationsMeterBG: file(relativePath: { eq: "donation_meter_bg.png"}) {
      childImageSharp {
        fluid(maxWidth: 1140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`