import ContactForm from "./components/ContactForm/ContactForm";
import Discover from "./components/Discover/Discover";
import LaGranVida from "./components/LaGranVida/LaGranVida";
import Project from "./components/Project/Project";
import Residencias from "./components/Residencias/Residencias";

export default function Home() {
  return (
    <>
      <LaGranVida />
      <Project />
      <Residencias />
      <Discover />
      <ContactForm />
    </>
  );
}
