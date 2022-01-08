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

  const rows = [
    {
      description: "Salary (Andrew)",
      amount: 3000,
      expenses: 1500,
      savings: 500,
      remaining: 1000,
    },
    {
      description: "Salary (Bex)",
      amount: 2500,
      expenses: 1000,
      savings: 500,
      remaining: 1000,
    },
    {
      amount: 5500,
      expenses: 2500,
      savings: 1000,
      remaining: 2000,
    },
  ];

  return (
    <>
      <h2>Income</h2>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Income;
