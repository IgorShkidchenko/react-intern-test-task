import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LanguageTableContainer, sumOfObjectValues, calculatePercentage } from "../container";

configure({ adapter: new Adapter() });

describe("<LanguageTableContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LanguageTableContainer
      repository={{ languages_url: "url" }}
      repositoryLanguages={{ JS: 5, C: 5, Ruby: 10 }}
      loadRepositoryLanguages={() => {}}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("calculatePercentage function", () => {
  it("10 is 33 percent of 30", () => {
    const actualResult = calculatePercentage(10, 30);
    const expectedResult = "33.33";

    expect(actualResult).toBe(expectedResult);
  });

  it("50 is 25 percent of 200", () => {
    const actualResult = calculatePercentage(50, 200);
    const expectedResult = "25.00";

    expect(actualResult).toBe(expectedResult);
  });
});

describe("sumOfObjectValues function", () => {
  it("5.5 + 5.5 + 10 equal 21", () => {
    const actualResult = sumOfObjectValues({ JS: 5.5, C: 5.5, Ruby: 10 });
    const expectedResult = 21;

    expect(actualResult).toBe(expectedResult);
  });
});
