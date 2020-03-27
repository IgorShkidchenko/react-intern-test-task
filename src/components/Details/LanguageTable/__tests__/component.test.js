import React from "react";
import { shallow } from "enzyme";

import LanguageRowComponent from "../../LanguageRow/component";
import LanguageTableComponent from "../component";

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
