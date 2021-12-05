import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css"
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Body from "./pages/body/Body";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
