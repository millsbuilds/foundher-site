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
          The uniform of the unstoppable.
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

      {/* ─── Section 3: Quote ─── */}
      <section style={{ background: C.cream, padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(24px, 4vw, 32px)", color: C.navy, lineHeight: 1.3, maxWidth: 700, margin: "0 auto" }}>
          Be, Do, &amp; Love yourself and who you are — proudly.
        </h2>
      </section>

      <ColorBar />

      {/* ─── Section 4: Couch Lifestyle ─── */}
      <img
        src="/images/FH_couch-lifeestyle.png"
        alt="Lifestyle — Couch"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      <ColorBar />

      {/* ─── Section 5: Samples + DNA text + Color row ─── */}
      <section style={{ background: C.cream, padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* 5a. Samples image */}
          <img
            src="/images/FH_samples.png"
            alt="Product samples"
            style={{ width: "100%", maxWidth: 800, height: "auto", display: "block", margin: "0 auto 32px", objectFit: "contain" }}
          />

          {/* 5b. DNA tagline */}
          <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: "clamp(20px, 3vw, 26px)", color: C.navy, lineHeight: 1.5, maxWidth: 700, margin: "0 auto 16px", textAlign: "center" }}>
            Your FoundHer DNA is as much a part of who you are as your signature. Wear it like you love it.
          </p>

          {/* 5c. Color choices line */}
          <p style={{ fontFamily: font.body, fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, maxWidth: 700, margin: "0 auto 48px", textAlign: "center" }}>
            Every FoundHer piece comes in all seven color choices — because the only thing that matters is that it's yours.
          </p>

          {/* 5d. Cuff selection image */}
          <img
            src="/images/FH_cuff-selection.png"
            alt="The Cuff — all seven color choices"
            style={{ width: "100%", maxWidth: 900, height: "auto", display: "block", margin: "0 auto 48px", objectFit: "contain" }}
          />
        </div>
      </section>

      <ColorBar />

      {/* ─── Section 6: Wrist Stack ─── */}
      <img
        src="/images/FH_terracotta-stack.png"
        alt="The Cuff — Terracotta Stack"
        style={{ width: "100%", height: 450, objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      <ColorBar />

      {/* ─── Section 7: Product Grid ─── */}
      <section style={{ background: C.cream, padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48 }}>

            {/* Product 1 */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: font.body, fontStyle: "italic", fontSize: 13, color: C.gold, margin: "0 0 12px" }}>
                Choose your color — every Cuff is yours to make your own.
              </p>
              <img src="/images/FH_terracotta-band.png" alt="The Cuff — Terracotta" style={{ width: "100%", height: 320, objectFit: "cover", display: "block", marginBottom: 16 }} />
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.navy, marginBottom: 8 }}>The Cuff — Terracotta</h3>
              <p style={{ fontFamily: font.body, fontSize: 16, color: C.navy, lineHeight: 1.6, fontWeight: 300, margin: 0 }}>Gold-plated hardware. Enamel finish. The original founder credential.</p>
            </div>

            {/* Product 2 */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: font.body, fontStyle: "italic", fontSize: 13, color: C.gold, margin: "0 0 12px" }}>
                Choose your color — every Cuff is yours to make your own.
              </p>
              <img src="/images/FH_navy-logoes-band.png" alt="The Cuff — Navy" style={{ width: "100%", height: 320, objectFit: "cover", display: "block", marginBottom: 16 }} />
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.navy, marginBottom: 8 }}>The Cuff — Navy</h3>
              <p style={{ fontFamily: font.body, fontSize: 16, color: C.navy, lineHeight: 1.6, fontWeight: 300, margin: 0 }}>Gold-plated hardware. Enamel finish. For the founder who leads in navy.</p>
            </div>

            {/* Product 3 */}
            <div style={{ textAlign: "center" }}>
              <img src="/images/FH_gold-logo-band.png" alt="The Cuff — Gold" style={{ width: "100%", height: 320, objectFit: "cover", display: "block", marginBottom: 16 }} />
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.navy, marginBottom: 8 }}>The Cuff — Gold</h3>
              <p style={{ fontFamily: font.body, fontSize: 16, color: C.navy, lineHeight: 1.6, fontWeight: 300, margin: 0 }}>Pure gold finish. No color. Just the mark.</p>
            </div>

            {/* Product 4 */}
            <div style={{ textAlign: "center" }}>
              <img src="/images/FH_navy-rope-bracelet.png" alt="The Rope Bracelet" style={{ width: "100%", height: 320, objectFit: "cover", display: "block", marginBottom: 16 }} />
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.navy, marginBottom: 8 }}>The Rope Bracelet</h3>
              <p style={{ fontFamily: font.body, fontSize: 16, color: C.navy, lineHeight: 1.6, fontWeight: 300, marginBottom: 8 }}>Navy cord. Gold charm. Worn alone or stacked.</p>
              <p style={{ fontFamily: font.body, fontStyle: "italic", fontSize: 13, color: C.terracotta, margin: 0 }}>Coming Soon</p>
            </div>

          </div>
        </div>
      </section>

      <ColorBar />

      {/* ─── Section 8: Beach Girl Portrait ─── */}
      <section style={{ background: C.cream, padding: "64px 24px", textAlign: "center" }}>
        <img
          src="/images/FH_bandana-lifestyle.png"
          alt="The mark goes everywhere she goes"
          style={{ maxWidth: 400, width: "100%", height: "auto", display: "block", margin: "0 auto", objectFit: "contain" }}
        />
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 20, color: C.navy, marginTop: 32 }}>
          The mark goes everywhere she goes.
        </p>
      </section>

      <ColorBar />

      {/* ─── Section 9: Rich Life ─── */}
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
