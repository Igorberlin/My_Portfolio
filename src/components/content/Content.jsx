import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import CvContainer from "../cv/CvContainer";
import EnglishCv from "../cv/EnglishCv";
import GermanCv from "../cv/GermanCv";
import Home from "../homepage/Home";
import Projects from "../projectsComponent/Projects";

const Content = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/My_Portfolio" element={<Home />} />
                <Route path="/cv" element={<CvContainer />} />
                <Route path="/cv/cv-de" element={<GermanCv />} />
                <Route path="/cv/cv-eng" element={<EnglishCv />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route
                    path="*"
                    element={<Navigate to="/My_Portfolio" replace={true} />}
                />
            </Routes>
        </div>
    );
};

export default Content;
