import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, text, sub_title }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{sub_title}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
  .left-content {
    padding-left: 20px;
    width: 50%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 15px;
      width: 3rem;
      height: 2px;
      background-color: var(--border-color);
      content: "";
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.8rem;
      padding-bottom: 0.5rem;
    }
    h6 {
      padding-bottom: 0.7rem;
      font-size: 1.4rem;
    }
  }
`;

export default ResumeItem;
