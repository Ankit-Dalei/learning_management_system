import React from 'react';
import "./brancee.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Table() {
    return (
        <div className='mainn'>
            <div className="maintainer">
                <div className="tbl_maintainer">
                    <h2>Brance Table</h2>
                    <form className='w-[500px] realative' style={{width:'400px',position:'relative', float:'right',borderRadius:'3px'}} >
                    <div className='relative' style={{position:'relative'}}>
                        <input type='search' placeholder='Search Me' className='w-full p-4 rounded-full bg-slate-800' style={{width:'80%',padding:'8px',backgroundColor:'#424949',borderRadius:'4px'}}/>
                        <button  >
                            
                        </button>
                    </div>
                </form>
                    <table className="tbl">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Number</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-table="User ID">12</td>
                                <td data-table="User Name">aryan</td>
                                <td data-table="User Email">aryan@gmail</td>
                                <td>active</td>
                                <td>
                                    <button><i className="edit_btn"><EditIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                                <td>
                                    <button><i className="edit_btn"><DeleteIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>aryan</td>
                                <td>aryan@gmail</td>
                                <td>active</td>
                                <td>
                                    <button><i className="edit_btn"><EditIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                                <td>
                                    <button><i className="edit_btn"><DeleteIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>aryan</td>
                                <td>aryan@gmail</td>
                                <td>active</td>
                                <td>
                                    <button><i className="edit_btn" ><EditIcon style={{ background: '#424949', padding: '2px', }} /></i></button>
                                </td>
                                <td>
                                    <button><i className="edit_btn"><DeleteIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>aryan</td>
                                <td>aryan@gmail</td>
                                <td>active</td>
                                <td>
                                    <button><i className="edit_btn"><EditIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                                <td>
                                    <button><i className="edit_btn"><DeleteIcon style={{ background: '#424949', padding: '2px' }} /></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
