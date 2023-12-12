import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="nw-button" onClick={onClick}>
      {label}
    </button>
  );
};
