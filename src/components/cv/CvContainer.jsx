import React from "react";
import { Link } from "react-router-dom";
import De from "./../../img/de-img.png";
import Eng from "./../../img/eng-img.png";

import "./../../sass/cv/cv.scss";

const CvContainer = () => {
    return (
        <div className="cv-container">
            <div className="cv-display-container">
                <Link to="/cv/cv-de">
                    <div className="cv-de">
                        <img src={De} alt="De-flag-img" />
                    </div>
                </Link>
                <Link to="/cv/cv-eng">
                    <div className="cv-eng">
                        <img src={Eng} alt="Eng-flag-img" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CvContainer;
