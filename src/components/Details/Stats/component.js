import React from "react";
import PropTypes from "prop-types";

const StatsComponent = ({ repository }) => (
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

StatsComponent.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default StatsComponent;
