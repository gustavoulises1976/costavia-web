import PageHero from "../PageHero/PageHero";

export default function ContactoHero() {
  return (
    <PageHero
      imageSrc="/images/con.webp"
      mobileImageSrc="/images/conmob.webp"
      imageAlt="Costavia contacto"
      title="Contacto"
      mobileImageStyle={{ objectPosition: "50% 50%" }}
    />
  );
}
