import { useState, useEffect } from "react";

const C = {
  white: "#FFFFFF",
  black: "#1B3A6B",
  coral: "#C16044",
  navy: "#1B3A6B",
  cream: "#F4F1EA",
  gold: "#B8973E",
  ink: "#1C1A17",
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
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/members" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>The Shop</a>
            <a href="/about" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>About</a>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
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
          <a href="/members" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>The Shop</a>
          <a href="/about" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>About</a>
          <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
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
          <span style={{ color: C.coral }}>Her</span>
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

export default function AboutPage() {
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

      {/* ─── Section 1: Mills — From the Founder ─── */}
      <section style={{ background: C.cream, padding: "120px 24px 96px", textAlign: "center" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <p style={{ fontFamily: font.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 32 }}>
            From the Founder
          </p>

          <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: C.navy, lineHeight: 1.25, marginBottom: 48 }}>
            We didn't build FoundHer AI to sell you something. We built it so we could finally own who we are.
          </h1>

          <img
            src="/images/FH_Founder.png"
            alt="Mills Gardner, Founder of FoundHer AI"
            style={{ width: "100%", maxWidth: 740, display: "block", margin: "0 auto 48px", objectFit: "cover" }}
          />

          <div style={{ textAlign: "left", maxWidth: 740, margin: "0 auto" }}>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              For fifty years, I was a founder without the word for it.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              At every dinner party, every school pickup, every social gathering — the question: "So, what do you do?" And the explanation that followed. The justification. The pitch nobody asked for.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              Because "founder" wasn't in the vernacular. "Entrepreneur" was barely spoken. There was no title for the woman who got up every day, with no guarantee of success, no safety net, no one telling her she was doing the right thing — and built anyway.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              That woman existed. She always existed. We just didn't have a name for her.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              We do now.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              And because of AI, she doesn't need what she used to need. No VC gatekeepers. No engineering team. No office. No agency. With a laptop and an idea, an entire business can be built in days. New founders are emerging in nearly every family. New millionaires are being created every week. The playing field didn't just level — it opened.
            </p>
            <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.85, marginBottom: 24 }}>
              FoundHer AI™ exists to celebrate who we are and what we've always been capable of. The FoundHer Executive Suite was designed to make it easy for you. Which is why Shelby decided to build it.
            </p>

            <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: 17, color: C.navy, lineHeight: 1.85, marginTop: 48, marginBottom: 8 }}>
              — Mills Gardner, Founder, FoundHer AI, PBC
            </p>

            <div style={{ marginTop: 32 }}>
              <img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 48 }} />
            </div>
          </div>
        </div>
      </section>

      <ColorBar />

      {/* ─── Section 2: Shelby ─── */}
      <section style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: isMobile ? "auto" : 700 }}>
        {/* Left: Photo */}
        <div style={{ width: isMobile ? "100%" : "45%", minHeight: isMobile ? "60vh" : "auto" }}>
          <img
            src="/images/FH_Shelby-about.png"
            alt="Shelby Whisenhunt, Founder of FoundHer Executive Suite"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>

        {/* Right: Bio */}
        <div style={{
          width: isMobile ? "100%" : "55%",
          background: "#1B2A4A",
          padding: isMobile ? "48px 24px" : "80px 64px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <p style={{ fontFamily: font.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>
            FoundHer Executive Suite
          </p>

          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: C.cream, lineHeight: 1.15, marginBottom: 8 }}>
            Shelby Whisenhunt
          </h2>

          <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 16, color: C.gold, marginBottom: 32 }}>
            Founder, FoundHer Executive Suite
          </p>

          <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 20 }}>
            Shelby knows what it takes to build a real business. She's done it — the office lease, the staff, the clients, the bankers, the marketing managers, the website. A 7-figure operation built from the ground up.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 20 }}>
            After COVID left most of her clients' businesses struggling, Shelby saw it as the perfect time to pivot. She and her husband turned their focus to family — and soon after, baby Koa arrived. Now, with Koa in hand, mom's business brain was on fire again.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 20 }}>
            Eyes wide open to what was changing in the world, Shelby saw something others missed — thousands of solopreneurs finally had the chance to build real businesses. But the path was overwhelming. Legal structure. Formation documents. AI tools. Operations. And 53,000+ platforms to choose from, with hundreds more added every day.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 20 }}>
            So she built the answer. The FoundHer Executive Suite is the operating system for the solo founder — every tool, every template, every agent, already vetted, already organized, already matched to how you're built to build. And beyond the AI tools, Shelby curates the products she's found essential to a solopreneur's success and peace of mind under stress.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(244,241,234,0.85)", lineHeight: 1.85, marginBottom: 32 }}>
            Trust Shelby. Her team has done the heavy lifting for you.
          </p>

          <div>
            <a
              href="https://bizopssuite.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: "transparent", border: "1px solid #B8973E", color: "#B8973E", fontFamily: font.body, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", padding: "14px 36px", textDecoration: "none" }}
            >
              Explore the Suite →
            </a>
          </div>
        </div>
      </section>

      <ColorBar />
      <Footer />
    </div>
  );
}
