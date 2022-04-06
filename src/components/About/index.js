import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Skill from "components/Skill";
import { Introduce, AboutContainer } from "./style";
import "./style.css";

function About() {
  const [isFinish, setIsFinish] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let afterPosition = document.documentElement.scrollTop;

      if (afterPosition > 1) {
        setIsFinish(true);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4500);
  }, []);

  return (
    <div>
      <AboutContainer className="about" isFinish={isFinish}>
        <div>
          <Fade when={show} top>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              ABOUT
            </a>
          </Fade>
        </div>
        <div>
          <Fade when={show} bottom>
            <Introduce>
              Hello, I'm <span>Yun Jehyeok</span>.
              <br />
              I'm a Front-End web developer.
            </Introduce>
          </Fade>
        </div>
        <div>
          <Fade when={show} bottom>
            <div className="icon-scroll"></div>
          </Fade>
        </div>
      </AboutContainer>
      <Skill isFinish={isFinish} />
    </div>
  );
}

export default About;
