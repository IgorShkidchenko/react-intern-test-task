import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import LanguageTableComponent from "./component";
import LanguageRow from ".././LanguageRow";

class LanguageTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryLanguages: null,
    };
  }

  componentDidMount() {
    axios.get(this.props.repository.languages_url)
      .then((response) => {
        this.setState({ repositoryLanguages: response.data });
      });
  }

  render() {
    const rows = [];
    const { repositoryLanguages } = this.state;

    if (repositoryLanguages !== null) {
      const totalRepositoryLanguagesBytes = sumOfHashValues(repositoryLanguages);

      Object.entries(repositoryLanguages).forEach((language) => {
        const languageName = language[0];
        const languageBytes = language[1];

        rows.push(<LanguageRow
          percentage={calculatePercentage(languageBytes, totalRepositoryLanguagesBytes)}
          languageName={languageName}
          key={languageName}
        />);
      });
    }

    return <LanguageTableComponent rows={rows} />;
  }
}

const sumOfHashValues = (hash) => {
  let sum = 0;

  Object.values(hash).forEach((languageBytes) => {
    sum += languageBytes;
  });

  return sum;
};

const calculatePercentage = (num, total) => ((num * 100) / total).toFixed(2);

LanguageTableContainer.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default LanguageTableContainer;
