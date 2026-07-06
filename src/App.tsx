import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import MembersPage from "./pages/MembersPage";
import PasswordGate from "./components/PasswordGate";

export default function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  );
}
