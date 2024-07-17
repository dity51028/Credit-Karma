import { Dispatch, FC, SetStateAction, useState } from "react";
import { GenericCard } from ".";

type TTotalIncomeCard = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const TotalIncomeCard: FC<TTotalIncomeCard> = ({
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
      title={"Total Income"}
      buttonText="Reset"
      balance={100}
      onClick={() => {}}
      loading={loading}
    />
  );
};

export default TotalIncomeCard;
