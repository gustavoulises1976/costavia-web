import AmenitiesHero from "../components/AmenitiesHero/AmenitiesHero";
import AmenitiesInfoBar from "../components/AmenitiesHero/AmenitiesInfoBar";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";

export default function AmenitiesPage() {
  return (
    <>
      <AmenitiesHero />
      <AmenitiesInfoBar />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}
