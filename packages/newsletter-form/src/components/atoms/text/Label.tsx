import { FC } from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
}

export const Label: FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label className="nw-label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};
