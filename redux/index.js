import { createStore,combineReducers } from "redux";
import cardReducer from "./CardReducer";
import commReducer from "./CommReducer";
import reducer from "./reducer";

 const reducers = combineReducers({
    FormDetail: reducer,
    comm:commReducer,
    card:cardReducer
})

export default createStore((state,action) =>reducers(state,action));
  