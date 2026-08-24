import Image from "next/image";

export default function Residencias() {
  return (
    <section className="w-full bg-[#f4f1ec]">
      <div className="relative h-[1500px] w-full overflow-hidden border border-white/80 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
        <div className="flex h-full flex-col gap-[12px] p-[10px]">
          <div className="grid grid-cols-[2.2fr_1fr] gap-[12px]">
            <div className="flex flex-col gap-4 bg-white">
              <div className="relative h-[480px] overflow-hidden bg-white">
                <Image
                  src="/images/living-tarde.png"
                  alt="Living al atardecer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </div>

              <div className="flex flex-col gap-10 px-10 pb-20 text-[#1a1a1a]">
                <div
                  style={{
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "36px",
                    lineHeight: "103%",
                    letterSpacing: "0%",
                    marginTop: "10px",
                  }}
                >
                  Departamentos de 1, 2, 3 y 4 <br /> dormitorios. Encontrá tu
                  lugar.
                </div>

                <a
                  href="/residencias"
                  className="inline-block uppercase text-[#1a1a1a] underline decoration-[2px] underline-offset-[8px]"
                  style={{
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "28px",
                    lineHeight: "103%",
                    letterSpacing: "0%",
                    textTransform: "uppercase",
                  }}
                >
                  Ver residencias
                </a>
              </div>
            </div>

            <div className="relative h-[660px] overflow-hidden bg-white">
              <Image
                src="/images/interior-vidrio.png"
                alt="Interior con vidrio"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-[474px_912px] gap-[12px]">
            <div className="relative h-[624px] w-[474px] overflow-hidden bg-white">
              <Image
                src="/images/tarde-sol.png"
                alt="Tarde de sol"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>

            <div className="flex flex-col gap-3 bg-white">
              <div className="relative h-[449px] w-[912px] overflow-hidden bg-white">
                <Image
                  src="/images/dos-torres.png"
                  alt="Dos torres"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </div>

              <div className="px-1 pb-1 text-[#1a1a1a]">
                <div
                  style={{
                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "103%",
                    letterSpacing: "0%",
                  }}
                >
                  Vistas extraordinarias
                  <br />
                  al río y la ciudad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
