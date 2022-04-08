import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import {
  GithubButton,
  ProjectContainer,
  ProjectDescription,
  ProjectInfo,
  ProjectList,
  ProjectStack,
  ProjectTitle,
} from "./style";

function Project({ location }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (location === "Project") {
      setTimeout(() => {
        setShow(true);
      }, 400);
    }
  }, [location]);

  const [project, setProject] = useState(1);

  const changeProject = (projectNum) => {
    setProject(projectNum);
  };

  const firstProject =
    project === 1 ? (
      <ProjectInfo>
        <div>
          <ProjectTitle>S-MISSION</ProjectTitle>
          <ProjectDescription>
            사이드 프로젝트 커뮤니티 및 관리
          </ProjectDescription>
          <ProjectStack>
            #React #Redux #Styled-Component #Node.js #MongoDB
          </ProjectStack>
          <GithubButton
            href="https://github.com/Yun-Jehyeok/s-mission"
            target="_blank"
            rel="noreferrer"
          >
            Check Github
          </GithubButton>
        </div>
      </ProjectInfo>
    ) : (
      "S-MISSION"
    );

  const secondProject =
    project === 2 ? (
      <ProjectInfo>
        <div>
          <ProjectTitle>MEMORIES</ProjectTitle>
          <ProjectDescription>
            국가 유공자 분들을 위한 웹앨범 및 굿즈 판매 사이트
          </ProjectDescription>
          <ProjectStack>
            #React #Redux #Styled-Component #Node.js #MongoDB
          </ProjectStack>
          <GithubButton
            href="https://github.com/Yun-Jehyeok/memories"
            target="_blank"
            rel="noreferrer"
          >
            Check Github
          </GithubButton>
        </div>
      </ProjectInfo>
    ) : (
      "MEMORIES"
    );

  const thirdProject =
    project === 3 ? (
      <ProjectInfo>
        <div>
          <ProjectTitle>UFMS-CAPSTONE</ProjectTitle>
          <ProjectDescription>
            캡스톤 디자인으로 진행한 프로젝트로 대학 내 스케줄 관리 및 시설의
            대관과 예약 서비스를 제공하고 ESL 기기와의 연동을 통해 문서 현판을
            대체한 프로젝트
          </ProjectDescription>
          <ProjectStack>#React #Redux #Styled-Component</ProjectStack>
          <GithubButton
            href="https://github.com/Yun-Jehyeok/UFMS-Capstone/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            Check Github
          </GithubButton>
        </div>
      </ProjectInfo>
    ) : (
      "UFMS-CAPSTONE"
    );

  return (
    <ProjectContainer project={project}>
      <div>
        <Fade when={show} top>
          <a href="/">PROJECT</a>
        </Fade>
      </div>
      <ProjectList project={project}>
        <div onClick={() => changeProject(1)}>{firstProject}</div>
        <div onClick={() => changeProject(2)}>{secondProject}</div>
        <div onClick={() => changeProject(3)}>{thirdProject}</div>
      </ProjectList>
    </ProjectContainer>
  );
}

export default Project;
