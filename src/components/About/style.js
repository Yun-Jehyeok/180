import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #00483c;
  color: white;

  position: relative;

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
`;

export const Introduce = styled.div`
  font-size: 5rem;
  font-weight: bolder;

  & > span {
    color: #e21a6d;
  }
`;
