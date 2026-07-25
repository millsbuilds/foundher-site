import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import MembersPage from "./pages/MembersPage";
import TheCuffPage from "./pages/TheCuffPage";
import AboutPage from "./pages/AboutPage";
import ExecutiveSuitePage from "./pages/ExecutiveSuitePage";
import PasswordGate from "./components/PasswordGate";

export default function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/the-cuff" element={<TheCuffPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/executive-suite" element={<ExecutiveSuitePage />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  );
}
