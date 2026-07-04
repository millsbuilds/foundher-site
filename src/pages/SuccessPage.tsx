export default function SuccessPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 48, color: "#1B3A6B", lineHeight: 1.1, marginBottom: 24 }}>
          Welcome to FoundHer.
        </h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "#1B3A6B", lineHeight: 1.7, marginBottom: 32 }}>
          Your order is confirmed. Watch your inbox for everything you need.
        </p>
        <div style={{ width: 48, height: 2, background: "#1B3A6B", margin: "32px auto" }} />
        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 20, color: "#1B3A6B", lineHeight: 1.6, marginBottom: 40 }}>
          "The goal was never the business. The goal was the life."
        </p>
        <button
          onClick={() => { window.location.href = 'https://foundherai.ai'; }}
          style={{ background: "#C16044", color: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 0, border: "none", cursor: "pointer" }}
        >
          Back to FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup> →
        </button>
      </div>
    </div>
  );
}
