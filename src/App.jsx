import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import StaticHead from "./components/StaticHead";
import Home from "./components/Home";

function App() {
  return (
    <>
      <MyNav />
      {/* <StaticHead /> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
