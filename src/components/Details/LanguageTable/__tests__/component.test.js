import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LanguageRowComponent from "../../LanguageRow/component";
import LanguageTableComponent from "../component";

configure({ adapter: new Adapter() });

describe("<LanguageTableComponent />", () => {
  it("renders correctly", () => {
    const rows = [
      <LanguageRowComponent percentage="1" languageName="name" key="name" />,
      <LanguageRowComponent percentage="2" languageName="name2" key="name2" />,
    ];
    const wrapper = shallow(<LanguageTableComponent rows={rows} />);

    expect(wrapper).toMatchSnapshot();
  });
});
