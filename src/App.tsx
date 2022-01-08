import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Income } from "./pages/Income";
import { Layout } from "./components/Layout";

const App = () => (
  <Layout>
    <Routes>
      <Route path="" element={<h2>Dashboard</h2>} />
      <Route path="income" element={<Income />} />
      <Route path="expenses" element={<h2>Expenses</h2>} />
      <Route path="savings" element={<h2>Savings</h2>} />
      <Route path="investments" element={<h2>Investments</h2>} />
      <Route path="debts" element={<h2>Debts</h2>} />
    </Routes>
  </Layout>
);

export default App;
