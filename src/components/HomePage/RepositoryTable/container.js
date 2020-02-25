import React from "react";
import PropTypes from "prop-types";

import RepositoryTableComponent from "./component";
import RepositoryRow from ".././RepositoryRow";

const RepositoryTableContainer = ({ repositories, onRemoveRepository }) => {
  const rows = [];
  const sortedRepos = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

  sortedRepos.forEach((repository) => {
    rows.push(<RepositoryRow
      repository={repository}
      key={repository.id}
      onRemoveRepository={onRemoveRepository}
    />);
  });

  return <RepositoryTableComponent rows={rows} />;
};

RepositoryTableContainer.propTypes = {
  repositories: PropTypes.array.isRequired,
  onRemoveRepository: PropTypes.func.isRequired,
};

export default RepositoryTableContainer;
