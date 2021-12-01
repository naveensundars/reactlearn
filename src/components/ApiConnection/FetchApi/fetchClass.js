import React from "react";

class FetchClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => this.setState({ dataList: data }));
    }
    render() {
        let { dataList } = this.state;
        return (
            <div className="containerNode">
                <div className="listProduct">
                    {/* <ul>
                        {dataList.map((item) => (<li key={item.id}>{item.userId}</li>))}
                    </ul> */}
                </div>
                <div className="ListDetails">
                    <table className="tblStyle">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>user Id</td>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((item) => (<tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default FetchClass;