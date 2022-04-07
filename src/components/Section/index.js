import React from "react";

import About from "components/About";
import Project from "components/Project";
import Skill from "components/Skill";

function Section() {
  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        zIndex: "500",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default Section;
