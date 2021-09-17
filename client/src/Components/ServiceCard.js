import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-top: 4px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-radius: 2px;
  min-height: 100%;
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 4px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.3rem;
      padding: 0.5rem 0;
      position: relative;
      &::after {
        content: "";
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 4rem;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.6rem 0;
    }
  }
`;

export default ServiceCard;
