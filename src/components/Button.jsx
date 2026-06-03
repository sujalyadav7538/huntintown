const Button = ({ text, variant = "outline", className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 cursor-pointer text-white  font-medium rounded-md transition-colors
      ${
        variant === "contained"
          ? "bg-red-600 hover:bg-red-700"
          : "border border-white hover:border-red-400 "
      }
      ${
        props.size === "sm"
          ? "text-sm"
          : props.size === "lg"
          ? "text-lg"
          : "text-sm"
      }
      ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
