import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Nav/NavBar";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CallToAction from "./components/CallToAction/CallToAction";
import Pricing from "./components/Pricing/Pricing";
import Products from "./Products/Products";
import { useState } from "react";

const fetchProduct = async () => {
  const res = await fetch("./productData.json");
  return res.json();
};
const productPromise = fetchProduct();

function App() {
  const [isActive, setIsActive] = useState("product");
  const [cart, setCart] = useState([]);
  return (
    <>
      <NavBar cart={cart} setIsActive={setIsActive} />
      <ToastContainer />
      <Banner />
      <Stats />
      <Products
        productPromise={productPromise}
        cart={cart}
        setCart={setCart}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
