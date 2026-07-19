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

// ─── NAV ──────────────────────────────────────────────────────────────────────

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
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 40 }} />
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
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
            <a href="/members" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Shop</a>
            <a href="/about" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>About</a>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.navy, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.lightgray}`, padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          <a href="/members" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Shop</a>
          <a href="/about" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>About</a>
          <a href="mailto:hello@foundherai.ai" style={{ color: C.navy, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        background: C.navy,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 24px",
        fontFamily: font.body,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          <span style={{ color: "#FFFFFF" }}>Found</span>
          <span style={{ color: C.terracotta }}>Her</span>
          <span style={{ color: "#FFFFFF" }}> AI™</span>
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

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    image: "/images/FH_terracotta-band.png",
    title: "The Cuff \u2014 Terracotta",
    description: "Gold-plated hardware. Enamel finish. The original founder credential.",
    linkText: "Shop The Cuff \u2192",
    linkHref: "/the-cuff",
  },
  {
    image: "/images/FH_navy-logoes-band.png",
    title: "The Cuff \u2014 Navy",
    description: "Gold-plated hardware. Enamel finish. For the founder who leads in navy.",
    linkText: "Shop The Cuff \u2192",
    linkHref: "/the-cuff",
  },
  {
    image: "/images/FH_gold-logo-band.png",
    title: "The Cuff \u2014 Gold",
    description: "Pure gold finish. No color. Just the mark.",
    linkText: "Shop The Cuff \u2192",
    linkHref: "/the-cuff",
  },
  {
    image: "/images/FH_navy-rope-bracelet.png",
    title: "The Rope Bracelet",
    description: "Navy cord. Gold charm. Worn alone or stacked.",
    linkText: "Coming Soon",
    linkHref: null,
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MembersPage() {
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

      {/* ─── Section 1: Hero ─── */}
      <section style={{ background: C.navy, padding: "140px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 24 }}>
          The Shop
        </p>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: C.cream, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
          Pride never looked so good.
        </h1>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 18, color: C.cream, fontWeight: 400, opacity: 0.8 }}>
          For women who mean business — everywhere they go.
        </p>
      </section>

      {/* ─── Section 2: Bronco Lifestyle ─── */}
      <img
        src="/images/FH_bronco-lifestyle.png"
        alt="Lifestyle — Bronco"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      {/* ─── Section 3: Couch Lifestyle ─── */}
      <img
        src="/images/FH_couch-lifeestyle.png"
        alt="Lifestyle — Couch"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      {/* ─── Section 4: Samples ─── */}
      <img
        src="/images/FH_samples.png"
        alt="Product samples"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <ColorBar />

      {/* ─── Section 5: Product Grid ─── */}
      <section style={{ background: C.cream, padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: C.navy, lineHeight: 1.2, marginBottom: 12 }}>
            The Collection.
          </h2>
          <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.7, marginBottom: 56, fontWeight: 300 }}>
            Each piece carries the mark. Each piece tells the world who you are.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48 }}>
            {PRODUCTS.map((p) => (
              <div key={p.title} style={{ textAlign: "center" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "auto", display: "block", marginBottom: 20 }}
                />
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: C.navy, marginBottom: 8 }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: font.body, fontSize: 15, color: C.navy, lineHeight: 1.6, fontWeight: 300, marginBottom: 12 }}>
                  {p.description}
                </p>
                {p.linkHref ? (
                  <a href={p.linkHref} style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 15, color: C.terracotta, textDecoration: "none" }}>
                    {p.linkText}
                  </a>
                ) : (
                  <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 15, color: C.terracotta, margin: 0 }}>
                    {p.linkText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ColorBar />

      {/* ─── Section 6: Rich Life ─── */}
      <section style={{ background: C.espresso, padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: font.body, fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 32 }}>
            Remember, the goal isn't the business.
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: C.cream, lineHeight: 1.25, marginBottom: 28 }}>
            The goal is building the business that lets you live a rich life.
          </h2>
          <p style={{ fontFamily: font.body, fontSize: 17, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 20 }}>
            Not someday. Now. FoundHer AI organizes your foundation, streamlines your operations, and saves you the money on overhead expenses — so you can start living your life.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 17, color: "rgba(244,241,234,0.85)", lineHeight: 1.85 }}>
            Build the business that gets you there. Live the lifestyle as you go.
          </p>
        </div>
      </section>

      <ColorBar />
      <Footer />
    </div>
  );
}
