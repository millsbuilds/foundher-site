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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MembersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: font.body, background: C.white, overflowX: "hidden" }}>
      <Nav />

      {/* ─── Section 1: Hero ─── */}
      <section style={{ background: C.navy, padding: "140px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 24 }}>
          THE SHOP
        </p>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: C.cream, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
          The uniform of the unstoppable.
        </h1>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 18, color: C.cream, fontWeight: 400, opacity: 0.8 }}>
          For women who mean business — everywhere they go.
        </p>
      </section>

      <ColorBar />

      {/* ─── Section 2: Bronco Lifestyle ─── */}
      <img
        src="/images/FH_bronco-lifestyle.png"
        alt="Lifestyle — Bronco"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      {/* ─── Section 3: Quote ─── */}
      <section style={{ background: C.cream, padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(24px, 4vw, 32px)", color: C.navy, lineHeight: 1.3, maxWidth: 700, margin: "0 auto" }}>
          Be, Do, & Love yourself and who you are — proudly.
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

      {/* ─── Section 5: Cuff Selection ─── */}
      <section style={{ background: C.cream, padding: "64px 24px", textAlign: "center" }}>
        <img
          src="/images/FH_cuff-selection.png"
          alt="Cuff selection"
          style={{ maxWidth: 900, width: "100%", height: "auto", display: "block", margin: "0 auto 32px", objectFit: "contain" }}
        />
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: "clamp(20px, 3vw, 26px)", color: C.navy, lineHeight: 1.5, maxWidth: 700, margin: "0 auto 16px", textAlign: "center" }}>
          Your FoundHer DNA is as much a part of who you are as your signature. Wear it like you love it.
        </p>
        <p style={{ fontFamily: font.body, fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, margin: "0 auto 0", textAlign: "center" }}>
          Every FoundHer piece comes in all seven color choices — because the only thing that matters is that it's yours.
        </p>
      </section>

      <ColorBar />

      {/* ─── Section 6: The Stack ─── */}
      <div style={{ display: "flex", width: "100%" }}>
        <img
          src="/images/FH_navy-stack.png"
          alt="The Stack — navy"
          style={{ flex: 1, height: 500, objectFit: "cover", display: "block", minWidth: 0 }}
        />
        <img
          src="/images/FH_terracotta-stack.png"
          alt="The Stack — terracotta"
          style={{ flex: 1, height: 500, objectFit: "cover", display: "block", minWidth: 0 }}
        />
      </div>

      <ColorBar />

      {/* ─── Section 7: The Tote ─── */}
      <img
        src="/images/FH_everyday-tote-lifestyle.png"
        alt="The Tote"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center top", display: "block" }}
      />

      <ColorBar />

      {/* ─── Section 8: The Beach Towel ─── */}
      <div style={{ display: "flex", width: "100%", height: 500 }}>
        <img
          src="/images/FH_beach-towel-medley-terracotta.png"
          alt="Beach towel — terracotta"
          style={{ flex: "1 1 65%", minWidth: 0, height: "100%", objectFit: "contain", objectPosition: "center", display: "block", backgroundColor: C.cream }}
        />
        <div style={{ flex: "1 1 35%", minWidth: 0, height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, backgroundColor: C.terracotta }} />
          <div style={{ flex: 1, backgroundColor: C.navy }} />
          <img
            src="/images/FH_navy-towel-medley.png"
            alt="Beach towel — navy"
            style={{ flex: 2, minHeight: 0, width: "100%", objectFit: "contain", objectPosition: "center", display: "block", backgroundColor: C.cream }}
          />
        </div>
      </div>

      <ColorBar />

      {/* ─── Section 9: MacBook Sleeve ─── */}
      <div style={{ display: "flex", width: "100%", height: 600, alignItems: "stretch" }}>
        <img
          src="/images/FH_macbook-sleeve-lifestyle.png"
          alt="MacBook Sleeve lifestyle"
          style={{ flex: "0 0 65%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div style={{ flex: "0 0 35%", background: "#F4F1EA", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
          <img
            src="/images/FH_macbook-sleeves-shoot.png"
            alt="MacBook Sleeve product"
            style={{ width: "100%", height: "auto", maxHeight: 420, objectFit: "contain", display: "block" }}
          />
        </div>
      </div>

      <ColorBar />

      {/* ─── Section 10: Social Cuff ─── */}
      <img
        src="/images/FH_social-cuff.png"
        alt="FoundHer in the world"
        style={{ width: "100%", height: 600, objectFit: "cover", objectPosition: "center top", display: "block" }}
      />

      <ColorBar />

      {/* ─── Section 11: Beach Shower ─── */}
      <section style={{ background: "#F4F1EA", padding: "64px 24px", display: "flex", justifyContent: "center" }}>
        <img
          src="/images/FH_beach-shower.png"
          alt="Lifestyle"
          style={{ width: 400, maxWidth: "100%", height: 600, objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </section>

      <ColorBar />

      {/* ─── Section 12: Apple Watch + Phone Case ─── */}
      <div style={{ display: "flex", width: "100%", height: 550, alignItems: "stretch", background: "#F4F1EA" }}>
        <div style={{ flex: "0 0 60%", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px" }}>
          <img
            src="/images/apple_watch.png"
            alt="FoundHer Apple Watch band"
            style={{ width: "100%", maxWidth: 420, height: "auto", objectFit: "contain", display: "block" }}
          />
        </div>
        <div style={{ flex: "0 0 40%", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 48px" }}>
          <img
            src="/images/FH_orange_phone_casepng.png"
            alt="FoundHer phone case"
            style={{ width: "100%", maxWidth: 240, height: "auto", objectFit: "contain", display: "block" }}
          />
        </div>
      </div>

      <ColorBar />

      {/* ─── Section 13: Team Portraits ─── */}
      <section style={{ background: "#F4F1EA", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 64, flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ flex: "0 0 360px", maxWidth: "100%" }}>
            <img
              src="/images/FH_bandana-lifestyle.png"
              alt="Chase T."
              style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3B2A22", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginTop: 20 }}>
              Chase T., Creative Director
            </p>
          </div>
          <div style={{ flex: "0 0 360px", maxWidth: "100%" }}>
            <img
              src="/images/FH_kendall-aviva.jpg"
              alt="Kendall Aviva"
              style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3B2A22", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginTop: 20 }}>
              Kendall Aviva, Podcast Host & Media Director
            </p>
          </div>
        </div>
      </section>

      <ColorBar />

      {/* ─── Rich Life ─── */}
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
