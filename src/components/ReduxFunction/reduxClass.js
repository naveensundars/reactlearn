import React from "react";
import { connect } from "react-redux";
import { IncrementAction, DecrementAction, ResetAction } from "./redux/action/action";
class ReduxClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // console.log(this.props.history)
        let { CountReducer, IncrementAction, DecrementAction, ResetAction } = this.props;
        return (
            <div className="CounterPage">
                <h1>Class Component</h1>
                <h2>Count:{CountReducer}</h2>
                <button className="actBtns" onClick={() => IncrementAction()}>Increment</button>
                <button className="actBtns" onClick={() => DecrementAction()}>Decrement</button>
                <button className="actBtns" onClick={() => ResetAction()}>Reset</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        IncrementAction: () => dispatch(IncrementAction()),
        DecrementAction: () => dispatch(DecrementAction()),
        ResetAction: () => dispatch(ResetAction())
    };
};

const mapStateToProps = (state) => {
    return { CountReducer: state };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxClass);