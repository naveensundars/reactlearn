import { IncrementCount, DecrementCount, ResetCount } from "../action/action";
//reducers
const CountReducer = (state, action) => {
    switch (action.type) {
        case IncrementCount:
            return state + 1;
        case DecrementCount:
            return state - 1;
        case ResetCount:
            return state = 0;
        default:
            return state = 0;
    }
}

export default CountReducer;