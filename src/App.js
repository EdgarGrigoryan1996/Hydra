import "@fontsource/montserrat"; // Defaults to weight 400 with normal variant.
import s from './global.module.css';
import Header from "./Components/Header/Header";
import Technologies from "./Components/Technologies/Technologies";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import HowTo from "./Components/HowTo/HowTo";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={s.wrapper}>
        <Header />
        <About />
        <Services />
        <Technologies />
        <HowTo />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;
