import PageHero from "../PageHero/PageHero";

export default function ContactoHero() {
  return (
    <PageHero
      imageSrc="/images/con.png"
      mobileImageSrc="/images/conmob.jpg"
      imageAlt="Costavia contacto"
      title="Contacto"
      mobileImageStyle={{ objectPosition: "50% 50%" }}
    />
  );
}
