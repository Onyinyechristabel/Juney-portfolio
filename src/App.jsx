import "./App.css";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Statement from "./components/Statement/Statement";
import Footer from "./components/Footer/Footer";

function App() {
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
}

export default App;
