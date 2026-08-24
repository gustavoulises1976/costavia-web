import { ReactNode } from "react";

export default function InfoBar({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <div className="flex h-[300px] w-full flex-col items-start justify-center gap-4 bg-white px-4 md:flex-row md:items-center md:gap-16 md:px-8 lg:px-10 xl:px-14">
      <p
        className="uppercase text-black"
        style={{
          fontFamily: '"Utopia Std", "Georgia", serif',
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "32px",
          lineHeight: "103%",
          letterSpacing: "0%",
        }}
      >
        {title}
      </p>

      <p
        className="max-w-[420px] text-black md:ml-[110px]"
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "24px",
          lineHeight: "139%",
          letterSpacing: "0%",
        }}
      >
        {description}
      </p>
    </div>
  );
}
