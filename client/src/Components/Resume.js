import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "./SmallTitle";
import BriefcaseIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

import { getWorks } from "../data/work";
import { getEducations } from "../data/education";

function Resume() {
  const [works, setWorks] = useState([]);
  const [educations, setEducations] = useState([]);
  useEffect(() => {
    let mounted = true;
    getWorks().then((items) => {
      if (mounted) {
        if (items.success === true) {
          setWorks(items.data);
        } else {
          setWorks([]);
        }
      }
    });
    getEducations().then((items) => {
      if (mounted) {
        console.log(items);
        if (items.success === true) {
          setEducations(items.data);
        } else {
          setEducations([]);
        }
      }
    });
    return () => (mounted = false);
  }, []);
  const briefcase = <BriefcaseIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Work Experience"} />
        </div>
        <div className="resume-content">
          {works
            .slice()
            .reverse()
            .map((item) => (
              <ResumeItem
                key={item._id}
                title={item.title}
                sub_title={item.company}
                year={item.duration}
                text={item.experience}
                link={item.link}
              />
            ))}
        </div>
        <div className="small-title">
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className="resume-content">
          {educations
            .slice()
            .reverse()
            .map((item) => (
              <ResumeItem
                key={item._id}
                title={item.title}
                sub_title={item.school}
                year={item.duration}
                text={item.details}
                link={""}
              />
            ))}
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 2rem;
    &:not(:first-child) {
      margin-top: 3rem;
    }
  }
  .resume-content {
    border-left: 1px solid var(--border-color);
  }
`;

export default Resume;
