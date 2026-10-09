import React from "react";
import styled from "styled-components";

function ContactButton({ title, type = "button", disabled = false, onClick }) {
  return (
    <ContactButtonStyled type={type} disabled={disabled} onClick={onClick}>
      {title}
    </ContactButtonStyled>
  );
}

const ContactButtonStyled = styled.button`
  background-color: var(--primary-color);
  border: none;
  padding: 0.6rem 1.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: inherit;
  position: relative;
  transition: all 0.4s ease-in-out;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
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
  &:hover:not(:disabled)::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default ContactButton;
