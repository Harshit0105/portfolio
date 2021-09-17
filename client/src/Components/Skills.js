import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "../Components/ProgressBar";

import { getSkills } from "../data/skill";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    let mounted = true;
    getSkills().then((items) => {
      if (mounted) {
        if (items.success === true) {
          setSkills(items.data);
        } else {
          setSkills([]);
        }
      }
    });
    return () => (mounted = false);
  });
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          {skills.map((item) => (
            <ProgressBar
              title={item.title}
              text={item.percentage}
              width={item.percentage}
            />
          ))}
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
