import { useState, useEffect } from "react";
import { C, font, BRAND_SEGMENTS } from "../../styles/palette";

const ColorBar = () => (
  <div style={{ width: "100%", height: 20, display: "flex", borderTop: `1px solid ${C.ivory}`, borderBottom: `1px solid ${C.ivory}` }}>
    {BRAND_SEGMENTS.map((seg, i) => (
      <div
        key={i}
        style={{
          flex: 1,
          background: seg.color,
          borderRight: i < BRAND_SEGMENTS.length - 1 ? `1px solid ${C.ivory}` : "none",
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
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: C.white,
        borderBottom: `1px solid ${C.lightgray}`,
        fontFamily: font.body,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ position: "relative", display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 40 }} />
          <sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup>
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
            {menuOpen ? (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.black, transform: "translateY(7px) rotate(45deg)", transition: "all 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "transparent" }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.black, transform: "translateY(-7px) rotate(-45deg)", transition: "all 0.2s" }} />
              </>
            ) : (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.black }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.black }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.black }} />
              </>
            )}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/members" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Lifestyle</a>
            <a href="/the-cuff" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Cuff</a>
            <a href="/executive-suite" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Executive Suite</a>
            <a href="/about" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>About</a>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <a href="https://foundherdna.com" target="_blank" rel="noopener noreferrer" style={{ background: C.terracotta, color: C.white, border: "none", borderRadius: 0, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textDecoration: "none" }}>
              Take the DNA Test
            </a>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            background: C.white,
            borderTop: `1px solid ${C.lightgray}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <a href="/members" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Lifestyle</a>
          <a href="/the-cuff" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Cuff</a>
          <a href="/executive-suite" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Executive Suite</a>
          <a href="/about" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>About</a>
          <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <a href="https://foundherdna.com" target="_blank" rel="noopener noreferrer" style={{ background: C.terracotta, color: C.white, border: "none", borderRadius: 0, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textAlign: "center", marginTop: 8, textDecoration: "none", display: "block" }}>
            Take the DNA Test
          </a>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: C.black,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 24px",
        fontFamily: font.body,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          <span style={{ color: C.white }}>Found</span>
          <span style={{ color: C.coral }}>Her</span>
          <span style={{ color: C.white }}> AI™</span>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>
          Build. Launch. Scale. Live.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <a href="https://foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup></a>
          <a href="mailto:hello@foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup>, PBC · foundherai.ai · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function LizBryantPage() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: font.body, background: C.white, overflowX: "hidden" }}>
      <Nav />

      <section style={{ background: C.cream, padding: "140px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: font.body, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: C.terracotta, marginBottom: 24 }}>
            FOUNDER STORY
          </p>
          <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", color: C.navy, lineHeight: 1.15, marginBottom: 8 }}>
            Liz Bryant
          </h1>
          <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, fontWeight: 300, marginBottom: 0 }}>
            Founder, <a href="https://localsmark.com" target="_blank" rel="noopener noreferrer" style={{ color: C.terracotta, textDecoration: "none" }}>Locals Mark</a>
          </p>
        </div>
      </section>

      <ColorBar />

      <section style={{ background: C.cream, padding: "64px 24px" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "center", gap: isMobile ? 40 : 48, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ flex: isMobile ? "none" : "1 1 55%", textAlign: isMobile ? "center" : "left" }}>
            <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: "clamp(20px, 3vw, 28px)", color: C.navy, lineHeight: 1.5, marginBottom: 32, marginTop: 0 }}>
              "I would rather jump head first into a goal, than stay stuck asking ChatGPT and Google how to carry out a dream."
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              <a href="https://www.instagram.com/localsmarkco" target="_blank" rel="noopener noreferrer" style={{ color: C.terracotta, textDecoration: "none" }}>Liz Bryant</a> gave herself 30 days. She built it, launched it, and now she's scaling — <a href="https://localsmark.com" target="_blank" rel="noopener noreferrer" style={{ color: C.terracotta, textDecoration: "none" }}>Locals Mark</a> is in stores up the California coast and expanding every week.
            </p>
          </div>
          <div style={{ flex: isMobile ? "none" : "1 1 45%", display: "flex", flexDirection: "column", alignItems: "center", width: isMobile ? "100%" : "auto" }}>
            <video
              src="/liz-bryant.mp4"
              poster="/images/liz-poster.jpg"
              muted
              playsInline
              controls
              preload="metadata"
              style={{ width: isMobile ? "100%" : "auto", maxWidth: isMobile ? 400 : "none", maxHeight: isMobile ? "none" : 520, height: "auto", display: "block" }}
            />
            <p style={{ fontFamily: font.body, fontSize: 13, color: C.gray, marginTop: 12, marginBottom: 0 }}>
              Watch Liz's story · 0:49
            </p>
          </div>
        </div>
      </section>

      <ColorBar />

      <section style={{ background: C.cream, padding: "48px 24px", textAlign: "center" }}>
        <a href="/" style={{ fontFamily: font.body, fontSize: 15, color: C.terracotta, textDecoration: "none" }}>
          ← Back to FoundHer AI
        </a>
      </section>

      <ColorBar />
      <Footer />
    </div>
  );
}
