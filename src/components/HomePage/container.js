import React from "react";

import HomePageComponent from "./component";

class HomePageContainer extends React.Component {
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
    return <HomePageComponent
      self={this}
      repositories={this.state.repositories}
      handleAddRepository={this.handleAddRepository}
      handleRemoveRepository={this.handleRemoveRepository}
      />
  }
}

export default HomePageContainer
