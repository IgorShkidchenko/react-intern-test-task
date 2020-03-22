import * as actionTypes from "./actionTypes";

const getRepository = payload => ({
  type: actionTypes.GET_REPOSITORY,
  payload,
});

const addRepository = repository => ({
  type: actionTypes.ADD_REPOSITORY,
  value: repository,
});

const removeRepository = repositoryId => ({
  type: actionTypes.REMOVE_REPOSITORY,
  value: repositoryId,
});

const loadRepositoryLanguages = url => ({
  type: actionTypes.LOAD_REPOSITORY_LANGUAGES,
  value: url,
});

const setRepositoryLanguages = languages => ({
  type: actionTypes.SET_REPOSITORY_LANGUAGES,
  value: languages,
});

const repositoryActions = {
  getRepository,
  addRepository,
  removeRepository,
  loadRepositoryLanguages,
  setRepositoryLanguages,
};

export { repositoryActions as default };
