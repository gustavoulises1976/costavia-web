import Image from "next/image";
import { ReactNode } from "react";

const captionStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "103%",
  letterSpacing: "0%",
} as const;

function GalleryImage({
  src,
  alt,
  caption,
  aspectRatio,
  heightPx,
  widthClass = "w-full",
  align,
  fullBleed,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  aspectRatio?: string;
  heightPx?: number;
  widthClass?: string;
  align?: "right";
  fullBleed?: boolean;
  className?: string;
}) {
  if (fullBleed) {
    return (
      <div className={`h-[calc(100vh-3rem)] w-full ${className}`}>
        <div className="relative h-[80%] w-full overflow-hidden">
          <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
        </div>

        {caption && (
          <div className="flex h-[20%] w-full items-start pt-2.5">
            <p className="text-left text-black" style={captionStyle}>
              {caption}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${widthClass} ${align === "right" ? "ml-auto" : ""} ${className}`}
    >
      <div
        className="relative w-full overflow-hidden"
        style={heightPx ? { height: `${heightPx}px` } : { aspectRatio }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>

      {caption && (
        <p className="mt-2.5 text-left text-black" style={captionStyle}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default function GalleryMobile() {
  return (
    <section className="w-full border-b border-gray-300 bg-white px-2.5 pb-15">
      <GalleryImage
        src="/images/ame2.png"
        alt="Piscina exterior"
        caption="Piscina exterior"
        heightPx={238}
      />

      <GalleryImage
        src="/images/ame3.png"
        alt="Lounge"
        caption="Lounge"
        heightPx={348}
        widthClass="w-3/4"
        align="right"
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame4.png"
        alt="Piscina interior"
        caption="Piscina interior"
        heightPx={238}
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame9.png"
        alt="Sauna"
        caption="Sauna"
        heightPx={288}
        widthClass="w-4/5"
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame5.png"
        alt="Piscinas suspendidas"
        caption="Piscinas suspendidas"
        fullBleed
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame6.png"
        alt="Gimnasio"
        caption="Gimnasio"
        heightPx={237}
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame7.png"
        alt="Costavia amenities"
        heightPx={238}
        widthClass="w-[45%]"
        align="right"
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame8.png"
        alt="Terrazas con vistas 360°"
        caption="Terrazas con vistas 360°"
        heightPx={238}
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame10.png"
        alt="Solarium"
        caption="Solarium"
        heightPx={288}
        widthClass="w-4/5"
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame11.png"
        alt="Locales comerciales y gastronómicos"
        caption={
          <>
            Locales comerciales
            <br />y gastronómicos
          </>
        }
        heightPx={499}
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame12.png"
        alt="Sum y parrilleros"
        caption="Sum y parrilleros"
        heightPx={288}
        widthClass="w-[85%]"
        align="right"
        className="mt-10"
      />

      <GalleryImage
        src="/images/ame13.png"
        alt="Espacio de cowork"
        caption="Espacio de cowork"
        heightPx={238}
        className="mt-10"
      />
    </section>
  );
}
