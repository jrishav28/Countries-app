import { SelectComp } from "../components/SelectComp";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { makeMockStore } from "./test_util/test_util";
import Adapter from "enzyme-adapter-react-16";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../containers/SelectCompContainer";
import Dropdown from "../components/Dropdown";
Enzyme.configure({ adapter: new Adapter() });
const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);
  const wrapper = shallow(<SelectComp store={store} />, {
    disableLifecycleMethods: true,
  });
  return wrapper;
};

describe("Select Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { data: "" };
    wrapper = setUp(initialState);
  });
  it("should have 2 Dropdown Component", () => {
    const element = wrapper.find("div div h2");
    expect(element.length).toEqual(2);
  });
  it("handlechange", () => {
    expect(wrapper.instance().handleChange()).toBeCalled;
  });
  it("should show  Select Pokemon label", () => {
    const text = wrapper.find(".poke-names h2");
    expect(text.text()).toEqual("Select Pokemon :");
  });
  it("should show Select Abilities label", () => {
    const text = wrapper.find(".poke-abilities h2");
    expect(text.text()).toEqual(" Select Abilities : ");
  });
  it("mapStateToProps working", () => {
    const initialState = {
      data: {},
    };
    expect(mapStateToProps(initialState.data)).toEqual({});
  });
  it(" mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).changePoke();
    expect(dispatch.mock.calls[0][0]).toBeCalled;
  });
});
