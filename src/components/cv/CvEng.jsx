import React from "react";
import Photo from "./../../img/Profile.jpg";

import "./../../sass/cv/cv-eng.scss";

const CvEng = () => {
    return (
        <div className="main-section">
            <div className="main-content-sections">
                <div className="about-me-section">
                    <h3 className="about-me-profession">Front End Engineer</h3>
                    <h1 className="about-me-name">Igor Kuznecov</h1>
                    <p>
                        I am a Frontend developer with proficiency in the core
                        web languages HTML/CSS/JavaScript and with experience
                        building web apps with Javascript libraries: React.js,
                        Redux and React Router Dom. I have experience with
                        responsive design, working with APIs, version control
                        (Git/Github), as well a good understanding of computer
                        science fundamentals.
                    </p>
                    <p>
                        I’m currently seeking a full-time position as a Front
                        End Engineer in a perspective company, where I can fully
                        use my knowledge and skills.
                    </p>
                </div>

                <div className="my-work-experience-section">
                    <h3 className="main-content-title"> Employment History</h3>

                    <div className="my-work-experience-company-block">
                        <h4 className="my-work-experience-position">
                            Lead Sales Manager,
                            <span className="my-work-experience-company">
                                Siberian Health GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            March 2004 - May 2021
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Germany
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Ensuring online sales functionality
                            </li>
                            <li className="my-work-experience-duty">
                                Solving problems with the work of the website,
                                <br /> testing and documenting the errors
                            </li>
                            <li className="my-work-experience-duty">
                                Communicating with colleagues and customers
                            </li>
                            <li className="my-work-experience-duty">
                                Training and mentoring new sales staff
                            </li>
                            <li className="my-work-experience-duty">
                                Sales organization
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="my-work-experience-position">
                            Office Assistant,
                            <span className="my-work-experience-company">
                                Sibvaleo GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            February 2012 - March 2014
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Germany
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Processing orders
                            </li>
                            <li className="my-work-experience-duty">
                                Maintaining files
                            </li>
                            <li className="my-work-experience-duty">
                                Bookkeeping
                            </li>
                        </ul>
                    </div>

                    <br />
                    <div>
                        <h4 className="my-work-experience-position">
                            Commercial Agent,
                            <span className="my-work-experience-company">
                                Varna GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            January 2011 - June 2011
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Pskov, Russia
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Product presentation
                            </li>
                            <li className="my-work-experience-duty">
                                Drafting contracts
                            </li>
                            <li className="my-work-experience-duty">
                                Organization of promotions
                            </li>
                        </ul>
                    </div>

                    <br />
                    <div>
                        <h4 className="my-work-experience-position">
                            Internship in Law,
                            <span className="my-work-experience-company">
                                Baltko GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            February 2010 - April 2010
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Pskov, Russia
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Checking documents for legal literacy
                            </li>
                            <li className="my-work-experience-duty">
                                Assistance in negotiations
                            </li>
                            <li className="my-work-experience-duty">
                                Legal support to the team
                            </li>
                        </ul>
                    </div>
                </div>

                <br />
                <div className="my-education-section">
                    <h3 className="main-content-title">Education</h3>
                    <div>
                        <h4 className="my-work-experience-position">
                            Full stack web developer and testing,
                            <span className="my-work-experience-company">
                                TelRan GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            May 2021 — November 2021
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Germany
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Learning computer science basics
                            </li>
                            <li className="my-work-experience-duty">
                                Working with APIs
                            </li>
                            <li className="my-work-experience-duty">
                                Creation of mini projects with using CSS,
                                Javascript
                                <br />
                                and React.js such as: todo-list, photo album,
                                food order page,
                                <br />
                                phone book page, popup-windows, form validation
                            </li>
                        </ul>
                    </div>
                    <br />
                    <h4 className="my-education-profecssion">
                        University of Law and Administration
                    </h4>
                    <p className="my-work-experience-period">
                        September 2005 - July 2010
                        <span className="my-work-experience-divider">|</span>
                        Pskov, Russia
                    </p>
                </div>
            </div>

            <div className="sidebar-section">
                <img src={Photo} alt="Photo" />

                <div className="contacts-section">
                    <h3 className="sidebar-title">Contacts</h3>
                    <div>
                        <span className="contacts-section-type">P:</span>
                        <a
                            className="contacts-section-link"
                            href="tel:+4917692630141"
                        >
                            +49 176 92630141
                        </a>
                    </div>
                    <div>
                        <span className="contacts-section-type">E:</span>
                        <a
                            className="contacts-section-link"
                            href="mailto:igorkuznecov@gmx.de"
                        >
                            igorkuznecov@gmx.de
                        </a>
                    </div>
                    <div>
                        <span className="contacts-section-type">A:</span>
                        <a
                            href="https://www.google.de/maps/place/Lindauer+Allee+40,+13407+Berlin/@52.5741551,13.3479307,17z/data=!3m1!4b1!4m5!3m4!1s0x47a853b91c6827e3:0xa9342e121d7e1370!8m2!3d52.5741519!4d13.3501193?hl=de"
                            className="contacts-section-link"
                            target="_blank"
                        >
                            Lindauer Allee 40,
                            <br />
                            <span className="indent">13407 Berlin</span>
                        </a>
                    </div>
                    <div>
                        <span className="contacts-section-type">G:</span>
                        <a
                            href="https://github.com/Igorberlin"
                            target="_blank"
                            className="contacts-section-link"
                        >
                            GitHub
                        </a>
                    </div>
                    <div>
                        <span className="contacts-section-type">L:</span>
                        <a
                            className="contacts-section-link"
                            href="https://www.linkedin.com/in/igor-kuznecov-6b784316b/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="soft-skills-section">
                    <h3 className="sidebar-title">Tech Skills</h3>
                    <ul className="soft-skills-list">
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                React.js
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                JavaScript
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                SCSS
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                CSS
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                HTML5
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Redux
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Bootstrap
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                RestAPI
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                VS Code
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Figma
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Postman
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                MongoDB
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Zoom
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Slack
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="soft-skills-section">
                    <h3 className="sidebar-title">Soft Skills</h3>
                    <ul className="soft-skills-list">
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Scrum
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Kanban
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Agile
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Teamwork
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Reliability
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Diligence
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Punctuality
                            </span>
                        </li>

                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Flexibility
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="tech-skills-section">
                    <h3 className="sidebar-title">Languages</h3>
                    <ul className="tech-skills-list">
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                German
                            </span>
                        </li>
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                English
                            </span>
                        </li>
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                Russian
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CvEng;
