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
      setIsFinish(true);
    }, 3500);
  });

  const preventScroll = (e) => {
    // 여기서 스크롤
  };

  return (
    <HomeContainer
      className="title"
      isFinish={isFinish}
      onScroll={preventScroll}
    >
      <Fade when={show} left>
        180
      </Fade>
    </HomeContainer>
  );
}

export default Home;
