import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { repositoryActions } from "../../../store/repositories";
import RepotisoryRowComponent from "./component";

export class RepotisoryRowContainer extends React.Component {
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

const mapDispatchToProps = dispatch => ({
  onRemoveRepository: repoId => dispatch(repositoryActions.removeRepository(repoId)),
});

export default connect(null, mapDispatchToProps)(RepotisoryRowContainer);
