import React from "react";
import styled from "styled-components";

function Button({ filter, button, active }) {
  return (
    <ButtonsStyled role="group" aria-label="Filter projects by category">
      {button
        ? button.map((item) => {
            const isActive = item === active;
            return (
              <ButtonStyled
                key={item}
                type="button"
                className={isActive ? "active" : undefined}
                aria-pressed={isActive}
                onClick={() => filter(item)}
              >
                {item}
              </ButtonStyled>
            );
          })
        : null}
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
  cursor: pointer;
  &.active {
    background-color: var(--primary-color);
  }
  &:focus-visible {
    outline: 2px solid var(--white-color);
    outline-offset: 2px;
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
