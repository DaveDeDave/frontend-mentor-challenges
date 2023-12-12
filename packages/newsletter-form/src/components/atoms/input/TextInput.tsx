import { forwardRef } from "react";
import { classNames } from "../../../utilities/general";
import { Label } from "../text/Label";

interface TextInputError {
  message: string;
}

interface TextInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  error?: TextInputError;
  onChange?: (value: string) => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, placeholder, error, onChange }, ref) => {
    return (
      <div className="nw-input-wrapper">
        {(label || error) && (
          <div className="nw-input-info">
            {label && <Label htmlFor={id} text={label} />}
            {error && (
              <Label
                className="nw-input-error-text"
                text={error.message}
              ></Label>
            )}
          </div>
        )}
        <input
          ref={ref}
          className={classNames(
            "nw-text-input",
            error ? "nw-text-input-error" : ""
          )}
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        ></input>
      </div>
    );
  }
);
