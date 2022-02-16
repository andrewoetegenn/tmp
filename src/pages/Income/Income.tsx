import { Table, Column } from "../../components/Table";
import "./Income.css";

const Income = () => {
  const columns: Column[] = [
    {
      key: "description",
      header: "Description",
    },
    {
      key: "amount",
      header: "Amount",
      type: "currency",
      align: "right",
    },
    {
      key: "expenses",
      header: "Expenses",
      type: "currency",
      align: "right",
    },
    {
      key: "savings",
      header: "Savings",
      type: "currency",
      align: "right",
    },
    {
      key: "remaining",
      header: "Remaining",
      type: "currency",
      align: "right",
    },
  ];

  return (
    <>
      <h2>Income</h2>
      <Table columns={columns} rows={[]} />
    </>
  );
};

export default Income;
