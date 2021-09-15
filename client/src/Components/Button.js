import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((item, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(item)}>
            {item}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.3rem 1.5rem;
  font-size: inherit;
  color: var(--white-color);
  transition: all 0.4s ease-in-out;
  margin-bottom: 1.2rem;

  border-radius: 32px;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2rem auto;
`;

export default Button;
