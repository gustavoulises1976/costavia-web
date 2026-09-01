import Image from "next/image";
import ArrowIcon from "../../icons/ArrowIcon";
import CostaviaPhLogo from "../../icons/CostaviaPhLogo";

export default function PHMobile() {
  return (
    <section className="flex h-[calc(100vh-3rem)] w-full flex-col overflow-hidden">
      <div className="flex h-[55%] w-full flex-col justify-between bg-[#B9CBB3] px-6 py-6">
        <div
          className="inline-block w-fit bg-black px-3 py-1.5 text-white"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "13.96px",
            lineHeight: "103%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          Nuevo lanzamiento
        </div>

        <div className="flex flex-col gap-4 text-black">
          <CostaviaPhLogo className="block h-[99px] w-[99px]" />

          <h2
            className="uppercase"
            style={{
              fontFamily:
                '"PP Fraktion Sans", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 390,
              fontStyle: "normal",
              fontSize: "31.45px",
              lineHeight: "106%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            Mismo proyecto,
            <br />
            diferente escala
          </h2>

          <p
            style={{
              fontFamily:
                '"PP Fraktion Sans", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 390,
              fontStyle: "normal",
              fontSize: "18.29px",
              lineHeight: "132%",
              letterSpacing: "0%",
            }}
          >
            Un edificio con aire de casa, donde
            <br /> el diseño eleva la vida cotidiana.
          </p>
        </div>

        <a
          href="https://costaviaph.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 text-black transition-opacity hover:opacity-70"
        >
          <span
            className="uppercase"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18.2px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              textDecoration: "underline",
              textUnderlineOffset: "6px",
              textDecorationThickness: "1.5px",
            }}
          >
            Conocer PH
          </span>
          <ArrowIcon className="h-[15px] w-[15px] shrink-0" />
        </a>
      </div>

      <div className="relative h-[45%] w-full overflow-hidden">
        <Image
          src="/images/proyecto-10.webp"
          alt="Costavia PH"
          fill
          style={{ objectFit: "cover", objectPosition: "10% 10%" }}
        />
      </div>
    </section>
  );
}
