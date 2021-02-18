import React, { useEffect, useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

const CharityMeter: React.FC = () => {
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

  return (
    <div className='progress progress-larger'>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={getPercentOfGoal()}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${getPercentOfGoal().toFixed()}%` }}
      />
    </div>

  )
}

export default CharityMeter
