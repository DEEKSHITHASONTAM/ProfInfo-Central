import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function HomeFaculty() {
  return (
    <div className="container18">
      <div className="row8">
        <h1 className="display-48 mb-5">Welcome to <span>Faculty</span> dashboard!!</h1>
        {/* <span className="message1">
          Start your journey towards excellence by finding projects that match
          your interests and skills.
        </span> */}
        <p className="lead8">
        "Discover a curated array of research endeavors spanning AI to environmental science. Explore exciting insights and discoveries, welcoming enthusiasts, fellow researchers, and potential collaborators to dive into diverse disciplines and projects."
        </p>
        <div className="explore_buttons_home">
          <Link to="/Project_list_prof">
            <button className="explore-project">Your Projects</button>
          </Link>
          <Link to="/ProfProfile">
            <button className="explore-faculty">View Profile</button>
          </Link>
        </div>
      </div>
      <div className="home-img-2">
        <img src="images/prof-profile-image.png" alt="" />
      </div>
    </div>
  );
}

export default HomeFaculty;
