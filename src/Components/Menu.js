import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebsiteIcon from "@material-ui/icons/Language";

function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

// Built once at module load instead of on every render.
const images = importAll(
  require.context("../img/portImages", false, /\.(png|jpe?g|svg)$/)
);

function Menu({ menuItem }) {
  if (menuItem.length === 0) {
    return <EmptyStyled>No projects in this category yet.</EmptyStyled>;
  }
  return (
    <MenuStyled>
      {menuItem
        .slice()
        .reverse()
        .map((item) => {
          return (
            <div className="grid-item" key={item._id}>
              <div className="portfolio-content">
                <div className="portfolio-image">
                  {images[item.imageUrl] && (
                    <img
                      src={images[item.imageUrl]}
                      alt={`Screenshot of ${item.title}`}
                      loading="lazy"
                    />
                  )}
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item.gitHubLink}
                        aria-label={`${item.title} source code on GitHub`}
                      >
                        <GitHubIcon />
                      </a>
                    </li>
                    {item.webSiteLink && (
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={item.webSiteLink}
                          aria-label={`${item.title} live website`}
                        >
                          <WebsiteIcon />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <h6>{item.title}</h6>
                <p>{item.details}</p>
              </div>
            </div>
          );
        })}
    </MenuStyled>
  );
}

const EmptyStyled = styled.p`
  text-align: center;
  padding: 2rem 0;
`;

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      p {
        white-space: pre-line;
      }
      img {
        width: 100%;
        height: 30vh;
        /* object-fit: contain; */
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 40%;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }
      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 2%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          transition: all 0.4s ease-in-out;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          max-height: 300px;
          height: calc(100% - 60%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;
export default Menu;
