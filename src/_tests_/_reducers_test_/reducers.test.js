import pokeReducer from "../../reducers";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { details } from "../_test_utils_/test_Objects";
Enzyme.configure({ adapter: new Adapter() });

describe("Poke Reducer", () => {
  it("Should return default state", () => {
    const newState = pokeReducer(undefined, {});
    expect(newState.data).toEqual(null);
  });
  it("Should return Charmeleon data", () => {
    const expected_data = details[0];
    const newState = pokeReducer(undefined, {
      type: "CHANGE_REGION",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });
});
