import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Income } from "./pages/Income";

const App = () => (
  <div className="wrapper">
    <Sidebar />
    <Routes>
      <Route path="" element={<Page name="Dashboard" />} />
      <Route path="income" element={<Income />} />
      <Route path="expenses" element={<Page name="Expenses" />} />
      <Route path="savings" element={<Page name="Savings" />} />
      <Route path="investments" element={<Page name="Investments" />} />
      <Route path="debts" element={<Page name="Debts" />} />
    </Routes>
  </div>
);

const Page = ({ name }: { name: string }) => (
  <div className="page">
    <h2>{name}</h2>
  </div>
);

export default App;
