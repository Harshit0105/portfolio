import React from "react";
import styled from "styled-components";

function ErrorMessage({ message, onRetry }) {
  return (
    <ErrorMessageStyled role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      )}
    </ErrorMessageStyled>
  );
}

const ErrorMessageStyled = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  text-align: center;
  p {
    margin-bottom: 1rem;
  }
  button {
    background-color: var(--primary-color);
    border: none;
    color: white;
    padding: 0.4rem 1.2rem;
    cursor: pointer;
  }
`;

export default ErrorMessage;
