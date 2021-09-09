import React from "react";
import styled from "styled-components";

function ContactItem({ icon, title, contact1, contact2 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.3rem 1.8rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  &:not(last-child) {
    margin-bottom: 2rem;
  }
  margin-bottom: 1.5rem;
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    svg {
      font-size: 1.5rem;
    }
  }
  .right-content {
    h6 {
      font-size: 1.1rem;
      color: var(--white-color);
      padding-bottom: 0.5rem;
    }
    p {
      padding: 0.1rem 0;
    }
  }
`;
export default ContactItem;
