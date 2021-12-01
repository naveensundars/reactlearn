import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.parenttoChild,
        }
    }
    render() {
        let { data } = this.state;
        return (
            <div>Hello {data}</div>
        )
    }
}
export default Child;