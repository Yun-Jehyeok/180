import styled from "styled-components";

export const SecondContainer = styled.div`
  z-index: 900;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00483c;
  color: white;
  top: ${(props) => (props.isFinish ? "-100%" : "0")};
  left: 0;
  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
  overflow: hidden;

  & > div:first-child {
    width: 100%;
    height: 20%;
    font-size: 4rem;
    position: absolute;
    top: 0;
    font-weight: bolder;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;
  }

  & > div:nth-child(2) {
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;
  }

  & > div:last-child {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 70px;
    left: 0;
  }
`;

export const Introduce = styled.div`
  font-size: 5rem;
  font-weight: bolder;

  & > span {
    color: #e21a6d;
  }
`;
