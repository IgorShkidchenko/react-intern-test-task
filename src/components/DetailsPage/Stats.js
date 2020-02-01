import React from 'react'

class Stats extends React.Component {
  render() {
    const repository = this.props.repository

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
    );
  }
}

export default Stats
