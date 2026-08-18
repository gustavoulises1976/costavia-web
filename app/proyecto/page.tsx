import Carousel from "../components/Carousel/Carousel";
import City from "../components/City/City";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Lifestyle from "../components/Lifestyle/Lifestyle";
import Location from "../components/Location/Location";
import PH from "../components/PH/PH";
import ProyectoHero from "../components/ProyectoHero/ProyectoHero";
import Towers from "../components/Towers/Towers";

export default function ProyectoPage() {
  return (
    <>
      <ProyectoHero />
      <Lifestyle />
      <City />
      <Location />
      <Carousel />
      <Towers />
      <PH />
      <ContactForm />
      <Footer />
    </>
  );
}
