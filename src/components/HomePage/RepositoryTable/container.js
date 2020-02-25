import React from "react";

import RepositoryTableComponent from "./component";
import RepositoryRow from ".././RepositoryRow";

const RepositoryTableContainer = (props) => {
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

  return <RepositoryTableComponent rows={rows} />;
}

export default RepositoryTableContainer
