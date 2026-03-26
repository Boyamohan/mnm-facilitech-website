export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2";
  const variants = {
    default: "bg-brand-primary text-white hover:bg-blue-800 shadow-soft",
    secondary: "border-2 border-brand-primary text-brand-primary hover:bg-blue-50 bg-white",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-blue-50 bg-transparent",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
