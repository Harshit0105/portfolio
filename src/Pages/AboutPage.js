import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";

function AboutPage({ user }) {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection user={user} />
        <ServicesSection />
        {/* <ReviewsSection /> */}
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;
export default AboutPage;
