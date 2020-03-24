import { createMockStore } from "redux-logic-test";

import * as actionTypes from "../actionTypes";
import RepositoryLogic from "../logic";

const response = { data: {} };
const injectedDeps = {
  httpClient: {
    get() { return Promise.resolve(response); },
  },
};
let store;
beforeEach(() => {
  store = createMockStore({
    logic: RepositoryLogic,
    injectedDeps,
  });
});

describe("getRepositoryLogic logic", () => {
  const setErrors = jest.fn();
  const setSubmitting = jest.fn();
  const payload = { repositoryUrl: "url", setErrors, setSubmitting };

  it("should fetch repository and dispatch ADD_REPOSITORY", (done) => {
    store.dispatch({ type: actionTypes.GET_REPOSITORY, payload });
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.GET_REPOSITORY, payload },
        { type: actionTypes.ADD_REPOSITORY, value: response.data },
      ]);
      expect(setSubmitting).toHaveBeenCalledWith(false);
      expect(setErrors).not.toHaveBeenCalled;
      done();
    });
  });

  it("should setErrors when fail fetch repository", (done) => {
    const injectedDeps = {
      httpClient: {
        get() { return Promise.reject(new Error("not exist")); },
      },
    };
    const store = createMockStore({
      logic: RepositoryLogic,
      injectedDeps,
    });

    store.dispatch({ type: actionTypes.GET_REPOSITORY, payload });
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.GET_REPOSITORY, payload },
      ]);
      expect(setSubmitting).toHaveBeenCalledWith(false);
      expect(setErrors).toHaveBeenCalledWith({ repositoryUrl: "Repository not found" });
      done();
    });
  });

  it("should reject if value is null", (done) => {
    store.dispatch({ type: actionTypes.GET_REPOSITORY, value: null });
    store.whenComplete(() => {
      expect(store.actions).toEqual([]);
      done();
    });
  });
});

describe("loadRepositoryLanguages logic", () => {
  it("should fetch repository languages and dispatch SET_REPOSITORY_LANGUAGES", (done) => {
    const url = "url";

    store.dispatch({ type: actionTypes.LOAD_REPOSITORY_LANGUAGES, value: url });
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: actionTypes.LOAD_REPOSITORY_LANGUAGES, value: url },
        { type: actionTypes.SET_REPOSITORY_LANGUAGES, value: response.data },
      ]);
      done();
    });
  });

  it("should reject if value is null", (done) => {
    store.dispatch({ type: actionTypes.LOAD_REPOSITORY_LANGUAGES, value: null });
    store.whenComplete(() => {
      expect(store.actions).toEqual([]);
      done();
    });
  });
});
