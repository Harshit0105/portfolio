import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg";
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
            paragraph={"v fm vk vkjrk"}
          />
          <div className="mid-card">
            <ServiceCard
              image={webDev}
              title={"Web Development"}
              paragraph={"v flkmvlkfmvkldf"}
            />
          </div>
          <ServiceCard
            image={mobileDev}
            title={"Application Development"}
            paragraph={"fvkjf vkf jkb vjkfnb"}
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
