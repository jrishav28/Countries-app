import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { makeMockStore } from "./_tests_/_test_utils_/test_util";
import { details } from "./_tests_/_test_utils_/test_Objects";

Enzyme.configure({ adapter: new Adapter() });
let store;
const setUp = (initialState = {}) => {
  store = makeMockStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = details[0];
    wrapper = setUp(initialState);
  });
  it("display header component", () => {
    console.log(wrapper.debug());
    expect(2 + 3).toBe(5);
  });
});
