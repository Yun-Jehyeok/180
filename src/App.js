import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import { Container, MouseScrollIcon } from "style";
import "./style.css";

import Home from "components/Home";
import Section from "components/Section";

// 부모를 기준으로 이동하고 싶으면 : 부모에 relative, 자식에 absolute

// absolute : 조상 중 position이 static이 아닌 가장 가까운 조상을 기준으로 top, left 이동
// relative : static 일 때 위치를 기준으로 top, left 이동

// 그럼 App에 Relative(top: 0, left: 0)
// Home, Section에 absolute(top: 0, left: 0)
// App의 top 변경

// Home은 그대로 left가 알아서 옮겨지게 하고

// About, Skill, Project는... fixed줘야 되나? 아무것도 안줘도 상관없지 않나?
function App() {
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("About");

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4500);
  }, []);

  // 스크롤 이벤트만 해결하면 됨
  // 왜 beforePosition, afterPosition을 못쓰겠는지는 모르겠다...

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let currentPosition = document.documentElement.scrollTop;

      if (currentPosition > 0) {
        if (location === "About") {
          setLocation("Skill");
        } else if (location === "Skill") {
          setLocation("Project");
        }
      } else {
        if (location === "Skill") {
          setLocation("About");
        } else if (location === "Project") {
          setLocation("Skill");
        }
      }
    });
  }, [location]);

  return (
    <Container loc={location}>
      <Home />
      <Section />
      <MouseScrollIcon>
        <Fade when={show} bottom>
          <div className="icon-scroll"></div>
        </Fade>
      </MouseScrollIcon>
    </Container>
  );
}

export default App;
