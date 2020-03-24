import repositoryActions from "../actions";
import * as actionTypes from "../actionTypes";

describe("repositoryActions", () => {
  it("getRepository should create an action GET_REPOSITORY", () => {
    const payload = { repositoryUrl: "url", func: () => {} };
    const expectedAction = { type: actionTypes.GET_REPOSITORY, payload };

    expect(repositoryActions.getRepository(payload)).toEqual(expectedAction);
  });

  it("addRepository should create an action ADD_REPOSITORY", () => {
    const repository = { id: "1" };
    const expectedAction = { type: actionTypes.ADD_REPOSITORY, value: repository };

    expect(repositoryActions.addRepository(repository)).toEqual(expectedAction);
  });

  it("removeRepository should create an action REMOVE_REPOSITORY", () => {
    const repositoryId = "1";
    const expectedAction = { type: actionTypes.REMOVE_REPOSITORY, value: repositoryId };

    expect(repositoryActions.removeRepository(repositoryId)).toEqual(expectedAction);
  });

  it("loadRepositoryLanguages should create an action LOAD_REPOSITORY_LANGUAGES", () => {
    const url = "url";
    const expectedAction = { type: actionTypes.LOAD_REPOSITORY_LANGUAGES, value: url };

    expect(repositoryActions.loadRepositoryLanguages(url)).toEqual(expectedAction);
  });

  it("setRepositoryLanguages should create an action SET_REPOSITORY_LANGUAGES", () => {
    const languages = { JS: 1, Ruby: 2 };
    const expectedAction = { type: actionTypes.SET_REPOSITORY_LANGUAGES, value: languages };

    expect(repositoryActions.setRepositoryLanguages(languages)).toEqual(expectedAction);
  });
});
