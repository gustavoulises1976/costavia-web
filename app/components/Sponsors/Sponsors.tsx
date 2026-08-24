import GagliardoLogo from "../../icons/GagliardoLogo";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

const textStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "19px",
  lineHeight: "139%",
  letterSpacing: "0%",
} as const;

const sponsors = [
  {
    logo: <GagliardoLogo className="h-18" />,
    description:
      "Referente en arquitectura y diseño desde 1990, crea proyectos innovadores que aportan valor a la ciudad, con una mirada contemporánea, sensible e integrada a su entorno. Forma parte del Grupo Gagliardo.",
  },
  {
    logo: <ObringLogo className="h-16" />,
    description:
      "Con más de cinco décadas de trayectoria, impulsa el desarrollo del país a través de obras de infraestructura, hábitat y proyectos urbanísticos e inmobiliarios de alto impacto.",
  },
  {
    logo: <RosentalLogo className="-mt-3.5 h-20" />,
    description:
      "Empresa líder en servicios financieros, especializada en la identificación y desarrollo de oportunidades de inversión innovadoras con alcance regional.",
  },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-white px-8 py-16 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 md:px-8 md:first:pl-0 md:last:pr-0"
          >
            {index > 0 && (
              <div className="absolute -left-5 top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-black md:block" />
            )}

            <div className="invert flex h-20 items-start">{sponsor.logo}</div>

            <p className="text-black" style={textStyle}>
              {sponsor.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
