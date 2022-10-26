import React from "react";

const Button = ({
  className = "bg-primary-green rounded-xsm text-white h-11 w-40 font-bold",
  title,
}) => {
  return <button className={className}>{title}</button>;
};

export default Button;
