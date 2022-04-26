import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cv from "../cv/Cv";
import CvContainer from "../cv/CvContainer";
import CvEng from "../cv/CvEng";
import Home from "../homepage/Home";
import Projects from "../projectsComponent/Projects";

import "./../../sass/content/content.scss";

const Content = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/My_Portfolio" element={<Home />} />
                <Route path="/cv" element={<CvContainer />} />
                <Route path="/cv/cv-de" element={<Cv />} />
                <Route path="/cv/cv-eng" element={<CvEng />} />
                <Route
                    path="*"
                    element={<Navigate to="/My_Portfolio" replace={true} />}
                />
            </Routes>
        </div>
    );
};

export default Content;
