import { useState, type ReactNode, type FormEvent } from "react";

const STORAGE_KEY = "fh_authed";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "true");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (authed) return <>{children}</>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === "MillyBird123!") {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F4F1EA", padding: 24 }}>
      <img src="/images/FH_mark_official.png" alt="FoundHer AI" style={{ width: 80, marginBottom: 32 }} />
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%", maxWidth: 320 }}>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Enter password"
          style={{ width: "100%", padding: "12px 16px", fontSize: 16, border: "1px solid #1B3A6B", borderRadius: 4, background: "#FFFFFF", color: "#1B3A6B", outline: "none", boxSizing: "border-box" }}
        />
        <button type="submit" style={{ width: "100%", padding: "12px 16px", fontSize: 16, fontWeight: 600, border: "none", borderRadius: 4, background: "#C16044", color: "#FFFFFF", cursor: "pointer" }}>
          Submit
        </button>
        {error && <p style={{ color: "#C16044", fontSize: 14, margin: 0 }}>Incorrect password</p>}
      </form>
    </div>
  );
}
