import React from "react";
import { shallow } from "enzyme";
import { LanguageTableContainer } from "../container";

describe("<LanguageTableContainer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LanguageTableContainer
      repository={{ languages_url: "url" }}
      repositoryLanguages={{ JS: 5, C: 5, Ruby: 10 }}
      loadRepositoryLanguages={() => {}}
    />);
  })

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calculatePercentage 10 is 33 percent of 30", () => {
    const instance = wrapper.instance();
    const actualResult = instance.calculatePercentage(10, 30);
    const expectedResult = "33.33";

    expect(actualResult).toBe(expectedResult);
  });

  it("sumOfObjectValues 5.5 + 5.5 + 10 equal 21", () => {
    const instance = wrapper.instance();
    const actualResult = instance.sumOfObjectValues({ JS: 5.5, C: 5.5, Ruby: 10 });
    const expectedResult = 21;

    expect(actualResult).toBe(expectedResult);
  });
});
