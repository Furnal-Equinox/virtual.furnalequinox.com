import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { TextCard } from '../index'

const DJLineup: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.DJLineupQueryQuery>(djLineupQuery)

  const friday = data?.remark?.frontmatter?.djLineup?.friday
  const saturday = data?.remark?.frontmatter?.djLineup?.saturday
  const sunday = data?.remark?.frontmatter?.djLineup?.sunday

  const TableHeader: React.FC = () =>
    <thead>
      <tr>
        <th scope='col'>{"Time (EDT)"}</th>
        <th scope='col'>{"DJ"}</th>
      </tr>
    </thead>

  const Table: React.FC = ({ children }) =>
    <div className='table-responsive'>
      <table className='table table-sm align-middle table-striped table-hover'>
        <TableHeader />
        <tbody>
          {children}
        </tbody>
      </table>
    </div>

  return (
    <TextCard>
      <h1>{"Lineup"}</h1>
      <div className='py-3'>
        <h2>{"Friday, March 19th"}</h2>
        <Table>
          {friday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.dj}</td>
            </tr>
          )}
        </Table>
      </div>
      <div className='py-3'>
        <h2>{"Saturday, March 20th"}</h2>
        <Table>
          {saturday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.dj}</td>
            </tr>
          )}
        </Table>
      </div>
      <div className='py-3'>
        <h2>{"Sunday, March 21st"}</h2>
        <Table>
          {sunday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.dj}</td>
            </tr>
          )}
        </Table>
      </div>
    </TextCard>
  )
}

export default DJLineup

export const djLineupQuery = graphql`
  query DJLineupQuery {
    remark: markdownRemark(fileAbsolutePath: { regex: "/djs.md/" }) {
      frontmatter {
        djLineup {
          friday {
            time
            dj
          }
          saturday {
            time
            dj
          }
          sunday {
            time
            dj
          }
        }
      }
    }
  }
`
