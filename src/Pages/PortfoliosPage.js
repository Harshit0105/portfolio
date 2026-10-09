import React, { useState, useEffect, useMemo } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import { getPortfolios } from "../data/portfolio";
import Loader from "react-loader-spinner";

function PortfoliosPage() {
  const [portfolios, setPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPortfolioLoading, setIsPortfolioLoading] = useState(true);

  const categories = useMemo(() => {
    const all = portfolios.flatMap((item) => item.category || []);
    return ["All", ...new Set(all)];
  }, [portfolios]);

  const menuItem = useMemo(() => {
    if (activeCategory === "All") return portfolios;
    return portfolios.filter((item) =>
      (item.category || []).includes(activeCategory)
    );
  }, [portfolios, activeCategory]);
  useEffect(() => {
    getPortfolios().then((items) => {
      if (items.success === true) {
        setIsPortfolioLoading(false);
        setPortfolios(items.data);
      } else {
        setPortfolios([]);
        setIsPortfolioLoading(true);
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
        {!isPortfolioLoading && categories.length > 2 && (
          <Button
            filter={setActiveCategory}
            button={categories}
            active={activeCategory}
          />
        )}
        {!isPortfolioLoading && <Menu menuItem={menuItem} />}
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
