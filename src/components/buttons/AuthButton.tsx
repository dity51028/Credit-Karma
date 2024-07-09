import { FC } from "react";
import { mergeStyles } from "../../utils";

type TAuthButtonProps = {
  style: string;
  onClick: () => void;
  text: string;
};

const AuthButton: FC<TAuthButtonProps> = ({ style, onClick, text }) => {
  return (
    <button
      className={mergeStyles("btn btn-active", style)}
      onClickCapture={onClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
