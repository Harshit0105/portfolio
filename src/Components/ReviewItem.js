import React from "react";
import styled from "styled-components";

function ReviewItem({ text }) {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  );
}

const ReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 4px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  width: 100%;
  &:not(:first-child) {
    /* margin-left: 1rem; */
  }
  &::after {
    content: "";
    position: absolute;
    left: 1rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent
      var(--background-dark-grey);
  }
  p {
    padding: 0.5rem 0;
  }
`;

export default ReviewItem;
