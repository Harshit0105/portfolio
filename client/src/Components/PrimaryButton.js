import React from "react";
import styled from "styled-components";

function PrimaryButton({ title, link = "#" }) {
  return <PrimaryButtonStyled href={link}>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.6rem 1.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: inherit;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.8;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
