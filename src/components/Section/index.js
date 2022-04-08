import React from "react";

import About from "components/About";
import Project from "components/Project";
import Skill from "components/Skill";

function Section({ loc }) {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <About />
      <Skill location={loc} />
      <Project location={loc} />
    </div>
  );
}

export default Section;
