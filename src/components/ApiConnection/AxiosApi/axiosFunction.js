import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosFunction() {

    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((data) => { setDataList(data.data) });
    }, [])
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
export default AxiosFunction;