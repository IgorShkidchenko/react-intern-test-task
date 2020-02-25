import React from "react"
import { Link } from "react-router-dom"
import * as path from "../../../constants/path"

const RepotisoryRowComponent = (props) => {
  const { repository } = props

  return (
    <tr>
      <td>
        <Link to={{
            pathname: path.DETAILS,
            state: {
              repository: repository
            }
          }}>
          <td>{repository.name}</td>
          <td>{repository.stargazers_count}</td>
          <td onClick={props.handleClick}>Х</td>
        </Link>
      </td>
    </tr>
  );
}

export default RepotisoryRowComponent
