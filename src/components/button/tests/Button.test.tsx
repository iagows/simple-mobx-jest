import React from "react";

import { shallow } from "enzyme";

import Button from "../Button";

const _onClickMock = jest.fn();

const text: string = "botão";

describe("<Button>", () => {
  const props = {
    onClick: _onClickMock,
    value: text,
  };

  const buttonWrapper = shallow(<Button {...props} />);

  describe("When mounted", () => {
    it("should have snapshot", () => {
      expect(buttonWrapper).toMatchSnapshot();
    });
  });

  it("testando o conteúdo", () => {
    const content = buttonWrapper.find(".bt");

    expect(content.props().children).toBe(text);
  });

  it("testando a função", () => {
    buttonWrapper.simulate("click");

    expect(_onClickMock).toBeCalledTimes(1);
  });
});
