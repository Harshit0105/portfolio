import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/profilepic.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 Harshit</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 80%;
    text-align: center;

    .nav-item:not(:last-child) {
      margin-bottom: 1rem;
    }
    .active-class {
      box-shadow: inset -4px -4px 8px var(--background-dark-color),
        inset 8px 8px 16px rgba(0, 0, 0, 0.1);
      border-radius: 32px;
    }
    li {
      display: block;
      padding: 2px;
      a {
        display: block;
        padding: 0.35rem 0;
        position: relative;
        z-index: 2000;
        font-weight: 500;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        letter-spacing: 1px;
        &:not(.active-class) {
          box-shadow: -4px -4px 5px var(--background-dark-color),
            6px 6px 10px rgba(0, 0, 0, 0.2);
          border-radius: 32px;
        }
        &:hover:not(.active-class) {
          cursor: pointer;
          color: var(--white-color);
          box-shadow: -4px -4px 5px var(--background-light-color-2),
            6px 6px 10px var(--background-dark-color);
          border-radius: 32px;
          transition: all 0.4s ease-in-out;
        }
        /* &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        } */
      }
      /* a:hover::before {
        width: 100%;
        height: 100%;
      } */
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
