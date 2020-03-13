import * as actionTypes from "./actionTypes";

const initialState = {
  repositories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REPOSITORY:
      return {
        ...state,
        repositories: state.repositories.concat(action.repository),
      };
    case actionTypes.REMOVE_REPOSITORY:
      return {
        ...state,
        repositories: state.repositories.filter(repo => repo.id !== action.repoId),
      };
    default:
      return state;
  }
};

export default reducer;
