import { FC } from "react";

interface ParagraphProps {
  text: string;
}

export const Title: FC<ParagraphProps> = ({ text }) => {
  return <h1 className="nw-title">{text}</h1>;
};
