import React from "react";
import { shallow } from "enzyme";

import { RepotisoryRowContainer } from "../container";

describe("<RepotisoryRowContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<RepotisoryRowContainer
      repository={{}}
      onRemoveRepository={() => {}}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
