import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { ThirdContainer } from "./style";

function Third({ isFinish }) {
  const [show, setShow] = useState(false);
  const [isClickedFirst, setIsClickedFirst] = useState(true);
  const [isClickedSecond, setIsClickedSecond] = useState(true);

  useEffect(() => {
    if (isFinish) {
      setTimeout(() => {
        setShow(true);
      }, 1100);
    }
  }, [isFinish]);

  const isClickContent = (number) => {
    let el = document.querySelectorAll(".content")[number];

    if (number === 0) {
      if (isClickedFirst) {
        el.innerHTML =
          "<div><div>HTML</div>&nbsp;&nbsp;<div>CSS</div>&nbsp;&nbsp;<div>JAVASCRIPT</div></div><div><div>REACT</div>&nbsp;&nbsp;<div>AURA COMPONENT</div>&nbsp;&nbsp;<div>LWC</div></div>";
      } else {
        el.innerHTML = "FRONT-END";
      }

      setIsClickedFirst(!isClickedFirst);
    } else if (number === 1) {
      if (isClickedSecond) {
        el.innerHTML =
          "<div><div>MONGO DB</div>&nbsp;&nbsp;<div>NODE JS</div>&nbsp;&nbsp;<div>EXPRESS JS</div></div>";
      } else {
        el.innerHTML = "BACK-END";
      }

      setIsClickedSecond(!isClickedSecond);
    }
  };

  return (
    <ThirdContainer className="third" isFinish={isFinish}>
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
    </ThirdContainer>
  );
}

export default Third;
