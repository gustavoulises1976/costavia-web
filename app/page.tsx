import ContactForm from "./components/ContactForm/ContactForm";
import CostaviaHero from "./components/CostaviaHero/CostaviaHero";
import Discover from "./components/Discover/Discover";
import Footer from "./components/Footer/Footer";
import LaGranVida from "./components/LaGranVida/LaGranVida";
import Project from "./components/Project/Project";
import Residencias from "./components/Residencias/Residencias";

export default function Home() {
  return (
    <>
      <CostaviaHero />
      <LaGranVida />
      <Project />
      <Residencias />
      <Discover />
      <ContactForm />
      <Footer />
    </>
  );
}
