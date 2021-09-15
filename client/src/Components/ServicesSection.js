import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
import ar from "../img/AR.svg";
import mobileDev from "../img/mobileDevelopment.svg";
import webDev from "../img/webDevelopment.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Paragraphs are the building blocks of papers. Many students"
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={webDev}
              title={"Game Development"}
              paragraph={
                "Paragraphs are the building blocks of papers. Many students"
              }
            />
          </div>
          <ServiceCard
            image={mobileDev}
            title={"Artificial Intelligence"}
            paragraph={
              "Paragraphs are the building blocks of papers. Many students"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .mid-card {
    }
  }
`;

export default ServicesSection;
