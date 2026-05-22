import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Nav/NavBar";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Banner />
      <Stats />
    </>
  );
}

export default App;
