import React, { useEffect, useState } from 'react'
import * as faunadb from 'faunadb'
import './style.scss'

interface Totals {
  numberOfDonors: number
  amountDonated: number
}

const CharityMeter: React.FC = () => {
  const [totals, setTotals] = useState<Totals | null>(null)
  const donationGoal = parseInt(process.env.DONATION_GOAL as string)
  const timeToCheck = parseInt(process.env.INTERVAL_IN_MS_TO_CHECK_TOTAL_DONATION_AMOUNT as string)

  useEffect(() => {
    const getTotals = async (): Promise<Totals | null> => {
      const q = faunadb.query
    
      const faunaClient = new faunadb.Client({
        secret: process.env.FAUNA_CLIENT_KEY as string
      })
    
      try {
        const doesRecordExist: boolean = await faunaClient.query(
          q.Exists(q.Match(q.Index('getTotals')))
        )
    
        if (doesRecordExist) {
          const document = await faunaClient.query<faunadb.values.Document<Totals>>(
            q.Get(q.Match(q.Index('getTotals')))
          )
    
          return document.data
        } else {
          return null
        }
      } catch (err: any) {
        return null
      }
    }
    
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

  return (
    <div className='progress progress-larger'>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={(totals?.amountDonated ?? 1) / donationGoal}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: '50%' }}
      />
    </div>

  )
}

export default CharityMeter
