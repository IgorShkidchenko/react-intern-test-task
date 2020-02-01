import React from 'react'
import { Link } from 'react-router-dom'
import * as path from '../../constants/path'

class RepositoryRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onRemoveRepository(this.props.repository.id)
  }

  render() {
    const repository = this.props.repository;

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
            <td onClick={this.handleClick}>Х</td>
          </Link>
        </td>
      </tr>
    );
  }
}

export default RepositoryRow
