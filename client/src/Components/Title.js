import React from "react";
import styled from "styled-components";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 2.5rem;
    font-weight: 200;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.2rem;
    @media screen and (max-width: 670px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.7rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 8rem;
      height: 0.3rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 5rem;
      height: 0.3rem;
      left: 0;
      background-color: var(--primary-color);
      border-radius: 15px;
    }
    span {
      font-weight: 500;
      color: rgba(25, 29, 43, 0.44);
      font-size: 3.5rem;
      position: absolute;
      top: 35%;
      left: 0;
      z-index: -1;
      @media screen and (max-width: 670px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 2.5rem;
      }
    }
  }
`;

export default Title;
