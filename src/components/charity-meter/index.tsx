import React, { useEffect, useState } from 'react'
import * as faunadb from 'faunadb'
import './style.scss'

import { getTotals, Totals } from '../../utils/api'

const CharityMeter: React.FC = () => {
  const [totals, setTotals] = useState<Totals | null>(null)
  const donationGoal = parseInt(process.env.GATSBY_DONATION_GOAL as string)
  const timeToCheck = parseInt(process.env.GATSBY_INTERVAL_IN_MS_TO_CHECK_TOTAL_DONATION_AMOUNT as string)

  useEffect(() => {
    const fetchTotals = async (): Promise<void> => {
      const data = await getTotals()
      setTotals(data)
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
    ((totals?.amountDonated ?? 0) / donationGoal) * 100

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
