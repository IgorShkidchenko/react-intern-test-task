import React from "react"
import axios from "axios"

import FormComponent from "./component"

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()

    const url = `https://api.github.com/repos/${this.state.value}`;

    let promiseResponse;
    axios.get(url)
      .then(response => {
        promiseResponse = response.data;

        this.setState({valid: true});
        this.props.onAddRepository(promiseResponse)
      })
      .catch(error => {
        console.log(error)
        this.setState({valid: false});
      })
  }

  render() {
    return <FormComponent
      value={this.state.value}
      valid={this.state.valid}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default FormContainer
