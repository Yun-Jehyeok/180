import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { HomeContainer } from "./style";

function Home() {
  const [isFinish, setIsFinish] = useState(false);
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
    }, 3500);
    setTimeout(() => {
      title.innerHTML = "176";
      setIsFinish(true);
    }, 4500);
  });

  return (
    <HomeContainer className="title" isFinish={isFinish}>
      <Fade when={show} left>
        180
      </Fade>
    </HomeContainer>
  );
}

export default Home;
