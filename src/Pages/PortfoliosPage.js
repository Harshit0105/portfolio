import React, { useState, useEffect } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import { getPortfolios } from "../data/portfolio";
import Loader from "react-loader-spinner";
import ErrorMessage from "../Components/ErrorMessage";

function PortfoliosPage() {
  const [menuItem, setMenuItem] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [button, setButtons] = useState([]);
  const [isPortfolioLoading, setIsPortfolioLoading] = useState(true);
  const [portfolioError, setPortfolioError] = useState(null);
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
    const controller = new AbortController();
    getPortfolios({ signal: controller.signal }).then((items) => {
      if (controller.signal.aborted) return;
      setIsPortfolioLoading(false);
      if (items.success) {
        const categories = items.data.flatMap((item) => item.category || []);
        setPortfolios(items.data);
        setButtons(["All", ...new Set(categories)]);
        setMenuItem(items.data);
        setPortfolioError(null);
      } else {
        setPortfolios([]);
        setButtons([]);
        setMenuItem([]);
        setPortfolioError("Could not load projects.");
      }
    });
    return () => controller.abort();
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
        {!isPortfolioLoading && portfolioError && (
          <ErrorMessage message={portfolioError} />
        )}
        {!isPortfolioLoading && !portfolioError && <Menu menuItem={menuItem} />}
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
