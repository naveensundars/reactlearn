import React, { useState, useEffect } from "react";
import axios from "axios";
import { CONFIG } from './servicework'
function CurdSampleService() {
    const [curdData, setcurdDate] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [profile, setProfile] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [isAdd, isSetAdd] = useState(false)
    useEffect(() => {
        CONFIG.getDetails().then((data) => { setcurdDate(data.data) });
    }, [])
    function editAction(e) {
        setIsShow(!false);
        CONFIG.getDetailsId(e.id).then((data) => {
            setId(data.data.id);
            setName(data.data.name);
            setProfile(data.data.profile)
        });
    }
    function deleteAction(e) {
        CONFIG.deleteDetails(e.id);
    }
    function closePopup(e, action, value) {
        if (action == 'close') {
            setIsShow(current => !current);
            e.preventDefault();
        } else if (action == 'update') {
            CONFIG.updateDetails(value, name, profile)
            setIsShow(current => !current);
            e.preventDefault();
        } else {
            CONFIG.createDetails(name, profile)
            setIsShow(current => !current);
            e.preventDefault();
        }
    }
    function addAction() {
        setIsShow(true);
        isSetAdd(true);
    }
    return (<>
        <table className="tblStyle">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Profile</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {curdData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.profile}</td>
                        <td>
                            <button onClick={() => editAction(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                            </button>
                            <button onClick={() => deleteAction(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        <button className="btnclass" onClick={() => addAction()}>Add</button>
        <div className={isShow ? 'popup active' : 'popup'}>
            <h2>Edit Data</h2>
            <div>
                <form className="form-class">
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Profile</label>
                        <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)}></input>
                    </div>
                    <button onClick={(e) => closePopup(e, 'close')} className="btnclass">Cancle</button>
                    {isAdd === true ? <button onClick={(e) => closePopup(e, 'add', id)} className="btnclass">Add</button> : <button onClick={(e) => closePopup(e, 'update', id)} className="btnclass">Update</button>}
                </form>
            </div>
        </div>
    </>)
}
export default CurdSampleService;