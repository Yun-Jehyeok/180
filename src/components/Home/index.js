import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { HomeContainer } from "./style";

function Home() {
  const [isHide, setIsHide] = useState(false);
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
    }, 3500);
  });

  return (
    <HomeContainer className="title" isHide={isHide}>
      <Fade when={show} left>
        180
      </Fade>
    </HomeContainer>
  );
}

export default Home;
