import "./Sidebar.css";
import {
  FaHome,
  FaPoundSign,
  FaCoins,
  FaMoneyBill,
  FaChartLine,
  FaLandmark,
  FaChartPie,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FaChartPie />
        <h1>Personal Finance</h1>
      </div>
      <div className="sidebar-toggle">
        <i onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </i>
      </div>
      <ul className={`sidebar-items${showMenu ? " show" : ""}`}>
        {sidebarItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item${
              location.pathname === item.path ? " active" : ""
            }`}
          >
            <Link to={item.path}>
              {item.icon}
              <span className="sidebar-item-name">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
