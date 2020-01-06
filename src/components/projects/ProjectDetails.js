import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ricky McConnell</div>
          <div>6th January, 2pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
