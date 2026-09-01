import Image from "next/image";

const images = [
  { src: "/images/proyecto-6.webp", width: 332, height: 453 },
  { src: "/images/proyecto-7.webp", width: 336, height: 507 },
  { src: "/images/proyecto-8.webp", width: 267, height: 333 },
  { src: "/images/proyecto-9.webp", width: 415, height: 610 },
];

const textStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "103%",
  letterSpacing: "0%",
} as const;

const gridTemplateColumns = images.map((image) => `${image.width}fr`).join(" ");

export default function TowersDesktop() {
  return (
    <section className="w-full bg-white px-2.5 pb-24">
      <div className="grid items-start gap-4" style={{ gridTemplateColumns }}>
        {images.map((image) => (
          <div
            key={image.src}
            className="relative overflow-hidden"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={image.src}
              alt="Costavia torres"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div
        className="mt-12 grid items-start gap-4 text-black"
        style={{ gridTemplateColumns }}
      >
        <p className="box-border" style={{ ...textStyle, paddingLeft: 100 }}>
          TRES TORRES
        </p>

        <p style={textStyle}>
          Dos niveles de oficinas
          <br />
          Tres niveles de amenities
          <br />
          Tres subsuelos de estacionamientos
        </p>

        <p style={textStyle}>
          Áreas verdes
          <br />
          Amenities panorámicos
        </p>
      </div>
    </section>
  );
}
