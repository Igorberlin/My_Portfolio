import React from "react";
import { Link } from "react-router-dom";
import De from "./../../img/de-img.png";
import Eng from "./../../img/eng-img.png";

import "./../../sass/cv/cv.scss";

const CvContainer = () => {
    return (
        <div className="cv-container">
            <div className="cv-display-container">
                <div>
                    <Link to="/cv/cv-de" className="cv-link">
                        <div className="cv-de">
                            <img src={De} alt="De-flag-img" />
                        </div>
                    </Link>
                    <p className="Cv-title">German</p>
                    <div className="cv-download">
                        <a
                            href="https://drive.google.com/file/d/1b_PWSwqaXOTxVTu1wZ6d9OKr3OpGIpmp/view?usp=sharing"
                            target="_blank"
                        >
                            save as PDF
                        </a>
                    </div>
                </div>
                <div>
                    <Link to="/cv/cv-eng" className="cv-link">
                        <div className="cv-eng">
                            <img src={Eng} alt="Eng-flag-img" />
                        </div>
                    </Link>
                    <p className="Cv-title">English</p>
                    <div className="cv-download">
                        <a
                            href="https://drive.google.com/file/d/19g0KKi4FVj2eKdWbfJLCBwANQOOXFTC4/view?usp=sharing"
                            target="_blank"
                        >
                            save as PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvContainer;
