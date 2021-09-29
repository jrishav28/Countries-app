import { App } from "../components/App";
import Enzyme, { shallow, mount, render } from "enzyme";
import React from "react";
import { makeMockStore } from "./test_util/test_util";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);
  const wrapper = shallow(<App store={store} />, {
    disableLifecycleMethods: true,
  });
  return wrapper;
};

describe("App Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { data: "" };
    wrapper = setUp(initialState);
  });

  it("should Display  Header", () => {
    const text = wrapper.find("div header h1");
    expect(text.text()).toEqual("Know Your Pokemon");
  });

  it("shound show 1 Select Component", () => {
    expect(wrapper.find("Connect(SelectComp)")).toHaveLength(1);
  });

  it("shound have PokeDetails Component", () => {
    expect(wrapper.find("Connect(PokeDetails)")).toHaveLength(1);
  });
});
