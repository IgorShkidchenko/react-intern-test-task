import React from 'react'
import axios from 'axios'

import LanguageRow from './LanguageRow'

const sumOfHashValues = (hash) => {
  let sum = 0;

  for(const key in hash) {
    sum += hash[key]
  }
  return sum;
}

const calculatePercentage = (num, total) => (num * 100 / total).toFixed(2);

class LanguageTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryLanguages: null
    };
  }

  componentDidMount() {
    axios.get(this.props.repository.languages_url)
      .then(response => {
        this.setState({ repositoryLanguages: response.data });
      })
  }

  render() {
    const rows = []
    const repositoryLanguages = this.state.repositoryLanguages
    const totalRepositoryLanguagesBytes = sumOfHashValues(repositoryLanguages)

    for(const language in repositoryLanguages) {
      const languageBytes = repositoryLanguages[language]
      rows.push(
        <LanguageRow
          percentage={calculatePercentage(languageBytes, totalRepositoryLanguagesBytes)}
          languageName={language}
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
