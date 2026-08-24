import ContactForm from "../components/ContactForm/ContactForm";
import EquipoHero from "../components/EquipoHero/EquipoHero";
import Footer from "../components/Footer/Footer";
import Sponsors from "../components/Sponsors/Sponsors";

export default function EquipoPage() {
  return (
    <>
      <EquipoHero />
      <Sponsors />
      <ContactForm />
      <Footer />
    </>
  );
}
