import React from 'react'
import SimpleStorage from 'react-simple-storage'
import RepositoryTable from './RepositoryTable'
import Form from './Form'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    }

    this.handleAddRepository = this.handleAddRepository.bind(this);
    this.handleRemoveRepository = this.handleRemoveRepository.bind(this);
  }

  handleAddRepository(repository) {
    const oldRepositories = this.state.repositories;
    oldRepositories.push(repository)

    this.setState({
      repositories: oldRepositories
    });
  }

  handleRemoveRepository(id) {
    const filteredRepositories = this.state.repositories.filter(repo => repo.id !== id);

    this.setState({
      repositories: filteredRepositories
    });
  }

  render() {
    return (
      <div>
      <SimpleStorage parent={this} />
        <Form
          onAddRepository={this.handleAddRepository}
        />
        <RepositoryTable
          repositories={this.state.repositories}
          onRemoveRepository={this.handleRemoveRepository}
        />
      </div>
    );
  }
}

export default HomePage
