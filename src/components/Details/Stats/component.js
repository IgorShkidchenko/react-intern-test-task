import React from 'react'

const StatsComponent = ({ repository }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Stats:</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>watchers: {repository.watchers}</td>
        </tr>
        <tr>
          <td>stars: {repository.stargazers_count}</td>
        </tr>
        <tr>
          <td>forks: {repository.forks}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StatsComponent
