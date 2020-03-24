import reducer from "../reducer";
import * as actionTypes from "../actionTypes";

describe("repositories reducer", () => {
  it("should return initial state", () => {
    const oldState = undefined;
    const action = {};
    const newState = { repositories: [], repositoryLanguages: null };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it("should ADD_REPOSITORY in repositories array", () => {
    const repostiory = { id: "1" };

    const oldState = { repositories: [], repositoryLanguages: null };
    const action = { type: actionTypes.ADD_REPOSITORY, value: repostiory };
    const newState = { repositories: [repostiory], repositoryLanguages: null };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it("should REMOVE_REPOSITORY from repositories array", () => {
    const repostiory = { id: "1" };

    const oldState = { repositories: [repostiory], repositoryLanguages: null };
    const action = { type: actionTypes.REMOVE_REPOSITORY, value: repostiory.id };
    const newState = { repositories: [], repositoryLanguages: null };

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it("should SET_REPOSITORY_LANGUAGES from repositories array", () => {
    const repositoryLanguages = { JS: 1, Ruby: 2 };

    const oldState = { repositories: [], repositoryLanguages: null };
    const action = { type: actionTypes.SET_REPOSITORY_LANGUAGES, value: repositoryLanguages };
    const newState = { repositories: [], repositoryLanguages };

    expect(reducer(oldState, action)).toEqual(newState);
  });
});
