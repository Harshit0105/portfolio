import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import FaceBookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typed from "react-typed";

function HomePage({ name }) {
  return (
    <HomePageStyled>
      <div className="p-particle-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          <span>{name}</span>
        </h1>
        <p>
          I'm{" "}
          <Typed
            strings={["Developer", "Freelancer"]}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
        </p>
        <div className="icons">
          <a
            href="https://github.com/Harshit0105"
            target="_blank"
            className="icon i-github"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-chudasama-a927a0183"
            target="_blank"
            className="icon i-linkedin"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/HarshitChudasa2"
            target="_blank"
            className="icon i-twitter"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com/harshit_01_05/"
            target="_blank"
            className="icon i-instagram"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/harshit.chudasama.10/"
            target="_blank"
            className="icon i-facebook"
            rel="noopener noreferrer"
          >
            <FaceBookIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    h1 {
      span {
        @media screen and (max-width: 447px) {
          font-size: 1.5rem;
        }
      }
    }
    p {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color-light);
        @media screen and (max-width: 447px) {
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 447px) {
        font-size: 1.5rem;
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0.2rem;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          box-shadow: 0px 0px 5px var(--primary-color),
            0px 0px 5px var(--primary-color);
          transition: all 0.4s ease-in-out;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid;
          color: skyblue;
          box-shadow: 0px 0px 5px skyblue, 0px 0px 5px skyblue;
          transition: all 0.4s ease-in-out;
        }
      }
      .i-codechef {
        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid pink;
          color: pink;
          box-shadow: 0px 0px 5px pink, 0px 0px 5px pink;
          transition: all 0.4s ease-in-out;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
          box-shadow: 0px 0px 5px #5f4687, 0px 0px 5px #5f4687;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;
export default HomePage;
