import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { RepotisoryRowContainer } from "../container";

configure({ adapter: new Adapter() });

describe("<RepotisoryRowContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<RepotisoryRowContainer
      repository={{}}
      onRemoveRepository={() => {}}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
