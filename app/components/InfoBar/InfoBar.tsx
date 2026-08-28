import { ReactNode } from "react";

export default function InfoBar({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <div className="flex h-[220px] w-full flex-col items-start justify-center gap-4 bg-white px-6 md:h-[300px] md:flex-row md:items-center md:gap-16 md:px-8 lg:px-10 xl:px-14">
      <p
        className="text-[30px] uppercase leading-[93%] text-black md:text-[32px] md:leading-[103%]"
        style={{
          fontFamily: '"Utopia Std", "Georgia", serif',
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
      >
        {title}
      </p>

      <p
        className="max-w-[420px] text-[16px] leading-[117%] text-black md:ml-[110px] md:text-[24px] md:leading-[139%]"
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
      >
        {description}
      </p>
    </div>
  );
}
