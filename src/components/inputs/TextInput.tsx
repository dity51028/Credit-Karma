import { Dispatch, FC, SetStateAction } from "react";
import { mergeStyles } from "../../utils";

type TTextInputProps = {
  style: string;
  state: string;
  onStateChange: Dispatch<SetStateAction<string>>;
};

const TextInput: FC<TTextInputProps> = ({ state, style, onStateChange }) => {
  return (
    <input
      value={state}
      onChange={(e) => onStateChange(e.target.value)}
      type="text"
      placeholder="Type here"
      className={mergeStyles("input input-bordered w-full max-w-xs", style)}
    />
  );
};

export default TextInput;
