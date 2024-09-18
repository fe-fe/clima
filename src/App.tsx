import Navbar from "./components/Navbar";
import Home from "./Routes/Home";
import Sobre from "./Routes/Sobre";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const apiKey = "";

function App() {
  return (
    <>
      <Navbar
        active={0}
        links={[
          {
            nome: "home",
            url: "/",
            icon: null,
            target: "",
          },
          {
            nome: "sobre",
            url: "/sobre",
            icon: null,
            target: "",
          },
          {
            nome: "weatherapi",
            url: "https://www.weatherapi.com/",
            icon: <i className="fa fa-cloud" style={{ color: "white" }}></i>,
            target: "_blank",
          },
          {
            nome: "GitHub",
            url: "https://github.com/fe-fe",
            icon: <i className="fa fa-github" style={{ color: "white" }}></i>,
            target: "_blank",
          },
        ]}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
