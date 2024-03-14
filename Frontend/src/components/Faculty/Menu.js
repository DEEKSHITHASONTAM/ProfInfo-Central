import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Menu() {
  return (
    <div>
        <div className='slider'>
          <div className="dabba1"> <Link  to="/Faculty/Cse">Computer</Link></div>
          <div className="dabba2"><Link  to="/Faculty/Ee">Electrical</Link></div>
          <div className="dabba3"><Link  to="/Faculty/Ce">Civil</Link></div>
          <div className="dabba4">Civil Engineering</div>
          <div className="dabba5">Computer Science & Engineering</div>
          <div className="dabba6">Electrical Engineering</div>
          <div className="dabba7">Materials Science & Engineering</div>
          <div className="dabba8">Mechanical Engineering</div>
          <Outlet />
        </div>
    </div>
  )
}

export default Menu
