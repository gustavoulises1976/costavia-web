import CostaviaLogo from "../../icons/CostaviaLogo";
import GagliardoLogo from "../../icons/GagliardoLogo";
import InstagramIcon from "../../icons/InstagramIcon";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

export default function Footer() {
  return (
    <footer className="flex h-80.5 w-full flex-col justify-center gap-8 bg-white px-8 py-10 text-black md:px-10 lg:px-14">
      <div className="flex items-center justify-between">
        <div className="invert">
          <CostaviaLogo className="h-6" />
        </div>

        <div className="flex items-center gap-8">
          <div className="invert">
            <GagliardoLogo className="h-6" />
          </div>
          <div className="invert">
            <ObringLogo className="h-6" />
          </div>
          <div className="invert">
            <RosentalLogo className="h-6" />
          </div>
          <InstagramIcon className="h-4.5 w-4.5" />
        </div>
      </div>

      <div className="h-px w-full bg-black" />

      <div className="flex items-end justify-between">
        <div className="flex gap-16">
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            GAGLIARDO
            <br />
            +54 9 3412 10-5514
            <br />
            info@obring.com.ar
          </p>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            ROSENTAL INVERSIONES
            <br />
            +54 9 3416 71-9710
          </p>
        </div>
      </div>
    </footer>
  );
}
