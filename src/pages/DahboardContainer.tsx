import { FC, useState } from "react";

import { NavBarContainer } from "../components/navbar";
import { CardWrapper } from "../components/card";
import FinanceDetails from "../components/financeTable/FinanceDetails";

const DashboardContainer: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setshowModal] = useState<boolean>(true);
  return (
    <>
      <NavBarContainer />
      <CardWrapper loading={loading} />
      <FinanceDetails />
    </>
  );
};

export default DashboardContainer;
