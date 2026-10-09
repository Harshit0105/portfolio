import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";
import { Switch as Switching, Route } from "react-router-dom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import getUsers from "./data/user";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

const THEME_STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light-theme" || stored === "dark-theme") return stored;
  } catch (e) {
    // localStorage can be unavailable (private mode, blocked storage).
  }
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light-theme" : "dark-theme";
}

function App() {
  dotenv.config();
  const [theme, setTheme] = useState(getInitialTheme);
  const checked = theme === "light-theme";
  const [navToggle, setNavToggle] = useState(false);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      // Ignore: the theme still applies for this session.
    }
  }, [theme]);
  useEffect(() => {
    let mounted = true;
    getUsers().then((items) => {
      if (mounted) {
        if (items.success === true) {
          setUser(items.data);
          setIsLoading(false);
        } else {
          setUser([]);
          setIsLoading(true);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const themeToggler = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };
  return (
    <div className="App">
      {isLoading && (
        <div style={{ position: "absolute", left: "45%", top: "45%" }}>
          <Loader
            className="loader1"
            type="Rings"
            color="#007bff"
            secondaryColor="#cbced8" //"#2e344e"  //"#00BFFF"
            height={100}
            width={100}
            // timeout={3000}
          />
        </div>
      )}
      {!isLoading && (
        <div>
          <Sidebar navToggle={navToggle} />
          <div className="theme">
            <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  checked={checked}
                  onChange={themeToggler}
                  inputProps={{ "aria-label": "Toggle light theme" }}
                  size="medium"
                />
              </div>
            </div>
          </div>
          <div className="ham-burger-menu">
            <IconButton
              aria-label={navToggle ? "Close navigation" : "Open navigation"}
              aria-expanded={navToggle}
              onClick={() => setNavToggle(!navToggle)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <MainContentStyled>
            <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>
            <Switching>
              <Route path="/" exact>
                <HomePage name={user[0] ? user[0].full_name : ""} />
              </Route>
              <Route path="/about" exact>
                <AboutPage user={user[0] ? user[0] : null} />
              </Route>
              <Route path="/resume" exact>
                <ResumePage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfoliosPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage user={user[0] ? user[0] : null} />
              </Route>
            </Switching>
          </MainContentStyled>
        </div>
      )}
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    z-index: -1;
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 0.3;
    }
  }
`;
export default App;
