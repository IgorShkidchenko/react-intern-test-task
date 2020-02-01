import React from 'react'
import axios from 'axios'

import LanguageRow from './LanguageRow'

function sum_of_hash_values(hash) {
  let sum = 0;

  for(const key in hash) {
    sum += hash[key]
  }
  return sum;
}

function calculate_percentage(num, total) {
  return (num * 100 / total).toFixed(2)
}

class LanguageTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repository_languages: null
    };
  }

  componentDidMount() {
    axios.get(this.props.repository.languages_url)
      .then(response => {
        this.setState({ repository_languages: response.data });
      })
  }

  render() {
    const rows = []
    const repository_languages = this.state.repository_languages
    const total_repository_languages_bytes = sum_of_hash_values(repository_languages)

    for(const language in repository_languages) {
      const language_bytes = repository_languages[language]
      rows.push(
        <LanguageRow
          percentage={calculate_percentage(language_bytes, total_repository_languages_bytes)}
          language_name={language}
          key={language} />
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <td>Languages:</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default LanguageTable
