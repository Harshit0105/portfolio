import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "../Components/ProgressBar";
import Loader from "react-loader-spinner";
import ErrorMessage from "./ErrorMessage";

import { getSkills } from "../data/skill";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [isSkillLoading, setSkillIsLoading] = useState(true);
  const [skillError, setSkillError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getSkills({ signal: controller.signal }).then((items) => {
      if (controller.signal.aborted) return;
      setSkills(items.data);
      setSkillError(items.success ? null : "Could not load skills.");
      setSkillIsLoading(false);
    });
    return () => controller.abort();
  }, []);
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          {isSkillLoading && (
            <Loader
              className="loader"
              type="MutatingDots"
              color="#007bff"
              secondaryColor="#cbced8" //"#2e344e"  //"#00BFFF"
              height={100}
              width={100}
              // timeout={3000}
            />
          )}
          {!isSkillLoading && skillError && (
            <ErrorMessage message={skillError} />
          )}
          {!isSkillLoading &&
            skills
              .slice()
              .reverse()
              .map((item) => (
                <ProgressBar
                  key={item._id}
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
