import React from "react";

import DetailsComponent from "./component";

const DetailsContainer = (props) => <DetailsComponent repository={props.location.state.repository} />;

export default DetailsContainer
