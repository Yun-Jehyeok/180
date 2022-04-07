import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Introduce, AboutContainer } from "./style";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4500);
  }, []);

  return (
    <AboutContainer>
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
    </AboutContainer>
  );
}

export default About;
