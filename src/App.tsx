import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="wrapper">
    <Sidebar />
    <Routes>
      <Route path="" element={<h1>Dashboard</h1>} />
      <Route path="income" element={<h1>Income</h1>} />
      <Route path="expenses" element={<h1>Expenses</h1>} />
      <Route path="savings" element={<h1>Savings</h1>} />
      <Route path="investments" element={<h1>Investments</h1>} />
      <Route path="debts" element={<h1>Debts</h1>} />
    </Routes>
  </div>
);

export default App;
