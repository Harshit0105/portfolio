import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "./SmallTitle";
import BriefcaseIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
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
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is"
            }
            year={"JUN 2021-JULY 2021"}
          />
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is"
            }
            year={"2021-2021"}
          />
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is"
            }
            year={"2021-2021"}
          />
        </div>
        <div className="small-title">
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={"NADIAD \n CPI: 9.08"}
            year={"JUN 2021-JULY 2021"}
          />
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is"
            }
            year={"2021-2021"}
          />
          <ResumeItem
            title={"Web Development Intern"}
            sub_title={"The Sparks Foundation"}
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is"
            }
            year={"2021-2021"}
          />
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
