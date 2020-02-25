import React from "react";
import PropTypes from "prop-types";

import RepotisoryRowComponent from "./component";

class RepotisoryRowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onRemoveRepository(this.props.repository.id);
  }

  render() {
    return (<RepotisoryRowComponent
      repository={this.props.repository}
      handleClick={this.handleClick}
    />);
  }
}

RepotisoryRowContainer.propTypes = {
  repository: PropTypes.object.isRequired,
  onRemoveRepository: PropTypes.func.isRequired,
};

export default RepotisoryRowContainer;
