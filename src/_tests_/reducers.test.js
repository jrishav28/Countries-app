import pokeReducer from "../reducers";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Poke Reducer", () => {
  it("Should return default state", () => {
    const newState = pokeReducer(undefined, {});
    expect(newState.data).toEqual(null);
  });
  it("Should return Charmeleon data", () => {
    const expected_data = {
      name: "charmeleon",
      abilities: ["blaze", "torrent"],
    };
    const newState = pokeReducer(undefined, {
      type: "CHANGE_REGION",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });
  it("Should give fetch error ", () => {
    const expected_data = {
      data: "error",
    };
    const newState = pokeReducer(undefined, {
      type: "Fetch_Error",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });
});
