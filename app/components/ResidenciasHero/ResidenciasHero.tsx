import PageHero from "../PageHero/PageHero";
import DepartamentosBar from "./DepartamentosBar";

export default function ResidenciasHero() {
  return (
    <>
      <PageHero
        imageSrc="/images/resi1.png"
        mobileImageSrc="/images/resi1-mob.jpg"
        imageAlt="Costavia residencias"
        title="Residencias"
        mobileImageStyle={{ scale: 1.2, objectPosition: "50% 50%" }}
      />
      <DepartamentosBar />
    </>
  );
}
