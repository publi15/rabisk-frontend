import React from "react";

const Card = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-dark-panel",
    testimonial: "bg-dark-bg",
    plan: "bg-dark-panel border",
  };

  return (
    <div className={`${variants[variant]} p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
