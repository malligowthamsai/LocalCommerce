import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectRole from "./pages/SelectRole";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RetailerDashboard from "./pages/RetailerDashboard";
import CustomerHome from "./pages/CustomerHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectRole />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/retailer" element={<RetailerDashboard />} />
        <Route path="/customer" element={<CustomerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;