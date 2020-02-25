import React from "react";
import PropTypes from "prop-types";

const LanguageTableComponent = ({ rows }) => (
  <table>
    <thead>
      <tr>
        <td>Languages:</td>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
);


LanguageTableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default LanguageTableComponent;
