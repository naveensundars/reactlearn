import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementAction, DecrementAction, ResetAction } from "./redux/action/action"
function ReduxFunctional() {
    // const IncrementCount = "IncrementCount";
    // const DecrementCount = "IncrementCount";

    // const IncrementAction = () => ({ type: IncrementCount })
    // const DecrementAction = () => ({ type: DecrementCount })

    // const CountReducer = (state, action) => {
    //     switch (action.type) {
    //         case IncrementCount:
    //             return state = 1;
    //         case DecrementCount:
    //             return state = 0;
    //         default:
    //             break;
    //     }
    // }
    // let store = createStore(CountReducer);
    // store.subscribe(() => { console.log(store.getState()) })
    // store.dispatch(IncrementAction());
    // store.dispatch(DecrementAction());
    const CountReducer = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div className="CounterPage">
            <h1>Functional Component</h1>
            <h2>Count:{CountReducer}</h2>
            <button className="actBtns" onClick={() => dispatch(IncrementAction())}>Increment</button>
            <button className="actBtns" onClick={() => dispatch(DecrementAction())}>Decrement</button>
            <button className="actBtns" onClick={() => dispatch(ResetAction())}>Reset</button>
        </div>
    )
}
export default ReduxFunctional;