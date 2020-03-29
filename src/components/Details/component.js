import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as path from "../../constants/path";

import Stats from "./Stats";
import LanguageTable from "./LanguageTable";

const DetailsComponent = ({ location }) => {
  const { repository } = location.state;

  return (
    <div>
      <p>
        {repository.full_name}
        <a href={repository.clone_url}> Clone</a>
      </p>
      <div className="tables">
        <Stats repository={repository} />
        <LanguageTable repository={repository} />
      </div>
      <Link to={path.ROOT}>Back</Link>
    </div>
  );
};

DetailsComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailsComponent;
