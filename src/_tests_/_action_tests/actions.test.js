import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moxios from "moxios";
import { makeMockStore } from "../_test_utils_/test_util";
import loadCountry from "../../actions";
import { details } from "../_test_utils_/test_Objects";
const store = makeMockStore({ data: null });

Enzyme.configure({ adapter: new Adapter() });
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
    store.dispatch(loadCountry()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].data).toEqual(expectedState);
    });
  });

  it(" if api error", () => {
    const expectedState = false;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: false,
      });
    });
    console.log(expectedState);
    store.dispatch(loadCountry()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].data).toBe(expectedState);
    });
  });
});
