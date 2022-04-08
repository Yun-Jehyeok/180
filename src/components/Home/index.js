import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Fade } from "react-reveal";
import { HomeContainer } from "./style";

function Home() {
  const [isHide, setIsHide] = useState(false);
  const [hideHelmet, setHideHelmet] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let title = document.querySelector(".title");

    setTimeout(() => {
      setShow(true);
    }, 300);
    setTimeout(() => {
      title.innerHTML = "179";
    }, 1500);
    setTimeout(() => {
      title.innerHTML = "178";
    }, 2500);
    setTimeout(() => {
      title.innerHTML = "177";
      setIsHide(true);
      setHideHelmet(true);
    }, 3500);
  });

  return (
    <HomeContainer className="title" isHide={isHide}>
      {!hideHelmet ? (
        <Helmet>
          <title>Home</title>
        </Helmet>
      ) : (
        ""
      )}
      <Fade when={show} left>
        180
      </Fade>
    </HomeContainer>
  );
}

export default Home;
