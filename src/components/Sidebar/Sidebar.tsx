import "./Sidebar.css";

const sidebarItems = [
  "Summary",
  "Income",
  "Expenses",
  "Savings",
  "Investments",
  "Pensions",
  "Debts",
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Personal Finance App</h1>
      <ul className="sidebar-items">
        {sidebarItems.map((item) => (
          <ul className="sidebar-item" onClick={() => alert(item)}>
            {item}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
