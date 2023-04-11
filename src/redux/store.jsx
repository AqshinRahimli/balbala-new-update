import { legacy_createStore as createStore } from "redux";
import products from "./reducers/products";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(products, composeWithDevTools());

export default store;