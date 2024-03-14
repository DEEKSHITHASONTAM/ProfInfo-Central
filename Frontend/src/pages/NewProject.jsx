import React from 'react'
import './about.css'

function NewProject() {
  return (
    <div>
      {/* <h1 className="random">This is About page!!</h1> */}

      <div class="project-details-container">
     
     <form>
       <label id='kartik' className='project-form-label' htmlFor="project-name">Project Name:</label>
       <input
         type="text"
         id="project-name"
         name="project-name"
       />
       <label id='kartik' className='project-form-label' htmlFor="Description">Description:</label>
       <textarea 
       className='description'
         type="text"
         id="Description"
         name="Description"
     
       />
        <label id='kartik' className='project-form-label' htmlFor="project-name">Minimum Cpi:</label>
       <input
         type="text"
         id="project-name"
         name="project-name"
        
       />
       <label id='kartik' className='project-form-label' htmlFor="prerequisites">Prerequisites:</label>
       <input
         type="text"
         id="prerequisites"
         name="prerequisites"
     
       />
       <label id='kartik' className='project-form-label' htmlFor="open_for">Open For:</label>
       <input
         type="text"
         id="openFor"
         name="openFor"
         placeholder="Batches"
       />
       <label id='kartik' className='project-form-label' htmlFor="open_for">Category: </label>
       <input
         type="text"
         id="openFor"
         name="openFor"
         placeholder="e.g. Machine Learning"
       />
       <label id='kartik' className='project-form-label' htmlFor="resume">Resume:</label>
       <select
         id="resume"
         name="resume"
       >
         <option value="yes">Yes</option>
         <option value="no">No</option>
       </select>

       <label id='kartik' className='project-form-label' htmlFor="max-students">Total Students</label>
       <input
         type="number"
         id="max-students"
         name="max-students"
       />
       <div className="project-buttons">
       <button className="button" id="cancel-button" >
         Cancel
       </button>
       <button className="button" >
         Save
       </button>
       </div>
     </form>
   </div>

    </div>
  )
}

export default NewProject
