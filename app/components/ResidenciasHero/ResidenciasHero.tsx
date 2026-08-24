import PageHero from "../PageHero/PageHero";
import DepartamentosBar from "./DepartamentosBar";

export default function ResidenciasHero() {
  return (
    <>
      <PageHero
        imageSrc="/images/resi1.png"
        imageAlt="Costavia residencias"
        title="Residencias"
      />
      <DepartamentosBar />
    </>
  );
}
