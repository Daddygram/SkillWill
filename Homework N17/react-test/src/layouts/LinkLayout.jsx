import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const linklayout = () => {
  return (
    <div>
      <button className='btn'> 
      <Link to= {"/"}>Home</Link>
      </button>
      
      <button className='btn'> 
      <Link to= {"/about"}>About</Link> 
      </button>
        
        

        <Outlet/>
    </div>
  )
}

export default linklayout