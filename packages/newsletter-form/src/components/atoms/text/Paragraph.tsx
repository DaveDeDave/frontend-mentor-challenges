import { FC } from "react";

interface ParagraphProps {
  text: string;
}

export const Paragraph: FC<ParagraphProps> = ({ text }) => {
  return <p className="nw-paragraph">{text}</p>;
};
