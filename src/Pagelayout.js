    import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
    
    function Pagelayout() {
      return (
        <>
        <Topbar/>
        <Outlet/>
        </>
      )
    }
    
    export default Pagelayout