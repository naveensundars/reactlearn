import React, { useState } from 'react';
import { Provider } from './UseContext';
import * as Child from './child/index';
const dataValue = { name: 'naveen', logged: 'true' };
function ContextFunction() {
    const [values, setvalues] = useState(dataValue);
    const [count, setcount] = useState(1);
    function increment() {
        setcount((prevCount) => prevCount + 1)
    }
    function decement() {
        setcount((prevCount) => prevCount - 1)
    }
    function reset() {
        setcount(0)
    }
    return (
        <Provider value={{ values, count: count, increment: increment, decement: decement, reset: reset }}>
            <div className="ContextApi">
                Context Api class {values.logged}
                <Child.ChildOne></Child.ChildOne>
                <Child.ChildTwo></Child.ChildTwo>
                <Child.ChildThree></Child.ChildThree>
            </div>
        </Provider>
    )
}
export default ContextFunction;