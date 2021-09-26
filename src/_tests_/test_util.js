import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import reducers from "../reducers/index";

// const middlewares = [thunk];
// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(reducers, initialState);
// };
import configureStore from "redux-mock-store";
const mockStore = configureStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({ ...state });
};
