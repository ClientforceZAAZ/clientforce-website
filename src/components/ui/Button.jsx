

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-dm text-sm font-medium transition duration-200";

  const variants = {
    primary:
      "relative overflow-hidden bg-[#35E834] text-black shadow-md hover:scale-105 hover:brightness-110",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}

      {/* Gradient Overlay for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-linear-to-r from-white/30 to-[#3DD8E7]/30 pointer-events-none"></span>
      )}
    </button>
  );
}