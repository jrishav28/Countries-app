import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: false });
import { App } from "./App";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("demo", () => {
  it("sum", () => {
    expect(2 + 3).toBe(5);
  });
});
// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// describe("App componen", () => {
//   it("it Should Display Header", () => {
//     const wrapper = mount(<App />);
//     const text = wrapper.find("div header h1");
//     expect(text.text()).toEqual("Know Your Pokemon");
//   });
// });
//
