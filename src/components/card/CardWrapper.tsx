import { FC, useState } from "react";
import { GenericCard } from ".";
import { FinanceModal } from "../modals";
import { TModalHeader } from "../../@types";

type TcardWrapper = {
  loading: boolean;
};

const CardWrapper: FC<TcardWrapper> = ({ loading }) => {
  const [currentBalance, setcurrentBalance] = useState<number>(0);
  const [totalIncome, settotalIncome] = useState<number>(0);
  const [totalExpence, settotalExpence] = useState<number>(0);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [modalHeader, setmodalHeader] = useState<TModalHeader>("Add Expense");

  const onClick = (flag: number) => {
    if (flag === 0) {
      setcurrentBalance(0);
      return;
    } else if (flag === 1) {
      setmodalHeader("Add Income");
    } else if (flag === 2) {
      setmodalHeader("Add Expense");
    }
    setshowModal(true);
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <GenericCard
          loading={loading}
          title="Current Balance"
          balance={100}
          buttonText="Reset Balance"
          onClick={() => onClick(0)}
        />
        <GenericCard
          loading={loading}
          title="Total Income"
          balance={totalIncome}
          buttonText="Reset Balance"
          onClick={() => onClick(1)}
        />

        <GenericCard
          loading={loading}
          title="Total Expence"
          balance={totalExpence}
          buttonText="Reset Balance"
          onClick={() => onClick(2)}
        />

        {showModal && (
          <FinanceModal
            onClose={() => setshowModal(false)}
            modalHeader={modalHeader}
          />
        )}
      </div>
    </div>
  );
};

export default CardWrapper;
