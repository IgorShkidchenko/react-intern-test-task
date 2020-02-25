import React from "react";
import PropTypes from "prop-types";

import DetailsComponent from "./component";

const DetailsContainer = props => <DetailsComponent repository={props.location.state.repository} />;

DetailsContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailsContainer;
