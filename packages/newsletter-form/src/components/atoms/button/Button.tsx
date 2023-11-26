import { FC } from "react";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
  return <button className="nw-button">{label}</button>;
};
