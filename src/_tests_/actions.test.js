import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getPoke from "../actions";

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

describe("handles getPoke", () => {
  beforeEach(() => {
    store.clearActions();
  });
  const store = mockStore();
  store.dispatch(getPoke());

  it("Should return CHANGE_REGION action", () => {
    const payload = { name: "charmeleon", abilities: ["blaze", "torrent"] };
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/charmeleon")
      .reply(200, payload);

    return store.dispatch(getPoke()).then(() => {
      const expectedActions = {
        type: "CHANGE_REGION",
        data: payload,
      };
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });

  it("Should return FETCH_ERROR action", () => {
    const payload = "error";
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/charmeleon")
      .reply(500, payload);

    return store.dispatch(getPoke()).then(() => {
      const expectedActions = {
        type: "Fetch_Error",
        data: payload,
      };
      expect(store.getActions()[0]).toEqual(expectedActions);
    });
  });
});
