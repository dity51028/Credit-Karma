import { FC, useState } from "react";
import {
  CurrentBalanceCard,
  TotalExpenseCard,
  TotalIncomeCard,
} from "../components/card";
import { NavBarContainer } from "../components/navbar";
import { FinanceModal } from "../components/modals";

const DashboardContainer: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setshowModal] = useState<boolean>(true);
  return (
    <>
      <NavBarContainer />

      <div className="flex justify-evenly">
        <CurrentBalanceCard
          loading={loading}
          setLoading={setLoading}
          setShowModal={setshowModal}
        />
        <TotalExpenseCard
          loading={loading}
          setLoading={setLoading}
          setShowModal={setshowModal}
        />

        <TotalIncomeCard
          loading={loading}
          setLoading={setLoading}
          setShowModal={setshowModal}
        />
        {showModal && (
          <FinanceModal
            onClose={() => {
              setshowModal(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default DashboardContainer;
