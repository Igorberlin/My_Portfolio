import React from "react";
import Photo from "./../../img/Profile.jpg";
import "./../../sass/cv/cv-eng.scss";

const Cv = () => {
    return (
        <div className="main-section">
            <div className="main-content-sections">
                <div className="about-me-section">
                    <h3 className="about-me-profession">
                        Front End Entwickler
                    </h3>
                    <h1 className="about-me-name">Igor Kuznecov</h1>
                    <p>
                        Ich bin Frontend-Entwickler mit Kenntnissen der
                        wichtigsten Websprachen HTML/CSS/JavaScript und habe
                        Erfahrung beim Erstellen von Web Applikationen mit der
                        Javascript Bibliotheken wie React.js, Redux und React
                        Router Dom. Ich habe Erfahrung mit Responsive Web
                        Design, Arbeiten mit APIs, Versionskontrolle
                        (Git/Github) sowie ein gutes Verständnis der Grundlagen
                        der Informatik.
                    </p>
                    <p>
                        Ich bin auf der Suche nache einer Stelle als vollzeit
                        Front End Entwickler in einem Unternehmen mit viel
                        Potenzial und interessanten Herausforderungen, wo ich
                        mein Können und Wissen einsetzen und weiterentwickeln
                        kann.
                    </p>
                </div>

                <div className="my-work-experience-section">
                    <h3 class="main-content-title"> Projekte</h3>
                    <ul class="my-work-experience-duties">
                        <li class="my-work-experience-duty">
                            <a
                                href="https://Igorberlin.github.io/My_Portfolio"
                                target="blank"
                            >
                                https://Igorberlin.github.io/My_Portfolio
                            </a>
                            .......[Portfolio]
                        </li>
                    </ul>
                    <br />
                    <h3 className="main-content-title"> Berufserfahrung</h3>

                    <div className="my-work-experience-company-block">
                        <h4 className="my-work-experience-position">
                            Führender Vertriebskaufmann,
                            <span className="my-work-experience-company">
                                Siberian Health GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            März 2004 - Mai 2021
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Deutschland
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Sicherstellen der Online-Verkaufsfunktionalität
                                und Unterstützung <br /> bei der Fehlersuche und
                                deren Lösung
                            </li>
                            <li className="my-work-experience-duty">
                                Testen und Dokumentieren der Fehler
                            </li>
                            <li className="my-work-experience-duty">
                                Länderübergreifende Kommunikation mit Kollegen
                                und Kunden
                            </li>
                            <li className="my-work-experience-duty">
                                Schulung und Mentoring neuer
                                Vertriebsmitarbeiter
                            </li>
                            <li className="my-work-experience-duty">
                                Vertriebsorganisation
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="my-work-experience-position">
                            Büroassistent,
                            <span className="my-work-experience-company">
                                Sibvaleo GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            Februar 2012 - März 2014
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Deutschland
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Auftragsbearbeitung
                            </li>
                            <li className="my-work-experience-duty">
                                Lageristik
                            </li>
                            <li className="my-work-experience-duty">
                                Datenverwalten
                            </li>
                            <li className="my-work-experience-duty">
                                Buchhaltung
                            </li>
                        </ul>
                    </div>

                    <br />
                    <div>
                        <h4 className="my-work-experience-position">
                            Handelsvertreter,
                            <span className="my-work-experience-company">
                                Varna GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            Januar 2011 - Juni 2011
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Pskov, Russland
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Produktpräsentation
                            </li>
                            <li className="my-work-experience-duty">
                                Vertragsgestaltung
                            </li>
                            <li className="my-work-experience-duty">
                                Organisation von Werbeaktionen
                            </li>
                        </ul>
                    </div>

                    <br />
                    <div>
                        <h4 className="my-work-experience-position">
                            Praktikum während des Studiums als Jurist,
                            <span className="my-work-experience-company">
                                Baltko GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            Februar 2010 - April 2010
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Pskov, Russland
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Bearbeitung von Dokumenten und Verträgen
                            </li>
                            <li className="my-work-experience-duty">
                                Unterstützung bei Verhandlungen
                            </li>
                        </ul>
                    </div>
                </div>

                <br />
                <div className="my-education-section">
                    <h3 className="main-content-title">Ausbildung</h3>
                    <div>
                        <h4 className="my-work-experience-position">
                            Full stack web developer and testing,
                            <span className="my-work-experience-company">
                                TelRan GmbH
                            </span>
                        </h4>
                        <p className="my-work-experience-period">
                            Mai 2021 — November 2021
                            <span className="my-work-experience-divider">
                                |
                            </span>
                            Berlin, Deutschlan
                        </p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">
                                Informatik-Grundlagen lernen
                            </li>
                            <li className="my-work-experience-duty">
                                Arbeitete mit API
                            </li>
                            <li className="my-work-experience-duty">
                                Miniprojekte wie Todo-Liste, Fotoalbum,
                                <br /> Essensbestellseite, Telefonbuch,
                                Popup-Fenster,
                                <br /> Formularvalidierung mit CSS, Javascript
                                und React erstellt
                            </li>
                        </ul>
                    </div>
                    <br />
                    <h4 className="my-education-profecssion">
                        Hochschule für Recht und Verwaltung
                    </h4>
                    <p className="my-work-experience-period">
                        September 2005 - Juli 2010
                        <span className="my-work-experience-divider">|</span>
                        Pskov, Russland
                    </p>
                </div>
            </div>

            <div className="sidebar-section">
                <img src={Photo} alt="Photo" />

                <div className="contacts-section">
                    <h3 className="sidebar-title">Kontakte</h3>
                    <div>
                        <span className="contacts-section-type">T:</span>
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
                            href="https://www.linkedin.com/in/igor-kuznecov-6b784316b/"
                            target="_blank"
                            className="contacts-section-link"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="soft-skills-section">
                    <h3 className="sidebar-title">Fähigkeiten</h3>
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
                                RESTAPI
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
                    <h3 className="sidebar-title">Persönliche Fähigkeiten</h3>
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
                                Zuverlässigkeit
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Teamfähigkeit
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Sorgfalt
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Pünktlichkeit
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Verantwortungsbewusstsein
                            </span>
                        </li>
                        <li className="soft-skills-item">
                            <span className="contacts-section-link soft-skills-item-text">
                                Eigenständiges Arbeiten
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="tech-skills-section">
                    <h3 className="sidebar-title">Sprachkenntnisse</h3>
                    <ul className="tech-skills-list">
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                Deutsch
                            </span>
                        </li>
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                Englisch
                            </span>
                        </li>
                        <li className="tech-skills-item">
                            <span className="contacts-section-link tech-skills-item-text">
                                Russisch
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cv;
