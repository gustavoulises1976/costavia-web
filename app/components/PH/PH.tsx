import Image from "next/image";
import ArrowIcon from "../../icons/ArrowIcon";
import CostaviaPhLogo from "../../icons/CostaviaPhLogo";

export default function PH() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        <div className="flex h-full flex-col justify-between bg-[#B9CBB3] px-8 py-10 md:px-10 lg:px-14">
          <div
            className="inline-block w-fit bg-black px-4 py-2 text-white"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "19.98px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            Nuevo lanzamiento
          </div>

          <div className="flex flex-col gap-6 text-black">
            <CostaviaPhLogo className="block h-[110px] w-auto self-start" />

            <h2
              style={{
                fontFamily: '"PP Fraktion Sans", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 390,
                fontStyle: "normal",
                fontSize: "45px",
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
                fontFamily: '"PP Fraktion Sans", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 390,
                fontStyle: "normal",
                fontSize: "26.17px",
                lineHeight: "132%",
                letterSpacing: "0%",
              }}
            >
              Un edificio con aire de casa, donde el diseño eleva la vida
              cotidiana.
            </p>
          </div>

          <a
            href="#"
            className="flex w-fit items-center gap-3 text-black transition-opacity hover:opacity-70"
          >
            <span
              className="uppercase"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "28px",
                lineHeight: "103%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                textDecorationThickness: "2px",
              }}
            >
              Conocer PH
            </span>
            <ArrowIcon className="h-5 w-5 shrink-0" />
          </a>
        </div>

        <div className="relative h-full min-h-[320px] overflow-hidden">
          <Image
            src="/images/proyecto-10.png"
            alt="Costavia PH"
            fill
            style={{ objectFit: "cover", objectPosition: "10% 10%" }}
          />
        </div>
      </div>
    </section>
  );
}
