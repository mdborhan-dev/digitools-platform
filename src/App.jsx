import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Nav/NavBar";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CallToAction from "./components/CallToAction/CallToAction";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Banner />
      <Stats />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
