import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { FirstContainer } from "./style";

function First() {
  const [isFinish, setIsFinish] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
    setTimeout(() => {
      setIsFinish(true);
    }, 3000);
  });

  return (
    <FirstContainer isFinish={isFinish}>
      <Fade when={show} left>
        60
      </Fade>
    </FirstContainer>
  );
}

export default First;
