import React, { useEffect, useState } from 'react'
import * as faunadb from 'faunadb'
import './style.scss'

interface TotalDonations {
  numberOfDonors: number
  totalAmount: number
}

const CharityMeter: React.FC = () => {
  const [data, setData] = useState<TotalDonations | null>(null)
  const donationGoal = parseInt(process.env.DONATION_GOAL as string)
  const timeToCheck = parseInt(process.env.INTERVAL_IN_MS_TO_CHECK_TOTAL_DONATION_AMOUNT as string)

  const getTotalDonationAmount = async (): Promise<void> => {
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getTotalDonation')))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<TotalDonations>>(
        q.Get(q.Match(q.Index('getTotalDonation')))
      )

      setData(document.data)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTotalDonationAmount()
    }, timeToCheck)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='progress progress-larger'>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={(data?.totalAmount ?? 0) / donationGoal}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: '50%' }}
      />
    </div>

  )
}

export default CharityMeter
