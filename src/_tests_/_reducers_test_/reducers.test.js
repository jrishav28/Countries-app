import RegionReducer from "../../reducers";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { details } from "../_test_utils_/test_Objects";
Enzyme.configure({ adapter: new Adapter() });

describe("Poke Reducer", () => {
  it("Should return default state", () => {
    const newState = RegionReducer(undefined, {});
    expect(newState.data).toEqual(null);
  });

  it("Should return Charmeleon data if receiving type", () => {
    const expected_data = details[0];
    const newState = RegionReducer(undefined, {
      type: "CHANGE_REGION",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });

  // it("Should return Charizard data if receiving type", () => {
  //   const expected_data = details[1];
  //   const newState = RegionReducer(undefined, {
  //     type: "CHANGE_REGION",
  //     data: expected_data,
  //   });
  //   expect(newState.data).toEqual(expected_data);
  // });

  // it("Should return  Squirtle data if receiving type", () => {
  //   const expected_data = details[2];
  //   const newState = RegionReducer(undefined, {
  //     type: "CHANGE_REGION",
  //     data: expected_data,
  //   });
  //   expect(newState.data).toEqual(expected_data);
  // });

  // it("Should return  Wartortle data if receiving type", () => {
  //   const expected_data = details[3];
  //   const newState = RegionReducer(undefined, {
  //     type: "CHANGE_REGION",
  //     data: expected_data,
  //   });
  //   expect(newState.data).toEqual(expected_data);
  // });
});
