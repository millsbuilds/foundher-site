import { useState, useEffect } from "react";

const C = {
  navy: "#1B2A4A",
  cream: "#F4F1EA",
  gold: "#B8973E",
  terracotta: "#C1603A",
  espresso: "#3B2A22",
  white: "#FFFFFF",
  lightgray: "#F0F0F0",
};

const font = {
  display: "'Libre Baskerville', serif",
  body: "'DM Sans', sans-serif",
};

const BRAND_SEGMENTS = [
  { color: "#C1603A" },
  { color: "#1B2A4A" },
  { color: "#F4EFE4", ivory: true },
  { color: "#5A1F28" },
  { color: "#3F2A3F" },
  { color: "#3B2A22" },
];

const ColorBar = () => (
  <div style={{ width: "100%", height: 20, display: "flex", borderTop: "1px solid #F4EFE4", borderBottom: "1px solid #F4EFE4" }}>
    {BRAND_SEGMENTS.map((seg, i) => (
      <div
        key={seg.color}
        style={{
          flex: 1,
          background: seg.color,
          borderRight: i < BRAND_SEGMENTS.length - 1 ? "1px solid #F4EFE4" : "none",
          ...(seg.ivory ? { borderTop: "1px solid #E8E3D8", borderBottom: "1px solid #E8E3D8" } : {}),
        }}
      />
    ))}
  </div>
);

function Nav() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: C.white, borderBottom: `1px solid ${C.lightgray}`, fontFamily: font.body }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 40 }} />
        </a>
        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }} aria-label="Menu">
            {menuOpen ? (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.navy, transform: "translateY(7px) rotate(45deg)", transition: "all 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "transparent" }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.navy, transform: "translateY(-7px) rotate(-45deg)", transition: "all 0.2s" }} />
              </>
            ) : (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.navy }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.navy }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.navy }} />
              </>
            )}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/members" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Lifestyle</a>
            <a href="/the-cuff" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Cuff</a>
            <a href="/about" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>About</a>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <a href="https://foundherdna.com" target="_blank" rel="noopener noreferrer" style={{ background: C.terracotta, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textDecoration: "none" }}>Take the DNA Test</a>
          </div>
        )}
      </div>
      {isMobile && menuOpen && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.lightgray}`, padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          <a href="/members" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Lifestyle</a>
          <a href="/the-cuff" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Cuff</a>
          <a href="/about" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>About</a>
          <a href="mailto:hello@foundherai.ai" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <a href="https://foundherdna.com" target="_blank" rel="noopener noreferrer" style={{ background: C.terracotta, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textAlign: "center", marginTop: 8, textDecoration: "none", display: "block" }}>Take the DNA Test</a>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.navy, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          <span style={{ color: C.white }}>Found</span>
          <span style={{ color: C.terracotta }}>Her</span>
          <span style={{ color: C.white }}> AI™</span>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>
          Build. Launch. Scale. Live.
        </p>
        <p style={{ fontFamily: font.body, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup>, PBC · foundherai.ai · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function ExecutiveSuitePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: font.body, background: C.white, overflowX: "hidden" }}>
      <Nav />

      <ColorBar />

      {/* ─── Hero ─── */}
      <section style={{ background: C.navy, padding: "140px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: 24 }}>
          FoundHer Executive Suite
        </p>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: C.cream, lineHeight: 1.15, marginBottom: 16 }}>
          You don't need permission.
        </h1>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 20, color: C.cream, fontWeight: 400, marginBottom: 32 }}>
          You need the right tools.
        </p>
        <span style={{ display: "inline-block", background: C.terracotta, color: C.white, fontFamily: font.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 20px" }}>
          Coming Soon
        </span>
      </section>

      <ColorBar />

      {/* ─── Waitlist ─── */}
      <section style={{ background: C.cream, padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(26px, 4vw, 36px)", color: C.navy, lineHeight: 1.25, marginBottom: 24 }}>
            Built for the way you actually run a business.
          </h2>
          <p style={{ fontFamily: font.body, fontSize: 18, color: C.espresso, lineHeight: 1.75, marginBottom: 40 }}>
            The FoundHer Executive Suite puts every tool, agent, template, and integration you need in one place — curated specifically to your DNA type, so nothing in your toolkit was built for someone else. We're putting the finishing touches on it now.
          </p>

          {submitted ? (
            <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 17, color: C.terracotta }}>
              You're on the list. We'll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, maxWidth: 420, margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{ width: "100%", padding: "14px 16px", fontSize: 16, fontFamily: font.body, border: `1px solid ${C.gold}`, borderRadius: 0, background: C.white, color: C.espresso, outline: "none", boxSizing: "border-box" }}
              />
              <button
                type="submit"
                style={{ width: "100%", background: C.navy, color: C.cream, fontFamily: font.body, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "16px 40px", border: "none", borderRadius: 0, cursor: "pointer" }}
              >
                Join the Waitlist
              </button>
            </form>
          )}

          <p style={{ fontFamily: font.body, fontStyle: "italic", fontSize: 13, color: C.espresso, marginTop: 20, opacity: 0.6 }}>
            No spam. Just the launch.
          </p>
        </div>
      </section>

      <ColorBar />
      <Footer />
    </div>
  );
}
