import * as faunadb from 'faunadb'

import { Totals } from './types'

export const getTotals = async (): Promise<Totals | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.FAUNA_TOTALS_KEY as string
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
