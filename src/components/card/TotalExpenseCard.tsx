import { Dispatch, FC, SetStateAction, useState } from "react";
import { GenericCard } from ".";

type TTotalExpenseCard = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const TotalExpenseCard: FC<TTotalExpenseCard> = ({
  loading,
  setLoading,
  setShowModal,
}) => {
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const onClick = () => {
    setShowModal(true);
    setCurrentBalance(1);
  };

  return (
    <GenericCard
      title={"Total Expence"}
      buttonText={"Reset"}
      balance={100}
      onClick={() => {}}
      loading={loading}
    />
  );
};

export default TotalExpenseCard;
