import "./App.css";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const App = () => (
  <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
    <Routes>
      <Route path="/" element={<h2>Dashboard</h2>} />
      <Route path="/income" element={<h2>Income</h2>} />
      <Route path="/expenses" element={<h2>Expenses</h2>} />
      <Route path="/savings" element={<h2>Savings</h2>} />
      <Route path="/investments" element={<h2>Investments</h2>} />
      <Route path="/debts" element={<h2>Debts</h2>} />
    </Routes>
  </>
);

export default App;
