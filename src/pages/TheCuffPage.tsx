import { useState, useEffect } from "react";

const C = {
  white: "#FFFFFF",
  offwhite: "#F7F7F7",
  black: "#1B3A6B",
  coral: "#C16044",
  navy: "#1B3A6B",
  lightgray: "#F0F0F0",
  espresso: "#3B2A22",
  ivory: "#FAF7F2",
  terracotta: "#C1603A",
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
        <a href="/" style={{ position: "relative", display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 40 }} />
          <sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}></sup>
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
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <a href="/members" style={{ fontFamily: font.body, fontSize: 14, color: C.black, textDecoration: "none", fontWeight: 500 }}>The Shop</a>
            <a href="mailto:hello@foundherai.ai" style={{ fontFamily: font.body, fontSize: 14, color: C.black, textDecoration: "none", fontWeight: 500 }}>Contact</a>
            <a href="/" style={{ fontFamily: font.body, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: C.white, background: C.black, padding: "10px 22px", textDecoration: "none", borderRadius: 0 }}>Explore</a>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.lightgray}`, padding: "16px 24px" }}>
          <a href="/members" onClick={() => setMenuOpen(false)} style={{ display: "block", fontFamily: font.body, fontSize: 15, color: C.black, textDecoration: "none", padding: "12px 0", fontWeight: 500 }}>The Shop</a>
          <a href="mailto:hello@foundherai.ai" onClick={() => setMenuOpen(false)} style={{ display: "block", fontFamily: font.body, fontSize: 15, color: C.black, textDecoration: "none", padding: "12px 0", fontWeight: 500 }}>Contact</a>
          <a href="/" onClick={() => setMenuOpen(false)} style={{ display: "block", fontFamily: font.body, fontSize: 15, color: C.black, textDecoration: "none", padding: "12px 0", fontWeight: 500 }}>Explore</a>
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
        background: C.black,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 24px",
        fontFamily: font.body,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          <span style={{ color: "#FFFFFF" }}>Found</span>
          <span style={{ color: C.coral }}>Her</span>
          <span style={{ color: "#FFFFFF" }}> AI™</span>
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

// ─── COLLECTION DATA ─────────────────────────────────────────────────────────

const cuffColors = [
  { image: "/images/FH_cuff-oxblood.png", name: "Oxblood" },
  { image: "/images/FH_cuff-ivory.png", name: "Ivory" },
  { image: "/images/FH_cuff-espresso.png", name: "Espresso" },
  { image: "/images/FH_cuff-terracotta-navy.png", name: "Terracotta \u00b7 Navy" },
  { image: "/images/FH_cuff-emerald.png", name: "Emerald" },
  { image: "/images/FH_cuff-black.png", name: "Black" },
  { image: "/images/FH_navy-stack.png", name: "The Stack" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TheCuffPage() {
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
    <div style={{ fontFamily: font.body, background: C.white }}>
      <Nav />
      <main>

        {/* ─── Section 1: Hero Image ─── */}
        <img
          src="/images/FH_social-cuff.png"
          alt="Woman at event wearing The Cuff"
          style={{
            width: "100%",
            height: isMobile ? "60vh" : "85vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            marginTop: 64,
          }}
        />

        <ColorBar />

        {/* ─── Section 2: The Movement ─── */}
        <section style={{ background: C.ivory, padding: isMobile ? "64px 24px" : "100px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: isMobile ? 36 : 52,
              lineHeight: 1.1,
              color: C.espresso,
              marginBottom: 32,
              marginTop: 0,
            }}>
              Something is happening.
            </h2>
            <p style={{
              fontFamily: font.body,
              fontSize: isMobile ? 16 : 18,
              color: C.espresso,
              lineHeight: 1.8,
              margin: 0,
            }}>
              Women founders are building differently. Thinking bigger. Finding each other. FoundHer AI is where they build. The Cuff is how they show up.
            </p>
          </div>
        </section>

        <ColorBar />

        {/* ─── Section 3: Couch Lifestyle ─── */}
        <img
          src="/images/FH_couch-lifestyle.png"
          alt="Three women on couch laughing, Cuffs visible"
          style={{
            width: "100%",
            height: isMobile ? "50vh" : "80vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />

        <ColorBar />

        {/* ─── Section 4: The Credential ─── */}
        <section style={{ background: C.espresso, padding: isMobile ? "64px 24px" : "100px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: isMobile ? 36 : 52,
              lineHeight: 1.1,
              color: C.ivory,
              marginBottom: 32,
              marginTop: 0,
            }}>
              The Cuff isn't jewelry.
            </h2>
            <p style={{
              fontFamily: font.body,
              fontSize: isMobile ? 16 : 18,
              color: C.ivory,
              lineHeight: 1.8,
              margin: 0,
              opacity: 0.9,
            }}>
              It's a declaration. It says you took the test, you know your Genome type, and you're building with intention. Every woman who wears it has done the work. That's what makes it mean something.
            </p>
          </div>
        </section>

        <ColorBar />

        {/* ─── Section 5: Bronco Lifestyle ─── */}
        <img
          src="/images/FH_bronco-lifestyle.png"
          alt="Two women and a golden retriever in a white Bronco on PCH"
          style={{
            width: "100%",
            height: isMobile ? "50vh" : "80vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />

        <ColorBar />

        {/* ─── Section 6: The Collection ─── */}
        <section style={{ background: C.ivory, padding: isMobile ? "64px 24px" : "100px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: isMobile ? 36 : 52,
              lineHeight: 1.1,
              color: C.espresso,
              marginBottom: isMobile ? 40 : 64,
              marginTop: 0,
            }}>
              Seven colorways. One credential.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? 16 : 24,
            }}>
              {cuffColors.map((cuff) => (
                <div key={cuff.name} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "100%",
                    aspectRatio: "1",
                    overflow: "hidden",
                    marginBottom: 12,
                    background: "#F4F1EA",
                  }}>
                    <img
                      src={cuff.image}
                      alt={cuff.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <p style={{
                    fontFamily: font.body,
                    fontSize: 14,
                    fontWeight: 500,
                    color: C.espresso,
                    margin: 0,
                  }}>
                    {cuff.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ColorBar />

        {/* ─── Section 7: The Offer ─── */}
        <section style={{ background: C.ivory, padding: isMobile ? "64px 24px" : "100px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: isMobile ? 32 : 48,
              lineHeight: 1.1,
              color: C.espresso,
              marginBottom: 20,
              marginTop: 0,
            }}>
              Declare yourself a proud founder.
            </h2>
            <p style={{
              fontFamily: font.body,
              fontSize: isMobile ? 15 : 17,
              color: C.espresso,
              lineHeight: 1.7,
              marginBottom: 36,
              opacity: 0.8,
            }}>
              Your free full Genome Report — including your matched AI agents and Genome Evolution roadmap — is included with every Cuff.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                fontFamily: font.body,
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: C.ivory,
                background: C.terracotta,
                padding: "16px 40px",
                textDecoration: "none",
                borderRadius: 0,
                cursor: "pointer",
              }}
            >
              Get The Cuff — $297
            </a>
            <p style={{
              fontFamily: font.body,
              fontSize: 13,
              color: C.espresso,
              opacity: 0.5,
              marginTop: 20,
            }}>
              Ships worldwide.
            </p>
          </div>
        </section>

        {/* ─── Rich Life ─── */}
        <section style={{ background: "#FFFFFF", padding: "96px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ width: 60, height: 3, background: "#1B3A6B", margin: "0 auto 40px" }} />
            <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: 18, color: "#1B3A6B", marginBottom: 12 }}>
              Remember, the goal isn't the business.
            </p>
            <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: "#1B3A6B", lineHeight: 1.2, textAlign: "center", margin: 0 }}>
              The goal is building the business that lets you live a rich life.
            </h2>
            <p style={{ fontFamily: font.body, fontSize: 18, color: "#1B3A6B", lineHeight: 1.6, margin: "24px auto 0", textAlign: "center" }}>
              Not someday. Now. FoundHer AI organizes your foundation, streamlines your operations, and saves you the money on overhead expenses — so you can start living your life.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 18, color: "#1B3A6B", lineHeight: 1.6, margin: "24px auto 0", textAlign: "center" }}>
              Build the business that gets you there. Live the lifestyle as you go.
            </p>
          </div>
        </section>

      </main>
      <ColorBar />
      <Footer />
    </div>
  );
}
