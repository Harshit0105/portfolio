import React from "react";
import styled from "styled-components";
import resume from "../img/i2.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection({ user }) {
  const calculateDate = () => {
    var today = new Date();
    var birthDate = new Date("2001/05/01");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>{user ? user.full_name : ""}</span>
        </h4>
        <p className="paragraph">
          Highly organized, good learner. Strongly motivated individual with
          desire to learn new technological aspects and highly interested to
          work in the core areas of Mobile Applications and Web development.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: {user ? user.full_name : ""}</p>
            <p>: {calculateDate()}</p>
            <p>: Indian</p>
            <p>
              : {user ? user.languages.map((item) => `${item}`).join(", ") : ""}
            </p>
            <p>: {user ? user.address2 : ""}</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} link={user ? user.cv_link : "#"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
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
