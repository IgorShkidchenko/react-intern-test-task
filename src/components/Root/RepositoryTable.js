import React from 'react'
import RepositoryRow from './RepositoryRow'

class RepositoryTable extends React.Component {
  render() {
    const rows = [];
    const sorted_repos = this.props.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

    sorted_repos.forEach((repository) => {
      rows.push(
        <RepositoryRow
          repository={repository}
          key={repository.id}
          onRemoveRepository={this.props.onRemoveRepository} />
      );
    });

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
    );
  }
}

export default RepositoryTable
