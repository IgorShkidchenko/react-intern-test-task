import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as path from "../../../constants/path";

const RepotisoryRowComponent = ({ repository, handleClick }) => (
  <tr>
    <td>
      <Link to={{
            pathname: path.DETAILS,
            state: {
              repository,
            },
          }}
      >
        {repository.name} {repository.stargazers_count}
        <span
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleClick}
        >  Х
        </span>
      </Link>
    </td>
  </tr>
);

RepotisoryRowComponent.propTypes = {
  repository: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RepotisoryRowComponent;
