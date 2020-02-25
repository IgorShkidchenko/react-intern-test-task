import React from "react"
import axios from "axios"

import LanguageTableComponent from "./component";
import LanguageRow from '.././LanguageRow'

class LanguageTableContainer extends React.Component {
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

    return <LanguageTableComponent rows={rows} />;
  }
}

const sumOfHashValues = (hash) => {
  let sum = 0;

  for(const key in hash) {
    sum += hash[key]
  }
  return sum;
}

const calculatePercentage = (num, total) => (num * 100 / total).toFixed(2);

export default LanguageTableContainer
