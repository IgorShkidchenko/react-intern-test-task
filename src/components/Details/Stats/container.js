import React from "react";
import PropTypes from "prop-types";

import StatsComponent from "./component";

const StatsContainer = ({ repository }) => <StatsComponent repository={repository} />;

StatsContainer.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default StatsContainer;
