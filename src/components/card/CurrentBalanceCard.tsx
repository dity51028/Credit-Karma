import { Dispatch, FC, SetStateAction, useState } from "react";
import { GenericCard } from ".";

type TCurrentBalance = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CurrentBalanceCard: FC<TCurrentBalance> = ({
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
      title={"Current Balane"}
      buttonText={"Reset Balance"}
      onClick={onClick}
      balance={currentBalance}
      loading={loading}
    />
  );
};

export default CurrentBalanceCard;
