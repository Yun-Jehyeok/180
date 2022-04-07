import styled from "styled-components";

export const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isHide ? "-100%" : "0")};
  z-index: 1000;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #252934;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  align-items: center;
  font-size: 6rem;
  font-weight: bolder;
  color: #ffcc50;

  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;
