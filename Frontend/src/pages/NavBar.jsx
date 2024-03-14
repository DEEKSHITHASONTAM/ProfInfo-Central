import React from "react";
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

function NavBar(props){
    if(props.who === "faculty"){
        return(
            <>
         <div className="nav">
            <div className="heading">
                <img className="logo" src="./images/iitk.gif" alt="" />
                <h1>ProfInfo Central</h1>
            </div>
             <ul>
                 <li><Link className="a" to="/DataTable">Log Out</Link></li>
                 <li><Link className="a" to="/Login">Log in</Link></li>
                 {/* <li><Link className="a" to="/About">About</Link></li> */}
                 <li><Link className="a" to="/Faculty/Cse">Faculty</Link></li>
                 <li><Link className="a" to="/ContactUs">Contact us</Link></li>
                 <li><Link className="a" to="/">Projects</Link></li>
           </ul>
           
        </div>
                <Outlet />
        </>
        )
    }else{
        return(
            <>
         <div className="nav">
            <div className="heading">
                <img className="logo" src="./images/iitk.gif" alt="" />
                <h1>ProfInfo Central</h1>
            </div>
             <ul>
                 <li><Link className="a" to="/DataTable">Log Out</Link></li>
                 {/* <li><Link className="a" to="/Login">Log in</Link></li> */}
                 {/* <li><Link className="a" to="/About">About</Link></li> */}
                 {/* <li><Link className="a" to="/Faculty/Cse">Faculty</Link></li> */}
                 <li><Link className="a" to="/ContactUs">Contact us</Link></li>
                 <li><Link className="a" to="/">Projects</Link></li>
           </ul>
           
        </div>
                <Outlet />
        </>
        )

    }
  
}

export default NavBar;