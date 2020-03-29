import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import LanguageTableContainer from "../container";

describe("<LanguageTableContainer />", () => {
  const mockStore = configureStore([]);
  const initialState = {
    repo: { repositoryLanguages: { JS: 5, C: 5, Ruby: 10 } },
    loadRepositoryLanguages: () => {},
  };
  const store = mockStore(initialState);

  let container;
  beforeEach(() => {
    const wrapper = shallow(<LanguageTableContainer
      store={store}
      repository={{ languages_url: "url" }}
    />);
    container = wrapper.dive().dive();
  });

  it("renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  it("calculatePercentage 10 is 33 percent of 30", () => {
    const instance = container.instance();
    const actualResult = instance.calculatePercentage(10, 30);
    const expectedResult = "33.33";

    expect(actualResult).toBe(expectedResult);
  });

  it("sumOfObjectValues 5.5 + 5.5 + 10 equal 21", () => {
    const instance = container.instance();
    const actualResult = instance.sumOfObjectValues({ JS: 5.5, C: 5.5, Ruby: 10 });
    const expectedResult = 21;

    expect(actualResult).toBe(expectedResult);
  });
});
