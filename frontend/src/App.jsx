import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Home from "./components/Header/Home";
import About from "./components/Header/About";
import Conatct from "./components/Header/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Conatct />} />
        </Routes>
        <div className="flex flex-1">
          <Sidebar />
          <Content />
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
