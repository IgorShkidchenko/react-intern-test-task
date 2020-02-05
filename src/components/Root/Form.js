import React from 'react'
import axios from 'axios';

class Form extends React.Component {
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
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter repository name e.g. facebook/react" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add" />
        {this.state.valid === false ? <p className={'red'}>Repository not found</p> : null}
      </form>
    );
  }
}

export default Form
