import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moxios from "moxios";
Enzyme.configure({ adapter: new Adapter() });
// import { testStore, test_util } from "./test_util";
import { makeMockStore } from "./test_util";

import loadCountry from "../actions";
import { details } from "./test_Objects";
const store = makeMockStore({ data: null });

describe("actions check", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test(" Store is updated correctly", () => {
    const expectedState = details[0];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    console.log(expectedState.name);
    // const store = testStore();
    return store.dispatch(loadCountry()).then(() => {
      //   const newState = store.getState();
      const actionsCalled = store.getActions();
      console.log("actions type ", actionsCalled[0].type);
      console.log("action data", actionsCalled[0].data);
      expect(actionsCalled[0].data).toBe(expectedState);
    });
  });
});
