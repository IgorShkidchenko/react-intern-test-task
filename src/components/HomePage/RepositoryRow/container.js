import React from "react";

import RepotisoryRowComponent from "./component";

class RepotisoryRowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onRemoveRepository(this.props.repository.id)
  }

  render() {
    return <RepotisoryRowComponent
      repository={this.props.repository}
      handleClick={this.handleClick}
    />;
  }
}

export default RepotisoryRowContainer
