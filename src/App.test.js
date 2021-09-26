import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import React from "react";
import { makeMockStore } from "./_tests_/_test_utils_/test_util";
import { details } from "./_tests_/_test_utils_/test_Objects";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
let store;
const setUp = (initialState = {}) => {
  store = makeMockStore(initialState);
  const wrapper = mount(<App store={store} />);
  return wrapper;
};

describe("App Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = details[0];
    wrapper = setUp(initialState);
  });

  it("should Display Header", () => {
    const text = wrapper.find("div header h1");
    expect(text.text()).toEqual("Know Your Pokemon");
  });

  it("shound show two select statements", () => {
    expect(wrapper.find("select").length).toEqual(2);
  });

  it("Select element should have 4 options", () => {
    expect(wrapper.find("#poke-names option").length).toEqual(4);
  });
});
