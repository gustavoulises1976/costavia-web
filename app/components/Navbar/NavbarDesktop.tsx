import CostaviaLogo from "../../icons/CostaviaLogo";

const navItems = ["Proyecto", "Residencias", "Amenitites", "Equipo", "Contacto"];

export default function NavbarDesktop() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 md:px-6 py-4">
      <div className="flex items-center">
        <CostaviaLogo className="h-8 md:h-10 text-white" />
      </div>

      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center gap-7 lg:gap-10"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-white uppercase transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
