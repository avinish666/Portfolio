export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}