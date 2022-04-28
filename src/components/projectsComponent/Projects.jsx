import "./../../sass/projects/projects.scss";
import ProjectComponent from "./ProjectComponent";
import projects from "../../api/api";

const Projects = () => {
    const project = projects;
    return (
        <div className="projects-container">
            <div className="projects-item">
                {project.map((project) => (
                    <ProjectComponent
                        key={project.id}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};
export default Projects;
