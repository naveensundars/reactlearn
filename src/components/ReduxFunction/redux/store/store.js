import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import CountReducer from "../reducer/reducer";


//let store = createStore(CountReducer,(applyMiddleware(thunk)));
let store = createStore(CountReducer);
// store.subscribe(() => { console.log(store.getState()) })
// store.dispatch(CountReducer);
//store.dispatch(DecrementAction());

export default store;