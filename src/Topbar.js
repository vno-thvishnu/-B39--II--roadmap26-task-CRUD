import React from 'react'

import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <>
    <div className='topbar'>

        <h1 style={{color: "white"}}>CRUD</h1>
        {/* <button>create</button>  */}
        <Link to="/create" className="btn btn-warning mr-1">create</Link> 
        


    </div>
    </>
  )
}

export default Topbar