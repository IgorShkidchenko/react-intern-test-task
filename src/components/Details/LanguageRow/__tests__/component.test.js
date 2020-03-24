import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LanguageRowComponent from "../component";

configure({ adapter: new Adapter() });

describe("<LanguageRowComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LanguageRowComponent percentage="1" languageName="name" />);

    expect(wrapper).toMatchSnapshot();
  });
});
