import Third from "components/Third";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Introduce, SecondContainer } from "./style";
import "./style.css";

function Second() {
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let afterPosition = document.documentElement.scrollTop;

      if (afterPosition > 1) {
        setIsFinish(true);
      }
    });
  }, []);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5500);
  }, []);

  return (
    <div>
      <SecondContainer className="second" isFinish={isFinish}>
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
      </SecondContainer>
      <Third isFinish={isFinish} />
    </div>
  );
}

export default Second;
