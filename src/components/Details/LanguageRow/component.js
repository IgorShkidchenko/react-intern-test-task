import React from "react";
import PropTypes from "prop-types";

const LanguageRowComponent = ({ percentage, languageName }) => (
  <tr>
    <td>{languageName}: {percentage}%</td>
  </tr>
);

LanguageRowComponent.propTypes = {
  percentage: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
};

export default LanguageRowComponent;
