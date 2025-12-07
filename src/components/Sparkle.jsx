export default function Sparkle({ className = "w-3 h-3", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1V3M8 13V15M1 8H3M13 8H15M3.343 3.343L4.757 4.757M11.243 11.243L12.657 12.657M3.343 12.657L4.757 11.243M11.243 4.757L12.657 3.343"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}

