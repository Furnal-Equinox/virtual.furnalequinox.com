import * as faunadb from 'faunadb'

export interface Totals {
  numberOfDonors: number
  amountDonated: number
}

export interface Donation {
  furName: string
  discordHandle?: string
  emailAddress: string
  amount: number
}

export interface Donor {
  furName: string
  discordHandle?: string
  emailAddress: string
  hasDonated: boolean
}

export const getTotals = async (): Promise<Totals | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.GATSBY_FAUNA_CLIENT_KEY as string
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
