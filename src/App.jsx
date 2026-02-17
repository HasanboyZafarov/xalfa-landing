import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import PayWhatYouNeed from "./components/sections/PayWhatYouNeed";
import Write from "./components/sections/Write";
import HowItWork from "./components/sections/HowItWork";
import Footer from "./components/sections/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <PayWhatYouNeed />
      <Write />
      <HowItWork />
      <Footer />
    </>
  );
}

export default App;
