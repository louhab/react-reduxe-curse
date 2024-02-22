import { combineReducers } from "redux";
import { productsReducer } from "./ProductReducer";
import {selectedProductReducer} from "../reducers/ProductReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product : selectedProductReducer
});
export default reducers;

