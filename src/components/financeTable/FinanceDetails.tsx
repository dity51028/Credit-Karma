import { FC, useEffect, useState } from "react";
import { TextInput } from "..";
import { debounce, mergeStyles } from "../../utils";
import FinanceDetailsTable from "./FinanceDetailsTable";

const FinanceDetails: FC = () => {
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (search.length === 0) return;
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="my-8 flex flex-row justify-around">
        <div>
          <TextInput
            onStateChange={(e) => {
                
              debounce(() => {
                setSearch(e.target.value);
              });
            }}
            placeHolder="Search by name"
          />
        </div>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            All Records
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-2/5 p-2 shadow"
          >
            <li>Income</li>
            <li>Expense</li>
          </ul>
        </div>
      </div>
      <FinanceDetailsTable/>
    </>
  );
};

export default FinanceDetails;
