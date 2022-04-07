import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a3c3ce;

  & > div:first-child {
    width: 100%;
    height: 20%;
    font-size: 4rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;
  }

  & > div:last-child {
    width: 100%;
    height: 100%;
    font-size: 5rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;

    & > div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex: 0 0 auto;
      align-items: center;
      cursor: pointer;
    }

    & .content {
      transition: all 0.25s linear;
    }
    & .content > div {
      display: flex;
      justify-content: center;
    }
    & > div:hover .content {
      margin-bottom: 2rem;
      transition: all 0.25s linear;
    }
  }
`;
