import { FC } from "react";
import { classNames } from "../../../utilities/general";

interface LabelProps {
  text: string;
  htmlFor?: string;
  className?: string;
}

export const Label: FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label className={classNames("nw-label", className)} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
