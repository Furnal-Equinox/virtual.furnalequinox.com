import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { TextCard } from '../index'

const Lineup: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.LineupQueryQuery>(lineupQuery)

  const friday = data?.remark?.frontmatter?.schedule?.friday
  const saturday = data?.remark?.frontmatter?.schedule?.saturday
  const sunday = data?.remark?.frontmatter?.schedule?.sunday

  const TableHeader: React.FC = () =>
    <thead>
      <tr>
        <th scope='col'>Time (EST)</th>
        <th scope='col'>Event Name</th>
        <th scope='col'>Host</th>
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
      <h1>Lineup</h1>
      <div className='py-3'>
        <h2>Friday, March 19th</h2>
        <Table>
          {friday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.title}</td>
              <td>{event?.host}</td>
            </tr>
          )}
        </Table>
      </div>
      <div className='py-3'>
        <h2>Saturday, March 20th</h2>
        <Table>
          {saturday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.title}</td>
              <td>{event?.host}</td>
            </tr>
          )}
        </Table>
      </div>
      <div className='py-3'>
        <h2>Sunday, March 21st</h2>
        <Table>
          {sunday?.map((event) =>
            <tr key={event?.time}>
              <th scope='row'>{event?.time}</th>
              <td>{event?.title}</td>
              <td>{event?.host}</td>
            </tr>
          )}
        </Table>
      </div>
    </TextCard>
  )
}

export default Lineup

export const lineupQuery = graphql`
  query LineupQuery {
    remark: markdownRemark(fileAbsolutePath: { regex: "/schedule.md/" }) {
      frontmatter {
        schedule {
          friday {
            time
            title
            host
          }
          saturday {
            time
            title
            host
          }
          sunday {
            time
            title
            host
          }
        }
      }
    }
  }
`
