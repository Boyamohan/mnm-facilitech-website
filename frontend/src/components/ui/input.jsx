import React from "react";

export function Input({
  className,
  type = "text",
  as: Component = "input",
  placeholder,
  ...props
}) {
  return (
    <Component
      type={Component === "input" ? type : undefined}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c9d66] focus:border-transparent transition-all ${className || ""}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
