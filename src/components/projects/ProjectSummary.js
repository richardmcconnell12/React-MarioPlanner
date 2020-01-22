import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by: {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
        <button className="edit-project-btn btn pink lighten-1 z-depth-0">
          Edit Project
        </button>
        <button className="delete-project-btn btn pink lighten-1 z-depth-0">
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ProjectSummary;
