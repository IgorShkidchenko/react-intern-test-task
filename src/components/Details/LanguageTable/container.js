import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { repositoryActions } from "../../../store/repositories";
import LanguageTableComponent from "./component";
import LanguageRow from ".././LanguageRow";

export class LanguageTableContainer extends React.Component {
  componentDidMount() {
    this.props.loadRepositoryLanguages(this.props.repository.languages_url);
  }

  render() {
    const rows = [];
    const { repositoryLanguages } = this.props;

    if (repositoryLanguages !== null) {
      const totalRepositoryLanguagesBytes = sumOfObjectValues(repositoryLanguages);

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

export const sumOfObjectValues = (hash) => {
  let sum = 0;

  Object.values(hash).forEach((languageBytes) => {
    sum += languageBytes;
  });

  return sum;
};

export const calculatePercentage = (num, total) => ((num * 100) / total).toFixed(2);

LanguageTableContainer.propTypes = {
  repository: PropTypes.object.isRequired,
  repositoryLanguages: PropTypes.object.isRequired,
  loadRepositoryLanguages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repositoryLanguages: state.repo.repositoryLanguages,
});

const mapDispatchToProps = dispatch => ({
  loadRepositoryLanguages: url => dispatch(repositoryActions.loadRepositoryLanguages(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageTableContainer);
