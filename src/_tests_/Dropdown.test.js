import Dropdown from "../components/Dropdown";
import Enzyme, { shallow, mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });
describe("Dropdown Component ", () => {
  const change = () => {};
  let wrapper;
  let props = {
    data: ["charmeleon", "charizard"],
    value: "",
    change,
  };
  // console.log(props);
  it("should hae 1 select element", () => {
    wrapper = shallow(<Dropdown {...props} />);
    const element = wrapper.find("select");
    expect(element.length).toEqual(1);
  });
  it("should show options", () => {
    wrapper = shallow(<Dropdown {...props} />);
    const element = wrapper.find("option");
    expect(element.length).toEqual(2);
  });
  it("simulates change events", () => {
    const wrapper = shallow(<Dropdown {...props} />);
    console.log(wrapper.instance());
    wrapper
      .find("select")
      .simulate("change", { target: { value: "charmeleon" } });
    expect(wrapper.find("change")).toBeCalled;
  });
});
