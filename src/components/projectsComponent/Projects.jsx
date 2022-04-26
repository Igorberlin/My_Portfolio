import "./../../sass/projects/projects.scss";
import PhoneBookProject from "./PhoneBookProject";
import BurgerMenuComponent from "./BurgerMenuComponent";
import BeforeAfterProject from "./BeforeAfterProject";
import ToDoProject from "./ToDoProject";

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-item">
                <BurgerMenuComponent />
                <PhoneBookProject />
                <ToDoProject />
                <BeforeAfterProject />
            </div>
        </div>
    );
};
export default Projects;
