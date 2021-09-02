import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume image"></img>
      </div>
      <div className="right-content">
        <h4>
          I am <span>Harshit Chudasama</span>
        </h4>
        <p className="paragraph">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Harshit Chudasama</p>
            <p>: 20</p>
            <p>: Indian</p>
            <p>: English, Hindi, Gujarati</p>
            <p>: Una, Gujarat-362560</p>
            <p>: XYZ</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  .left-content {
    width: 100%;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--width-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 0.5rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.2rem;
      .info-title {
        padding-right: 2rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.5rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
