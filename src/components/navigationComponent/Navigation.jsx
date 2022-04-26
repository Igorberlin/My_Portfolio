import { NavLink } from "react-router-dom";
import "./../../sass/navigation/navigation.scss";

const Navigation = () => {
    return (
        <ul className="app-nav">
            <li>
                <NavLink to="/"> Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects"> Projects</NavLink>
            </li>
            <li>
                <NavLink to="/cv"> CV</NavLink>
            </li>
        </ul>
    );
};
export default Navigation;
