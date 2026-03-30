import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
}) => {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white"
      : "border border-blue-600 text-blue-600";

  return (
    <button
      className={`${styles} px-4 py-2 rounded-md hover:opacity-80 transition`}
    >
      {children}
    </button>
  );
};

export default Button;