import React from 'react'
import './project_list_prof.css'
import ProjectData  from './ProfProject'
import {Link } from "react-router-dom"


function TotalProjects(props) {
  function expand() {
    const projectDiv = document.getElementById(`project-${props.index}`);
    const button = document.getElementById(`expand-button-${props.index}`);
    if(projectDiv.style.height == '370px'){
      button.innerText ="Show More";
      projectDiv.style.height = '200px';
    }
    else{
      button.innerText ="Show Less ";
      projectDiv.style.height = '370px';
    }
  }
  return (
    <div id={`project-${props.index}`} className='each-project'>
      <h2>{props.name}</h2>
      <p>{props.details}</p>
      <div className="normal-details">
        <button>Enrolled Students</button>
        <button>Requests</button>
       
        <button id={`expand-button-${props.index}`} onClick={expand}>Show More</button>
         
      </div>
      <div className="side-karo">
      <div className='expanded-details'>
      <span style={{ color: 'blue', fontWeight:"530" }}>Open for: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"}}>{props.batches}</span></span>
      <span style={{ color: 'blue', fontWeight:"500" }}>Resume required: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"} }>{props.resume}</span></span>
    <span style={{ color: 'blue', fontWeight:"500" }}>Total Students: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"} }>{props.students}</span></span>
    <span style={{ color: 'blue', fontWeight:"500" }}>Additional Details: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"}}>{props.additional}</span></span>
         </div>
         <div className="second-details">
         <h4 style={{ color: 'blue' }}>Cpi Required: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"}}>{props.cpi}</span></h4>
        <h4 style={{ color: 'blue' }}>Pre-Requisite: <span style={{ color: 'black', fontWeight:"500", fontSize:"15px"}}>{props.preReq}</span></h4>
         </div>
         <div className="editing">
          <button>Edit</button>
          <button>Delete</button>
         </div>
         </div>
    </div> 
  );
}

function Project_list_prof() {
  return (
    <div>
      {/* <h1 className='random'>this is home page</h1> */}
       <div className="prof-projects-list">
        <div className="porjects-heading-note">
          <h2>Ongoing projects:-</h2>
          <Link className="a" to="/NewProject"><button>Add New Project</button></Link> 
        </div>

           {
            ProjectData.map((item, index) => {
             
              return(
                <TotalProjects 
                key ={index}//
                index ={index}//
                 name ={item.projectName} //
                 details ={item.details} //
                 cpi ={item.cpi} //
                 batches ={item.batches} //
                 additional ={item.additional}
                 preReq ={item.preReq} //
                 resume ={item.resume}//
                 students ={item.noOfStudents}
                />
              )
            })
           }
          
       </div>
     
    </div>
  )
}

export default Project_list_prof
