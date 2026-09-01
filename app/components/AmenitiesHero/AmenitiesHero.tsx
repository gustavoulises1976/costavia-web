import PageHero from "../PageHero/PageHero";

export default function AmenitiesHero() {
  return (
    <PageHero
      imageSrc="/images/ame1.webp"
      mobileImageSrc="/images/ame1-mob.webp"
      imageAlt="Costavia amenities"
      title="Amenities"
      mobileImageStyle={{ objectPosition: "50% 50%" }}
    />
  );
}
