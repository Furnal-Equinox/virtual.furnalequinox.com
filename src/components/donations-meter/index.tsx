import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const DonationsMeter: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.DonationsMeterQueryQuery>(donationsMeterQuery)
  const donationsMeterBG = getImage(
    data?.donationsMeterBG?.childImageSharp?.gatsbyImageData
  )
  const donationsMeterBG8K = getImage(
    data?.donationsMeterBG8K?.childImageSharp?.gatsbyImageData
  )
  const donationsMeterBG10K = getImage(
    data?.donationsMeterBG10K?.childImageSharp?.gatsbyImageData
  )
  const donationsMeterBGBusted = getImage(
    data?.donationsMeterBGBusted?.childImageSharp?.gatsbyImageData
  )

  const [total, setTotal] = useState<number | null>(16049)

  const donationGoals: number[] = [6000, 8000, 10000]

  const getPercentOfGoal = (goal: number): number =>
    ((total ?? 0) / goal) * 100

  const getCurrentGoalAndBG = () => {
    if (total !== null) {
      if (total >= donationGoals[2]) {
        return { goal: donationGoals[2], bg: donationsMeterBGBusted }
      } else if (total >= donationGoals[1] && total <= donationGoals[2]) {
        return { goal: donationGoals[2], bg: donationsMeterBG10K }
      } else if (total >= donationGoals[0] && total <= donationGoals[1]) {
        return { goal: donationGoals[1], bg: donationsMeterBG8K }
      } else {
        return { goal: donationGoals[0], bg: donationsMeterBG }
      }
    } else {
      return { goal: donationGoals[0], bg: donationsMeterBG }
    }
  }

  const { goal, bg } = getCurrentGoalAndBG()

  const percent = getPercentOfGoal(goal)

  const ProgressBar: React.FC = () => {
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
            `We're currently ${percent.toFixed()}% to our goal of ${goal}!`
          ].join(' ')}
          style={{ width: `${percent}%` }}
        />
      </div>
    )
  }

  return (
    <div className='card rounded-3 border border-primary border-5' tabIndex={0}>
      {bg !== undefined && <GatsbyImage
        image={bg}
        className='img-fluid rounded-3'
        alt={[
          'This image is the background for the donations meter.',
          "It has the words 'Donation Meter' in the top left,",
          `our donation goal of ${goal} in the top right,`,
          'and Marty along the right side grinning and giving two thumbs up!',
          "Once we're over $10,000, the meter displays a new image with the meter",
          'appearing to break the image with Marty panicking!'
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
            <div className={`col-9 ${total !== null && total >= donationGoals[2] ? 'invisible' : ''}`} tabIndex={0}>
              <ProgressBar />
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col' tabIndex={0}>
              <p
                className='h3 m-0'
                style={{ textShadow: '0px 0px 10px #ff3d6f, 0px 0px 10px #ff3d6f' }}
              >
                {`$${total?.toFixed() ?? 0}`}
              </p>
            </div>
            <div className='col' tabIndex={0}>
              <a
                title={'Link to our donation page on RegFox. This link will open in a new tab.'}
                href='https://fe.regfox.com/pixel-purrfect-donations'
                target='_blank'
                rel='noopener noreferrer'
                className='link h3'
                style={{ textShadow: '0px 0px 10px #ff3d6f, 0px 0px 10px #ff3d6f' }}
                tabIndex={0}
              >
                {"DONATE"}
              </a>
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
        ...LargeImage
      }
    }
    donationsMeterBG8K: file(relativePath: { eq: "donation_meter_bg_8k.png"}) {
      childImageSharp {
        ...LargeImage
      }
    }
    donationsMeterBG10K: file(relativePath: { eq: "donation_meter_bg_10k.png"}) {
      childImageSharp {
        ...LargeImage
      }
    }
    donationsMeterBGBusted: file(relativePath: { eq: "donation_meter_bg_busted.png" }) {
      childImageSharp {
        ...LargeImage
      }
    }
  }
`
