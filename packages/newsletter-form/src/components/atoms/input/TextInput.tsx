import { FC } from "react";

interface TextInputProps {
  id?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className="nw-text-input"
      id={id}
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    ></input>
  );
};
