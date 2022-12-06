import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";

const Home = () => {
  const url = window.location.href;
  console.log(url);
  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("s")) {
        window.scrollTo({
          top: 250,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
};

export default Home;
