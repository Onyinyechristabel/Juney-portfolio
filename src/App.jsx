import "./App.css";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Statement from "./components/Statement/Statement";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/About/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const HomePage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Hero />
      <Work />
      <Projects />
      <Statement />
      <Footer />
    </div>
  );
};
