import CostaviaLogo from "../../icons/CostaviaLogo";
import GagliardoLogo from "../../icons/GagliardoLogo";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

export default function FooterMobile() {
  return (
    <footer className="w-full bg-white text-black">
      <div className="h-px w-full bg-black" />

      <div className="flex flex-col items-center gap-8 px-6 py-15">
        <div className="invert">
          <CostaviaLogo className="h-auto w-70" />
        </div>

        <div className="flex items-center gap-12">
          <div className="invert">
            <GagliardoLogo className="h-6 w-auto" />
          </div>
          <div className="invert">
            <ObringLogo className="h-6 w-auto" />
          </div>
          <div className="invert">
            <RosentalLogo className="h-6 w-auto" />
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="h-px w-full bg-black" />
      </div>

      <div className="flex flex-col items-center gap-3 px-6 py-6">
        <p
          style={{
            fontFamily:
              '"Neue Haas Grotesk Text Pro", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "10px",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          2025 Landmark. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
