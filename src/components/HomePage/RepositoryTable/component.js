import React from "react";
import PropTypes from "prop-types";

const RepositoryTableComponent = ({ rows }) => (
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

RepositoryTableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default RepositoryTableComponent;
