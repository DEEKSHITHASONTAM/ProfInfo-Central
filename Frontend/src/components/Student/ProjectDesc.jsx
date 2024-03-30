import React, { useState } from 'react';
import axios from 'axios';
import './projectdesc.css';

function About() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [Name, setName] = useState('');
  const [Branch, setBranch] = useState('');
  const [CPI, setCPI] = useState('');
  const [Batch, setBatch] = useState('');
  const [Past, setPast] = useState('');
  const [Resume, setResume] = useState('');

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleRequestClick = async () => {
    const mandatoryFields = document.querySelectorAll('.mandatory-field');
    let allFieldsFilled = true;
    mandatoryFields.forEach(field => {
      if (field.value.trim() === '') {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      alert('Please fill all mandatory fields with *');
      return;
    }

    try {
      const uniqueID = 'abhas'; // Replace with the actual unique ID
      const url = `https://mohdnasar-kartiks-projects-297f2e09.vercel.app/api/professor/${uniqueID}/createproject`;
  
      const response = await axios.post(url, {

      });
  
      if (response.status === 201) {
        console.log('Project created successfully');
        // navigate('/Project_list_prof');
      } else {
        console.error('Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error.message);
    }
    if (isCheckboxChecked && !isRequested) {
      setIsRequested(true);
      setIsCheckboxChecked(false);
      clearFields();
    }
  };

  const clearFields = () => {
    setName('');
    setBranch('');
    setCPI('');
    setBatch('');
    setPast('');
    setResume(''); return;
  };

  return (
    <div>
      <div className="project-details-container">
        <h2>Requesting the project</h2>
        <form>
          <label id="kartik" className="project-form-label" htmlFor="project-name">
            Your Name*:
          </label>
          <input type="text" id="project-name" name="project-name" className="mandatory-field" value={Name} onChange={(e) => setName(e.target.value)} />
          <label id="kartik" className="project-form-label" htmlFor="Description">
            Branch*:
          </label>
          <input type="text" id="Description" name="Description" className="mandatory-field" value={Branch} onChange={(e) => setBranch(e.target.value)} />
          <label id="kartik" className="project-form-label" htmlFor="project-name">
            Cpi*:
          </label>
          <input type="number" id="project-name" name="project-name" className="mandatory-field" value={CPI} onChange={(e) => setCPI(e.target.value)} />
          <label id="kartik" className="project-form-label" htmlFor="prerequisites">
            Batch*:
          </label>
          <input type="text" id="prerequisites" name="prerequisites" placeholder="Batches" className="mandatory-field" value={Batch} onChange={(e) => setBatch(e.target.value)} />
          <label id="kartik" className="project-form-label" htmlFor="open_for">
            Any past experience:
          </label>
          <input type="text" id="openFor" name="openFor" value={Past} onChange={(e) => setPast(e.target.value)} />
          <label id="kartik" className="project-form-label" htmlFor="resume">
            Resume*:
          </label>
          <input type="text" id="openFor" name="openFor" placeholder="Upload drive link" className="mandatory-field" value={Resume} onChange={(e) => setResume(e.target.value)} />
          <div className="checkbox-container">
            <input type="checkbox" id="declaration-checkbox" onChange={handleCheckboxChange} />
            <label id="kartik" className="project-form-label" htmlFor="declaration-checkbox">
              * I hereby declare that all the above information given by me are true to the best of my knowledge
            </label>
          </div>
          <div className="project-buttons">
            <button className="button" id="cancel-button">
              Cancel
            </button>
            <button className="button" disabled={!isCheckboxChecked || isRequested} onClick={handleRequestClick}>
              {isRequested ? 'Requested' : 'Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  }

export default About;
