import React from "react";
import GlobalStyle from "../styles/GlobalStyle.js";
import CarouselBootstraps from "../components/Carousel";
import QuickBook from "../components/QuickBook";
import Header from "../components/Header";
import MainSpecialOffers from "../components/Main_Contents/MainSpecialOffers";
import Momentum from "../components/Momentum.js";
import Footer from "../components/Footer.js";

function Main() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <CarouselBootstraps></CarouselBootstraps>
      <QuickBook></QuickBook>
      <MainSpecialOffers></MainSpecialOffers>
      <Momentum></Momentum>
      <Footer></Footer>
    </>
  );
}
export default Main;
