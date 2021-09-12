import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "../Components/ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} text={"70%"} width={"70%"} />
          <ProgressBar title={"JAVASCRIPT"} text={"80%"} width={"80%"} />
          <ProgressBar title={"Python"} text={"85%"} width={"85%"} />
          <ProgressBar title={"CSS"} text={"60%"} width={"60%"} />
          <ProgressBar title={"C"} text={"70%"} width={"70%"} />
          <ProgressBar title={"ReactJs"} text={"75%"} width={"75%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
