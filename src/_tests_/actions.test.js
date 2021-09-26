import Enzyme from "enzyme";
import loadCountry from "../actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe("actions", () => {

//   it("it Has correct Type", () => {
//     const a = loadCountry();
//     console.log(a);
//   });
// });
