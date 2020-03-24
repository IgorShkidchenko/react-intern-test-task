import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RepositoryTableComponent from "./component";
import RepositoryRow from ".././RepositoryRow";

export const RepositoryTableContainer = ({ repositories }) => {
  const rows = [];
  const sortedRepos = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

  sortedRepos.forEach((repository) => {
    rows.push(<RepositoryRow
      repository={repository}
      key={repository.id}
    />);
  });

  return (<RepositoryTableComponent rows={rows} />);
};

RepositoryTableContainer.propTypes = {
  repositories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repo.repositories,
});

export default connect(mapStateToProps, null)(RepositoryTableContainer);
