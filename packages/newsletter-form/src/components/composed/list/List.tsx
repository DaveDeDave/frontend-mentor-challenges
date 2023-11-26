import { FC } from "react";
import { ListIcon } from "../../atoms/icon";

interface ListProps {
  elements: string[];
}

export const List: FC<ListProps> = ({ elements }) => {
  return (
    <ul className="nw-list">
      {elements.map((element) => (
        <li className="nw-list-element">
          <span className="nw-list-element-icon">
            <ListIcon />
          </span>
          {element}
        </li>
      ))}
    </ul>
  );
};
