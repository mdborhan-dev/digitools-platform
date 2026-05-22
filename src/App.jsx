import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Banner />
    </>
  );
}

export default App;
