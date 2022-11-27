// import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Pagelayout from './Pagelayout';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import View from './View';
import Topbar from './Topbar'
// import axios from "axios";
// import Update from './Update';
// import Delete from './Delete';



function Tables({passing,loading}) {
   
  

    return (
        <>
        {/* <Pagelayout/> */}
        <Topbar/>
        
        
        {
                             loading? <div id='loading' class="d-flex justify-content-center">
                             <div class="spinner-border" role="status">
                                 {/* <span class="visually-hidden">Loading...</span> */}
                             </div>
                             </div> :
       

            <div className='table'>
                <div >
                    <table width="60%" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                             

                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                              
                            </tr>
                        </tfoot>
                       
                        <tbody>

                            {passing.map((get,index) => {
                                return <tr>
                                    <th>{index+1}</th>
                                    <td>{get.name}</td>
                                    <td>{get.email}</td>
                                    <td>
                                        <Link to={`/view/${get.id}`} className="btn btn-success mr-1">View</Link> {""}
                                        <Link to={`/update/${get.id}`} className="btn btn-primary mr-1">Update</Link> {""}
                                        <Link to={`/delete/${get.id}`} className="btn btn-danger ">Delete</Link>
                                    
                                    </td>
                                </tr>
                            })}



                        </tbody>


                    </table>
                </div>
            </div>
}

        </>
    )
}

export default Tables