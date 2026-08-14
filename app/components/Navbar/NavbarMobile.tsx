import CostaviaLogo from "../../icons/CostaviaLogo";

export default function NavbarMobile() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <CostaviaLogo className="h-7 text-white" />
      </div>
    </header>
  );
}
