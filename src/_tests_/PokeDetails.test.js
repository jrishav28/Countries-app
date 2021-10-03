import { PokeDetails } from "../components/PokeDetails";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { makeMockStore } from "./test_util/test_util";
import { mapStateToProps } from "../components/PokeDetails";
Enzyme.configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);
  const wrapper = shallow(<PokeDetails store={store} />, {
    disableLifecycleMethods: true,
  });
  return wrapper;
};
describe("PokeDetails Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { data: "" };
    wrapper = setUp(initialState);
  });

  it("should hae 1 select element", () => {
    const element = wrapper.find("p");
    expect(element.length).toEqual(4);
  });
  it("mapStateToProps working", () => {
    const initialState = {
      data: {},
    };
    expect(mapStateToProps(initialState.data)).toEqual({});
  });
});
