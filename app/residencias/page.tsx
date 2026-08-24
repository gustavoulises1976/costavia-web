import Ambientes from "../components/Ambientes/Ambientes";
import Amenities from "../components/Amenities/Amenities";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import PlanosLayout from "../components/PlanosLayout/PlanosLayout";
import ResidenciasHero from "../components/ResidenciasHero/ResidenciasHero";
import ResidenciasTowers from "../components/ResidenciasTowers/ResidenciasTowers";

export default function ResidenciasPage() {
  return (
    <>
      <ResidenciasHero />
      <ResidenciasTowers />
      <PlanosLayout />
      <Amenities />
      <Ambientes />
      <ContactForm />
      <Footer />
    </>
  );
}
