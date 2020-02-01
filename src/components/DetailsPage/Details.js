import React from 'react'
import { Link } from 'react-router-dom'
import * as path from '../../constants/path'

import Stats from './Stats'
import LanguageTable from './LanguageTable'

class Details extends React.Component {
  render() {
    const { repository } = this.props.location.state

    return (
      <div>
        <p>
          {repository.full_name}
          <a href={repository.clone_url}> Clone</a>
        </p>
        <div className='tables'>
          <Stats repository={repository}/>
          <LanguageTable repository={repository}/>
        </div>
        <Link to={path.ROOT}>back</Link>
      </div>
    );
  }
}

export default Details
