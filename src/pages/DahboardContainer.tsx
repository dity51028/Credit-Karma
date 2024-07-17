import { FC, useState } from "react";
import {
  CurrentBalanceCard,
  TotalExpenseCard,
  TotalIncomeCard,
} from "../components/card";
import { NavBarContainer } from "../components/navbar";

const DashboardContainer: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setshowModal] = useState<boolean>(false);
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
          setShowmodal={setshowModal}
        />

        <TotalIncomeCard
          loading={loading}
          setLoading={setLoading}
          setShowModal={setshowModal}
        />
      </div>
    </>
  );
};

export default DashboardContainer;
