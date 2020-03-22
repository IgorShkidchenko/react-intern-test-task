import { createLogic } from "redux-logic";
import repositoryActions from "./actions";
import * as actionTypes from "./actionTypes";

const getRepositoryLogic = createLogic({
  type: actionTypes.GET_REPOSITORY,
  debounce: 500,
  latest: true,

  validate({ action }, allow, reject) {
    if (action.payload) {
      allow(action);
    } else {
      reject();
    }
  },

  process({ httpClient, action }, dispatch, done) {
    const { repositoryUrl, setSubmitting, setErrors } = action.payload;
    const url = `https://api.github.com/repos/${repositoryUrl}`;

    httpClient
      .get(url)
      .then(response => dispatch(repositoryActions.addRepository(response.data)))
      .catch(() => setErrors({ repositoryUrl: "Repository not found" }))
      .then(() => {
        setSubmitting(false);
        done();
      });
  },
});

const loadRepositoryLanguages = createLogic({
  type: actionTypes.LOAD_REPOSITORY_LANGUAGES,
  debounce: 500,
  latest: true,

  validate({ action }, allow, reject) {
    if (action.value) {
      allow(action);
    } else {
      reject();
    }
  },

  process({ httpClient, action }, dispatch, done) {
    const url = action.value;

    httpClient.get(url)
      .then(response => dispatch(repositoryActions.setRepositoryLanguages(response.data)))
      .then(() => done());
  },
});

export default [
  getRepositoryLogic,
  loadRepositoryLanguages,
];
