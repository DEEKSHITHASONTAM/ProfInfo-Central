import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './History.css';

function History() {
    const [projectHistory] = useState([
        { name: 'Project 1', status: 'Accepted', professor: 'Dr. Smith', id: 1, details: 'project1-details' },
        { name: 'Project 2', status: 'Rejected', professor: 'Dr. Johnson', id: 2, details: 'project2-details' },
        { name: 'Project 3', status: 'Accepted', professor: 'Dr. Brown', id: 3, details: 'project3-details' }
    ]);

    const navigate = useNavigate();

    const handleDetailsClick = (details) => {
        navigate('/ProjectDesc');
    };

    return (
        <div className="container">
            <h1 className="project-history-title">Project History</h1>
            <div className="history-table">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}>S. No.</th>
                            <th style={{ width: '750px' }}>Project Name</th>
                            <th style={{ width: '300px' }}>Accepted/Rejected</th>
                            <th style={{ width: '300px' }}>Professor Name</th>
                            <th style={{ width: '300px' }}>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectHistory.map((project, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{project.name}</td>
                                <td>{project.status}</td>
                                <td>{project.professor}</td>
                                <td><button onClick={() => handleDetailsClick(project.details)}>Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;
