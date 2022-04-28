import React from "react";

const ProjectComponent = ({ link, title, description, image }) => {
    return (
        <div className="container">
            <div className="project-header">
                <h2>{title}</h2>
            </div>
            <div className="project-body">
                <a href={link} target="_blank">
                    <img src={image} />
                </a>
            </div>

            <div className="project-footer">
                <p>
                    Created with:
                    {description}
                </p>
            </div>
        </div>
    );
};
export default ProjectComponent;
