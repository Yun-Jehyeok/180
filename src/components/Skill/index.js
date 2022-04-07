import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { SkillContainer } from "./style";

function Skill({ location }) {
  const [show, setShow] = useState(false);
  const [isClickedFirst, setIsClickedFirst] = useState(true);
  const [isClickedSecond, setIsClickedSecond] = useState(true);

  useEffect(() => {
    if (location === "Skill") {
      setTimeout(() => {
        setShow(true);
      }, 400);
    }
  }, [location]);

  const isClickContent = (clickIdx) => {
    let el = document.querySelectorAll(".content")[clickIdx];
    el.style.transition = "none";

    if (clickIdx === 0) {
      if (isClickedFirst) {
        el.innerHTML =
          "<div><div>HTML</div>&nbsp;&nbsp;<div>CSS</div>&nbsp;&nbsp;<div>JAVASCRIPT</div></div><div><div>REACT</div>&nbsp;&nbsp;<div>AURA COMPONENT</div>&nbsp;&nbsp;<div>LWC</div></div>";
        el.style.fontSize = "3rem";
      } else {
        el.innerHTML = "FRONT-END";
        el.style.fontSize = "5rem";
      }

      setIsClickedFirst(!isClickedFirst);
    } else if (clickIdx === 1) {
      if (isClickedSecond) {
        el.innerHTML =
          "<div><div>MONGO DB</div>&nbsp;&nbsp;<div>NODE JS</div>&nbsp;&nbsp;<div>EXPRESS JS</div></div>";
        el.style.fontSize = "3rem";
      } else {
        el.innerHTML = "BACK-END";
        el.style.fontSize = "5rem";
      }

      setIsClickedSecond(!isClickedSecond);
    }

    setTimeout(() => {
      el.style.transition = "all 0.25s linear";
    }, 50);
  };

  return (
    <SkillContainer className="skill">
      <div>
        <Fade when={show} top>
          <a href="/" style={{ textDecoration: "none", color: "#17395c" }}>
            SKILLS
          </a>
        </Fade>
      </div>
      <div>
        <div
          style={{ backgroundColor: "#A3C3CE", color: "#B4701F" }}
          onClick={() => isClickContent(0)}
        >
          <Fade when={show} bottom>
            <div className="content">FRONT-END</div>
          </Fade>
        </div>
        <div
          style={{ backgroundColor: "#C33608", color: "#FFCC50" }}
          onClick={() => isClickContent(1)}
        >
          <Fade when={show} bottom>
            <div className="content">BACK-END</div>
          </Fade>
        </div>
      </div>
    </SkillContainer>
  );
}

export default Skill;
