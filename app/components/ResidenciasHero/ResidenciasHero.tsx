import PageHero from "../PageHero/PageHero";
import DepartamentosBar from "./DepartamentosBar";

export default function ResidenciasHero() {
  return (
    <>
      <PageHero
        imageSrc="/images/resi1.webp"
        mobileImageSrc="/images/resi1-mob.webp"
        imageAlt="Costavia residencias"
        title="Residencias"
        mobileImageStyle={{ scale: 1.2, objectPosition: "50% 50%" }}
      />
      <DepartamentosBar />
    </>
  );
}
