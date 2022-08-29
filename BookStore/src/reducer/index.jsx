import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  cartReducer,
  bookReducer,
});

export default rootReducer;
