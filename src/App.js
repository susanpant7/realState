import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css"
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Body from "./pages/body/Body";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
