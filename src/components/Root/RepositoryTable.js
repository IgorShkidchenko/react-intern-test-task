import React from 'react'
import RepositoryRow from './RepositoryRow'

const RepositoryTable = (props) => {
  const rows = [];
  const sortedRepos = props.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

  sortedRepos.forEach((repository) => {
    rows.push(
      <RepositoryRow
        repository={repository}
        key={repository.id}
        onRemoveRepository={props.onRemoveRepository} />
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
  )
}

export default RepositoryTable
