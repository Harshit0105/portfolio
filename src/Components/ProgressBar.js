import React from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
  return (
    <ProgramBarStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width, color: "red" }}></span>
        </div>
      </div>
    </ProgramBarStyled>
  );
}

const ProgramBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.2rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0.4rem;
        background-color: var(--primary-color);

        animation-name: animateBar;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 1s;
      }
    }
  }

  @keyframes animateBar {
    0% {
      /* transform: translateX(-100%); */
      z-index: -1;
      width: 0;
    }
    100% {
      z-index: 100;
      transform: translateX(0);
    }
  }
`;

export default ProgressBar;
