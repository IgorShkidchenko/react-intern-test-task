import React from "react"

const RepositoryTableComponent = ({ rows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Repository Name</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default RepositoryTableComponent
