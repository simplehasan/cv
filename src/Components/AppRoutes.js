import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Educations from "./Educations";
import Experience from "./Experience";
import Achievement from "./Achievement";
import Skill from "./Skill";

const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
