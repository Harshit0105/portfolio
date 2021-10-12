import React, { useState, useEffect } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import { getPortfolios } from "../data/portfolio";
import Loader from "react-loader-spinner";

function PortfoliosPage() {
  const [menuItem, setMenuItem] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [button, setButtons] = useState([]);
  const [isPortfolioLoading, setIsPortfolioLoading] = useState(true);
  let allButtons = [];
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(portfolios);
    } else {
      const filteredData = portfolios.filter(
        (item) => item.category.indexOf(button) > -1
      );
      setMenuItem(filteredData);
    }
  };
  useEffect(() => {
    getPortfolios().then((items) => {
      if (items.success === true) {
        setIsPortfolioLoading(false);
        setPortfolios(items.data);
        let newButtons = [
          ...items.data.map((item) => item.category.map((item2) => item2)),
        ];
        newButtons = [].concat(...newButtons);
        allButtons = ["All", ...new Set(newButtons.map((x) => x))];

        setButtons(allButtons);
        setMenuItem(items.data);
      } else {
        setPortfolios([]);
        setIsPortfolioLoading(true);
        allButtons = [];
        setButtons(allButtons);
      }
    });
  }, []);
  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"Portfolio"} />
      <InnerLayout>
        {isPortfolioLoading && (
          <Loader
            className="loader"
            type="MutatingDots"
            color="#007bff"
            secondaryColor="#cbced8" //"#2e344e"  //"#00BFFF"
            height={100}
            width={100}
            // timeout={3000}
          />
        )}
        {/* {!isPortfolioLoading && (
          <Button filter={filter} button={button ? button : null} />
        )} */}
        {!isPortfolioLoading && <Menu menuItem={menuItem} />}
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
