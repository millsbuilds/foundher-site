export default function SuccessPage() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 120, height: 120, display: "block", margin: "0 auto 32px" }} />
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 48, color: "#0D0D0D", lineHeight: 1.1, marginBottom: 24 }}>
          You're in. Welcome to the FoundHers Club.
        </h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 32 }}>
          Your membership is confirmed. We open the doors on September 17th — and you'll be among the first women through them. Watch your inbox for your welcome email and everything you need to get started.
        </p>
        <div style={{ width: 48, height: 2, background: "#E8553E", margin: "32px auto" }} />
        <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 20, color: "#0D0D0D", lineHeight: 1.6, marginBottom: 8 }}>
          "Dream big. Dream bigger than you ever thought possible."
        </p>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#E8553E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>
          — Mills Gardner, Founder, FoundHer AI, PBC
        </p>
        <button
          onClick={() => { window.location.href = 'https://foundherai.ai'; }}
          style={{ background: "#E8553E", color: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 0, border: "none", cursor: "pointer" }}
        >
          Back to FoundHers Club →
        </button>
      </div>
    </div>
  );
}
