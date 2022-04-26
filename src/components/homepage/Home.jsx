import React, { useEffect, useState } from "react";
import HomePagePhoto from "./../../img/home-page-img.jpg";
import { CSSTransition } from "react-transition-group";

import "./../../sass/homepage/homepage.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="homepage-container">
            <div className="homepage-item">
                <CSSTransition
                    timeout={1200}
                    classNames="homepage-photo-transition"
                    in={show}
                >
                    <div className="photo-container ">
                        <img src={HomePagePhoto} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    timeout={1200}
                    classNames="homepage-about-transition"
                    in={show}
                >
                    <div className="about-me-text-container">
                        <p>Welcome!!!</p>
                        <p>I am very glad that you visited my page</p>
                        <h2>
                            My name is Igor,
                            <br /> I am a front end developer
                        </h2>
                        <p>
                            Since 2011 I living in Berlin. I started developing
                            in May 2021. I am a creative person, I like to
                            create a user interface, I like to develop
                            components for the site and visualize my work. In
                            November 2021, I have finished one of the best
                            International IT technology schools: Tel-Ran GmbH,
                            where I got a professional degree in Fullstack Web
                            Development and Testing. On my page you will find
                            some information about me,{" "}
                            <Link
                                to="/projects"
                                style={{ color: "rgb(250, 175, 12)" }}
                            >
                                {" "}
                                my projects
                            </Link>{" "}
                            and
                            <Link
                                to="/cv"
                                style={{ color: "rgb(250, 175, 12)" }}
                            >
                                {" "}
                                CV
                            </Link>{" "}
                            . I am currently looking for a full-time front-end
                            developer position and I am open to suggestions and
                            negotiations.
                        </p>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};
export default Home;
