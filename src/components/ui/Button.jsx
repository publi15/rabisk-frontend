import React from "react";

const Button = ({
  children,
  variant = "cyan",
  size = "normal",
  className = "",
  ...props
}) => {
  const sizes = {
    small: "px-3 py-2 text-sm",
    normal: "px-6 py-3",
    large: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={`
        ${
          sizes[size]
        } rounded-lg font-semibold transition-all duration-300 inline-flex items-center
        ${className}
        ${
          variant === "cyan" &&
          "bg-accent-cyan text-white hover:bg-cyan-600 hover:scale-105"
        }
        ${
          variant === "purple" &&
          "bg-accent-purple text-white hover:bg-purple-700 hover:scale-105"
        }
        ${
          variant === "green" &&
          "bg-accent-green text-white hover:bg-green-600 hover:scale-105"
        }
        ${
          variant === "magenta" &&
          "bg-accent-magenta text-white hover:bg-pink-600 hover:scale-105"
        }
        ${
          variant === "orange" &&
          "bg-accent-orange text-white hover:bg-orange-600 hover:scale-105"
        }
        ${
          variant === "blue" &&
          "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
        }
        ${
          variant === "outline" &&
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent-cyan hover:scale-105"
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
