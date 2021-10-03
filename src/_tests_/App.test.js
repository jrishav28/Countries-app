import { App } from "../components/App";
import Enzyme, { shallow, mount, render } from "enzyme";
import React from "react";
import { makeMockStore } from "./test_util/test_util";
import getPoke from "../reducers/index";
import AppContainer, {
  mapStateToProps,
  mapDispatchToProps,
} from "../containers/AppContainer";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);

  const wrapper = shallow(<App store={store} />, {
    disableLifecycleMethods: true,
  });
  return wrapper;
};

describe("App Component", () => {
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
  it("props check", () => {
    expect(wrapper.find(mapStateToProps)).toBeCalled;
  });
  it("props check", () => {
    const props = {
      onchange: (fn) => fn,
      changePoke: (fn) => fn,
    };
    const w = shallow(<App {...props} />);
    // console.log(w.props);
    expect(w.find(mapDispatchToProps)).toBeCalled;
  });
  it(" mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).changePoke();
    expect(dispatch.mock.calls[0][0]).toBeCalled;
  });
});
