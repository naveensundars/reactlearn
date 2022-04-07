import React from 'react';
import { Consumer } from '../UseContext';

class ChildThree extends React.Component {
    render() {
        return (
            <Consumer>
                {(action)=>{
                    return(  <>
                        <button className="actBtns" onClick={action.increment}>Increment</button>
                        <button className="actBtns" onClick={action.decement}>Decrement</button>
                        <button className="actBtns" onClick={action.reset}>Reset</button>
                    </>)
                }}
            </Consumer>
          

        )
    }
}
export default ChildThree;