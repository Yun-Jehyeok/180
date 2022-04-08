import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  & > div:first-child {
    width: 100%;
    height: 20%;
    position: absolute;
    top: 0;
    font-size: 4rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    align-items: center;
    transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);

    & a {
      text-decoration: none;
      color: ${(props) =>
        props.project === 1
          ? "#B4701F"
          : props.project === 2
          ? "#C33608"
          : props.project === 3
          ? "#F8C7C3"
          : "black"};
    }
  }
`;

export const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & > div {
    height: 100%;
    padding: 2rem;
    font-size: 3rem;
    font-weight: bolder;
    transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
  }

  & > div:first-child {
    background-color: #f8c7c3;
    color: #b4701f;
    width: ${(props) => (props.project === 1 ? "92%" : "4%")};
    writing-mode: ${(props) =>
      props.project === 1 ? "horizontal-tb" : "vertical-rl"};
    cursor: ${(props) => (props.project === 1 ? "initial" : "pointer")};
  }

  & > div:nth-child(2) {
    background-color: #f9f2ea;
    color: #c33608;
    width: ${(props) => (props.project === 2 ? "92%" : "4%")};
    writing-mode: ${(props) =>
      props.project === 2 ? "horizontal-tb" : "vertical-rl"};
    cursor: ${(props) => (props.project === 2 ? "initial" : "pointer")};
  }

  & > div:nth-child(3) {
    background-color: #17395c;
    color: #f8c7c3;
    width: ${(props) => (props.project === 3 ? "92%" : "4%")};
    writing-mode: ${(props) =>
      props.project === 3 ? "horizontal-tb" : "vertical-rl"};
    cursor: ${(props) => (props.project === 3 ? "initial" : "pointer")};
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  align-items: center;
  width: 100%;
  height: 100%;

  & > div {
    width: 90%;
    height: 70%;
  }
`;

export const ProjectTitle = styled.div`
  margin-bottom: 3rem;
`;

export const ProjectDescription = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProjectStack = styled.div`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const GithubButton = styled.a`
  width: 10rem;
  height: 4rem;
  font-size: 1rem;
  box-sizing: border-box;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  align-items: center;

  background-color: #5041b2;
  color: white;

  &:hover {
    border: 3px solid #5041b2;
    color: #5041b2;
    background-color: white;
  }
`;
