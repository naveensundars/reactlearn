import React from 'react';
import { Consumer } from '../UseContext';
class ChildTwo extends React.Component {
    render() {
        return (
            <Consumer>
                {(userValue) => { return (<div className="innerChilds">Count {userValue.count}</div>) }}
            </Consumer>
        )
    }
}
export default ChildTwo;