import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-gray-900">FoundHer AI — coming soon</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
