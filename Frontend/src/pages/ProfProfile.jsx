import React from 'react';
import "./ProfProfile.css";

const ProfProfile = () => {
  const user = {
    name: 'Urbi Chatterji',
    department: 'Computer Science and Engineering',
    email: 'info@example.com',
    office: '123 456 789',
    researchWork: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores, architecto totam amet iusto fuga exercitationem qui, ipsam consequatur repellat atque. Et iste quis perspiciatis, quisquam mollitia voluptatem ut asperiores!',
  };

  return (
    <div className='Container'>
      <div style={{ backgroundColor: 'white', height: '100vh' }}>
        <div className="container1" >
          <div className="row justify-content-center align-items-center h-100">
            <div className="col655">
              <div className="cardmb-3" style={{ borderRadius: '.5rem' }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h2>{user.name}</h2>
                      <p className="mb-3" >{user.department}</p>
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <p className="mb-0">Email:</p>
                          <p className="text-muted">{user.email}</p>
                        </div>
                        <div className="col-md-4">
                          <p className="mb-0">Office Address:</p>
                          <p className="text-muted">{user.office}</p>
                        </div>
                      </div>
                      <p className="mb-3">Research Work:</p>
                      <p className="text-muted">{user.researchWork}</p>
                    </div>
                  </div>
                  <div className="col-md-4 gradient-custom text-center text-white" >
                    <img src="https://th.bing.com/th/id/OIP.4n5-ucoXLgr25qVSRKCjbgAAAA?rs=1&pid=ImgDetMain" alt="Avatar" className="my-5" style={{ width: '200px', height: '200px' }}  />
                    <i className="fas fa-edit mb-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfProfile;
