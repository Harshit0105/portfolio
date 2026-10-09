import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "./SmallTitle";
import BriefcaseIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
import Loader from "react-loader-spinner";
import ErrorMessage from "./ErrorMessage";

import { getWorks } from "../data/work";
import { getEducations } from "../data/education";

function Resume() {
  const [works, setWorks] = useState([]);
  const [educations, setEducations] = useState([]);
  const [isWorkLoading, setWorkIsLoading] = useState(true);
  const [isEduLoading, setEduIsLoading] = useState(true);
  const [workError, setWorkError] = useState(null);
  const [eduError, setEduError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    getWorks({ signal }).then((items) => {
      if (signal.aborted) return;
      setWorks(items.data);
      setWorkError(items.success ? null : "Could not load work experience.");
      setWorkIsLoading(false);
    });

    getEducations({ signal }).then((items) => {
      if (signal.aborted) return;
      setEducations(items.data);
      setEduError(items.success ? null : "Could not load education.");
      setEduIsLoading(false);
    });
    return () => controller.abort();
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
          {isWorkLoading && (
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
          {!isWorkLoading && workError && <ErrorMessage message={workError} />}
          {!isWorkLoading &&
            works
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
          {isEduLoading && (
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
          {!isEduLoading && eduError && <ErrorMessage message={eduError} />}
          {!isEduLoading &&
            educations
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
