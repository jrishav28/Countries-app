import {
  mapStateToProps,
  mapDispatchToProps,
} from "../containers/AppContainer";
describe("App", () => {
  it("mapStateToProps working", () => {
    const initialState = {
      data: {},
    };
    expect(mapStateToProps(initialState.data)).toEqual({});
  });
  it("mapdispatchToProps working", () => {
    const dispatch = function () {};
    expect(mapDispatchToProps(dispatch).changePoke).toBeCalled;
  });
});
