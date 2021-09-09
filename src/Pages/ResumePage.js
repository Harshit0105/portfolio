import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";

function ResumePage() {
  return (
    <MainLayout>
      <ResumeStyled>
        <Title title={"Resume"} span={"Resume"} />
      </ResumeStyled>
    </MainLayout>
  );
}

const ResumeStyled = styled.section``;

export default ResumePage;
