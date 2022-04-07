import React from 'react';
import { Consumer } from '../UseContext';

class ChildOne extends React.Component {
    render() {
        return (
            <Consumer>
                {(userValue) => {
                    return (<div className="innerChilds">Child One {userValue.name}</div>)
                }}
            </Consumer>

        )
    }
}
export default ChildOne;