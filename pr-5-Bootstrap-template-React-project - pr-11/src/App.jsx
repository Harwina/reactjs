import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Catagory from "./Component/Catagory";
import PopularProduct from "./Component/Popular-product";
import ProductBanner from "./Component/Product-banner";
import FeatureInfo from "./Component/FeatureInfo";
import OrganicDeal from "./Component/Organic-Deal";
import Testimonials from "./Component/Testimonials";
import LatestNews from "./Component/LatestNews";
import Contact from "./Component/Contact";
import Footer from "./Component/Foter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Catagory />
            <PopularProduct />
            <ProductBanner />
            <FeatureInfo />
            <OrganicDeal />
            <Testimonials />
            <LatestNews />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
