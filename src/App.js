import "./App.css";

// components

import About from "./components/about/About";
import Experience from "./components/experiences/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
// import Review from "./components/reviews/Review";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Review /> */}
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
