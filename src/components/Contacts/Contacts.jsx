import React from "react";
import Xing from "./../../img/Xing-Emblem.png";
import LinkedIn from "./../../img/LI-Logo.png";
import Facebook from "./../../img/Facebook.png";
import GitHub from "./../../img/GitHub.png";

import "./../../sass/contacts/contacts.scss";

const Contacts = () => {
    return (
        <div className="contacts-main">
            <div className="contacts-container">
                <div className="contacts-header">
                    <h1>Contacts</h1>
                    <a href="mailto:igorkuznecov@gmx.de">
                        <h3>igorkuznecov@gmx.de</h3>
                    </a>
                    <a href="tel:+4917692630141">
                        <h3>+4917692630141</h3>
                    </a>
                </div>
                <div className="contacts-body">
                    <div className="social-item">
                        <a href="https://github.com/Igorberlin" target="_blank">
                            <img src={GitHub} alt="GitHub-icon" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a
                            href="https://www.linkedin.com/in/igor-kuznecov-6b784316b/"
                            target="_blank"
                        >
                            <img src={LinkedIn} alt="linkedIn-icon" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a
                            href="https://www.xing.com/profile/Igor_Kuznecov4"
                            target="_blank"
                        >
                            <img src={Xing} alt="Xing-icon" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a
                            href="https://www.facebook.com/igor.kuznecov.3"
                            target="_blank"
                        >
                            <img src={Facebook} alt="Facebook-icon" />
                        </a>
                    </div>
                </div>
                <div className="contacts-footer">
                    <a
                        href="https://www.google.de/maps/place/Lindauer+Allee+40,+13407+Berlin/@52.5741551,13.3479307,17z/data=!3m1!4b1!4m5!3m4!1s0x47a853b91c6827e3:0xa9342e121d7e1370!8m2!3d52.5741519!4d13.3501193?hl=de"
                        target="_blank"
                    >
                        <h3>Lindauer Allee 40, 13407 Berlin</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
