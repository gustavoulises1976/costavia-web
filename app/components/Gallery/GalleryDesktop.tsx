import Image from "next/image";

const captionStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: "103%",
  letterSpacing: "0%",
} as const;

function GalleryImage({
  src,
  alt,
  caption,
  aspectRatio,
  width,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio: string;
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${width ? "" : "w-full"} ${className}`}
      style={width ? { aspectRatio, width, maxWidth: "100%" } : { aspectRatio }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />

      {caption && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.45) 100%)",
            }}
          />

          <p
            className="absolute bottom-4 left-4 text-white"
            style={captionStyle}
          >
            {caption}
          </p>
        </>
      )}
    </div>
  );
}

export default function GalleryDesktop() {
  return (
    <section className="w-full bg-white px-2.5 pb-15">
      <GalleryImage
        src="/images/ame2.png"
        alt="Piscina exterior"
        caption="Piscina exterior"
        aspectRatio="1404 / 720"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[440fr_946fr] pb-24">
        <GalleryImage
          src="/images/ame3.png"
          alt="Lounge"
          caption="Lounge"
          aspectRatio="440 / 660"
        />

        <GalleryImage
          src="/images/ame4.png"
          alt="Piscina interior"
          caption="Piscina interior"
          aspectRatio="946 / 480"
        />
      </div>

      <GalleryImage
        src="/images/ame5.png"
        alt="Piscinas suspendidas"
        caption="Piscinas suspendidas"
        aspectRatio="1404 / 720"
        width={1404}
        className="mt-4"
      />

      <div className="mt-4 flex flex-col items-start gap-4 md:flex-row pb-24">
        <GalleryImage
          src="/images/ame6.png"
          alt="Gimnasio"
          caption="Gimnasio"
          aspectRatio="612 / 360"
          width={612}
        />

        <GalleryImage
          src="/images/ame7.png"
          alt="Costavia amenities"
          aspectRatio="317 / 437"
          width={317}
        />
      </div>

      <GalleryImage
        src="/images/ame8.png"
        alt="Terrazas con vistas 360°"
        caption="Terrazas con vistas 360°"
        aspectRatio="1404 / 720"
        className="mt-4"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 pb-24">
        <GalleryImage
          src="/images/ame9.png"
          alt="Sauna"
          caption="Sauna"
          aspectRatio="456 / 568"
        />

        <GalleryImage
          src="/images/ame10.png"
          alt="Solarium"
          caption="Solarium"
          aspectRatio="455 / 568"
        />

        <GalleryImage
          src="/images/ame11.png"
          alt="Locales comerciales y gastronómicos"
          caption="Locales comerciales y gastronómicos"
          aspectRatio="456 / 568"
        />
      </div>

      <div className="mt-4 flex flex-col items-start gap-4 md:flex-row">
        <GalleryImage
          src="/images/ame12.png"
          alt="Sum y parrilleros"
          caption="Sum y parrilleros"
          aspectRatio="537 / 624"
          width={537}
        />

        <GalleryImage
          src="/images/ame13.png"
          alt="Espacio de cowork"
          caption="Espacio de cowork"
          aspectRatio="849 / 449"
          width={849}
        />
      </div>
    </section>
  );
}
