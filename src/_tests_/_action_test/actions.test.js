import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moxios from "moxios";
import { makeMockStore } from "../_test_utils_/test_util";
import getPoke from "../../actions";
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

  it("Store is updated correctly ", () => {
    const expectedState = details[0];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    store.dispatch(getPoke()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].data).toEqual(expectedState);
    });
  });

  it("Store not updated if error in api call", () => {
    const expectedState = false;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: false,
      });
    });
    store.dispatch(getPoke()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].data).toBe(expectedState);
    });
  });
});
