const ChevronIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="30"
      height="56"
      viewBox="0 0 30 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.707031 0.707031L27.7565 27.7565L0.707031 54.806"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronIcon;
