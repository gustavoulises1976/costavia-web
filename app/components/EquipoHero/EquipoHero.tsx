import PageHero from "../PageHero/PageHero";

export default function EquipoHero() {
  return (
    <PageHero
      imageSrc="/images/equi1.webp"
      mobileImageSrc="/images/equimob.webp"
      imageAlt="Costavia equipo"
      title="Equipo"
      mobileImageStyle={{ objectPosition: "50% 50%" }}
    />
  );
}
