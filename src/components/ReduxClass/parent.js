import React from "react";

import Child from "./child";

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'parent to child',
        }
    }
    render() {
        let{data}=this.state;
        return (
            <div>
                Hello Parent
                <Child parenttoChild={data} />
            </div>

        )
    }
}

export default Parent;