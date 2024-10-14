import Header from "./Component/Header"
import Banner from "./Component/Banner"
import Catagory from "./Component/Catagory"
import PopularProduct from "./Component/Popular-product"
import ProductBanner from "./Component/Product-banner"
import FeatureInfo from "./Component/FeatureInfo"
import OrganicDeal from "./Component/Organic-Deal"
// import NextComponent from "./Component/NextComponent"
import Testimonials from "./Component/Testimonials"
import LatestNews from "./Component/LatestNews"
import Footer from "./Component/Foter"
function App() {
  

  return (
    <>
      <Header/>
      <Banner/>
      <Catagory/>
      <PopularProduct/>
      <ProductBanner/>
      <FeatureInfo/>
      <OrganicDeal/>
      {/* <NextComponent/> */}
      <Testimonials/>
      <LatestNews/>
      <Footer/>
    </>
  )
}

export default App
