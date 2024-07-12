import { ChangeEvent, FC } from "react";
import { mergeStyles } from "../../utils";

type TTextInputProps = {
  style?: string;
  onStateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
};

const TextInput: FC<TTextInputProps> = ({
  placeHolder,
  style,
  onStateChange,
}) => {
  return (
    <input
      onChange={(e) => onStateChange(e)}
      type="text"
      placeholder={placeHolder ? placeHolder : "type here"}
      className={mergeStyles(
        "input input-bordered w-full max-w-xs",
        style ? style : "",
      )}
    />
  );
};

export default TextInput;
