import "./Sidebar.css";
import {
  FaHome,
  FaPoundSign,
  FaCoins,
  FaMoneyBill,
  FaChartLine,
  FaLandmark,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/income",
    name: "Income",
    icon: <FaPoundSign />,
  },
  {
    path: "/expenses",
    name: "Expenses",
    icon: <FaCoins />,
  },
  {
    path: "/savings",
    name: "Savings",
    icon: <FaMoneyBill />,
  },
  {
    path: "/investments",
    name: "Investments",
    icon: <FaChartLine />,
  },
  {
    path: "/debts",
    name: "Debts",
    icon: <FaLandmark />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {sidebarItems.map((item) => (
          <ul
            className={`sidebar-item${
              location.pathname === item.path ? " active" : ""
            }`}
          >
            <Link to={item.path}>
              {item.icon}
              <span className="sidebar-item-name">{item.name}</span>
            </Link>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
