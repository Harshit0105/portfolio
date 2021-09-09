import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";

function ResumePage() {
  return (
    <MainLayout>
      <ResumeStyled>
        <Skills />
        <Resume />
      </ResumeStyled>
    </MainLayout>
  );
}

const ResumeStyled = styled.section``;

export default ResumePage;
