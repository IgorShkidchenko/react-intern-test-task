import * as actionTypes from "./actionTypes";
import { updateObject } from "../utility";

const initialState = {
  repositories: [],
  repositoryLanguages: null,
};

const removeRepository = (state, action) => {
  const updateRepositories = state.repositories.filter(repo => repo.id !== action.value);
  return updateObject(state, { repositories: updateRepositories });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REPOSITORY:
      return updateObject(state, { repositories: state.repositories.concat(action.value) });
    case actionTypes.REMOVE_REPOSITORY:
      return removeRepository(state, action);
    case actionTypes.SET_REPOSITORY_LANGUAGES:
      return updateObject(state, { repositoryLanguages: action.value });
    default:
      return state;
  }
};

export default reducer;
