import React from 'react';
import { Provider } from './UseContext';
import * as Child from './child/index';
const dataValue = { name: 'naveen', logged: 'true' };
class ContextClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: dataValue,
            count: 1
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: 0 })
    }
    render() {
        let { values, count } = this.state;
        return (
            <Provider value={{ values, count: count, increment: this.increment, decement: this.decement, reset: this.reset }}>
                <div className="ContextApi">
                    Context Api class {values.logged}
                    <Child.ChildOne></Child.ChildOne>
                    <Child.ChildTwo></Child.ChildTwo>
                    <Child.ChildThree></Child.ChildThree>
                </div>
            </Provider>
        )
    }

}
export default ContextClass;