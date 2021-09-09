import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import FaceBookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import CodeChefIcon from "@material-ui/icons/Code";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particle-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Harshit Chudasama</span>
        </h1>
        <p>
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is
        </p>
        <div className="icons">
          <a href="#" className="icon i-github">
            <GitHubIcon />
          </a>
          <a href="#" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
          <a href="#" className="icon i-codechef">
            <CodeChefIcon />
          </a>
          <a href="#" className="icon i-twitter">
            <TwitterIcon />
          </a>
          <a href="#" className="icon i-instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="icon i-facebook">
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
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid skyblue;
          color: skyblue;
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
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
export default HomePage;