import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  top: ${(props) =>
    props.loc === "About" ? "0" : props.loc === "Skill" ? "-100vh" : "0"};
  left: 0;

  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

export const MouseScrollIcon = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 70px;
  left: 0;
  z-index: 2000;
`;
