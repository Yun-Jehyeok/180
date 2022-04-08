import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 300vh;
  top: ${(props) =>
    props.loc === "About"
      ? "0"
      : props.loc === "Skill"
      ? "-89.7vh"
      : props.loc === "Project"
      ? "-179.4vh"
      : "-179.4vh"};
  left: 0;

  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

export const MouseScrollIcon = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: ${(props) =>
    props.loc === "About"
      ? "90vh"
      : props.loc === "Skill"
      ? "190vh"
      : props.loc === "Project"
      ? "290vh"
      : "90vh"};
  left: 0;
  z-index: 2000;
  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;
