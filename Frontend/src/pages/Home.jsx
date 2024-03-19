import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container18">
      <div className="row8">
        <h1 className="display-48 mb-5">Welcome to <span>Student</span> dashboard!!</h1>
        {/* <span className="message1">
          Start your journey towards excellence by finding projects that match
          your interests and skills.
        </span> */}
        <p className="lead8">
        "Discover a curated array of research endeavors spanning AI to environmental science. Explore exciting insights and discoveries, welcoming enthusiasts, fellow researchers, and potential collaborators to dive into diverse disciplines and projects."
        </p>
        <div className="explore_buttons_home">
          <Link to="/Student">
            <button className="explore-project">Explore Projects</button>
          </Link>
          <Link to="/Faculty/Cse">
            <button className="explore-faculty">Explore Faculty</button>
          </Link>
        </div>
      </div>
      <div className="home-img">
        <img src="images/home_image_2.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
