import { FC, useEffect, useRef, useState } from "react";
import { TextInput } from "..";
import { useTheme } from "../../hooks";
import { ref } from "firebase/database";

type TFinanceModal = {
  onClose: () => void;
};

const FinanceModal: FC<TFinanceModal> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);

  const themeContext = useTheme();

  useEffect(() => {
    const handleOutsideClickListener = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mouseup", handleOutsideClickListener);
    return () =>
      document.removeEventListener("click", handleOutsideClickListener);
  }, [onClose]);

  return (
    <div
      className="h-screen
    w-screen
    backdrop-blur-sm
    absolute
    top-0
    flex
    items-center
    justify-center"
    >
      <div
        ref={divRef}
        className={`
      ${!themeContext.theme ? "bg-light-secondary" : "bg-white"}
      bg-white
      h-[400px]
      w-[400px]
      rounded-xl
      px-6
      py-2
      modal-shadow
      flex
      flex-col
      justify-center
      items-center
      gap-y-2
      `}
      >
        <p className="text-xl font-semibold text-center py-4">Add Income</p>
        <TextInput
          onStateChange={(e) => {}}
          placeHolder={"Enter Action Name"}
        />
        <TextInput onStateChange={(e) => {}} placeHolder="Enter Amount" />
        <TextInput onStateChange={(e) => {}} placeHolder="Enter Date here" />
        <div className="flex justify-around gap-x-2 ">
          <button
            className="bg-green-700
        hover:bg-green-800
        px-4
        py-2
        w-[75px]
        text-white rounded-md  
        transition
        ease-out
        delay-150
        "
          >
            Save
          </button>

          <button
            className="bg-red-700
        hover:bg-red-800
        px-4
        py-2
        w-[75px]
        items-center
        text-white rounded-md  
        transition
        ease-out
        delay-150
        "
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceModal;
