import "./App.css";
import Header from "./component/header/header.jsx";
import Nav from "./component/nav/nav.jsx";
import About from "./component/about/About.jsx";
import Experience from "./component/Experience/experience";
import Services from "./component/services/services";
import Portfolio from "./component/portfolio/portfolio.jsx";
import Testimonials from "./component/testimonials/testimonials.jsx";
import Contact from "./component/contact/Contact.jsx";
import Footer from "./component/footer/footer.jsx";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
