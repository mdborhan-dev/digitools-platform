import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Nav/NavBar";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CallToAction from "./components/CallToAction/CallToAction";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Banner />
      <Stats />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
