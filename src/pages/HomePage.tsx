import React, { useState, useEffect } from "react";

const C = {
  white: "#FFFFFF",
  offwhite: "#F7F7F7",
  black: "#1B3A6B",
  coral: "#C16044",
  navy: "#1B3A6B",
  gray: "#1B3A6B",
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

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
        <span style={{ position: "relative", display: "inline-flex", alignItems: "center", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer AI" style={{ height: 40 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>

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
            <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <button
              onClick={() => scrollTo("collection")}
              style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font.body }}
            >
              Explore
            </button>
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
          <a href="mailto:hello@foundherai.ai" style={{ color: C.black, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <button
            onClick={() => scrollTo("collection")}
            style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textAlign: "center", marginTop: 8 }}
          >
            Explore
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section style={{ fontFamily: font.body }}>
        <img src="/images/FH_hero-image-final.png" alt="FoundHer AI" style={{ width: "100%", height: "90vh", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        <div style={{ background: C.white, padding: "40px 24px 64px" }}>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.black, display: "block" }}>Women have always built businesses.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.black, display: "block", marginBottom: 24 }}>Now they build empires.</span>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.gray, lineHeight: 1.75, marginBottom: 16 }}>
            This is their platform. Their credential. Their edge.
          </p>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
            Wear it. Flaunt it. Build with it.
          </p>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 16 }}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer Mark" style={{ width: 60 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>
        </div>
      </section>
    );
  }

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "90vh", fontFamily: font.body }}>
      <img
        src="/images/FH_hero-image-final.png"
        alt="FoundHer AI"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%", display: "block", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "90vh", padding: "0 0 300px 7%" }}>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#FFFFFF", display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)", WebkitTextStroke: "1px #3F2A3F" }}>Women have always built businesses.</span>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#FFFFFF", display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)", WebkitTextStroke: "1px #3F2A3F" }}>Now they build empires.</span>
      </div>
      <div style={{ position: "absolute", right: "7%", top: "50%", transform: "translateY(-50%)", maxWidth: 260, background: "rgba(255,255,255,0.92)", padding: "48px 40px", zIndex: 2 }}>
        <p style={{ fontFamily: font.body, fontSize: 17, color: C.gray, lineHeight: 1.75, marginBottom: 16 }}>
          This is their platform. Their credential. Their edge.
        </p>
        <p style={{ fontFamily: font.body, fontSize: 17, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
          Wear it. Flaunt it. Build with it.
        </p>
        <span style={{ position: "relative", display: "inline-flex", alignItems: "center", marginTop: 16 }}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer Mark" style={{ width: 60 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>
      </div>
    </section>
  );
}


// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────

function Philosophy() {
  return (
    <section style={{ background: C.white, padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 60, height: 3, background: C.navy, margin: "0 auto 40px" }} />
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, lineHeight: 1.2, textAlign: "center", margin: "0 0 40px" }}>
          It takes guts to be a founder.
        </h2>
        {[
          "Moving from a job and flying without wings.",
          "Starting with no guarantee.",
          "Walking through the fear to take the first step.",
          "Spending money that may never come back.",
          "Failing quietly and iterating.",
          "Keeping the faith and doing it knowing it could fail.",
        ].map((line) => (
          <p key={line} style={{ fontFamily: font.body, fontSize: 18, color: C.navy, lineHeight: 1.6, margin: "0 auto", padding: "10px 0", maxWidth: 540 }}>
            {line}
          </p>
        ))}
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.gray, lineHeight: 1.6, margin: "40px auto 0", textAlign: "center" }}>
          These are the founders among us. These are the FoundHers.
        </p>
      </div>
    </section>
  );
}

function Collage() {
  return (
    <img src="/images/FH_founders-collage.jpg" alt="FoundHer founders collage" style={{ width: "100%", display: "block", objectFit: "cover" }} />
  );
}

function RichLife() {
  return (
    <section style={{ background: C.white, padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 60, height: 3, background: C.navy, margin: "0 auto 40px" }} />
        <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: 18, color: C.navy, marginBottom: 12 }}>
          Remember, the goal isn't the business.
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, lineHeight: 1.2, textAlign: "center", margin: 0 }}>
          The goal is living a rich life.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.gray, lineHeight: 1.6, margin: "24px auto 0", textAlign: "center" }}>
          Build the business that gets you there. Live the lifestyle on your way up.
        </p>
      </div>
    </section>
  );
}

// ─── LIFESTYLE BREAK ────────────────────────────────────────────────────────

function LifestyleBreak() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const imgStyle = (pos: string): React.CSSProperties => ({
    width: isMobile ? "100%" : "33.333%",
    height: isMobile ? "50vh" : "80vh",
    objectFit: "cover",
    objectPosition: pos,
    display: "block",
  });

  return (
    <section style={{ margin: 0, padding: 0, display: "flex", flexDirection: isMobile ? "column" : "row", overflow: "hidden", lineHeight: 0 }}>
      <img src="/images/FH_beach-shower.png" alt="Beach shower lifestyle" style={imgStyle("center center")} />
      <img src="/images/FH_official-cuff.png" alt="FoundHer cuff" style={imgStyle("center center")} />
      <img src="/images/FH_Beach-towel-scene.png" alt="Beach towel with FoundHer mark" style={imgStyle("center center")} />
    </section>
  );
}

// ─── SHE COULD BE ANYONE ────────────────────────────────────────────────────

function SheCouldBeAnyone() {
  return (
    <section style={{ background: "#F4F1EA", padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, letterSpacing: "-0.02em", marginBottom: 32 }}>
          Everywhere you look there's a FoundHer. You just don't know it.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.navy, lineHeight: 1.8, fontWeight: 300 }}>
          She's building a Shopify store. She's filming content. She's building a media company. She's running a construction site. She's building roadways and bridges. She's automating her way to financial freedom. She's building a software company. She's creating a product line. She's doing it with AI and a laptop.
        </p>
      </div>
    </section>
  );
}

// ─── WE SEE YOU ─────────────────────────────────────────────────────────────

function WeSeeYou() {
  return (
    <section style={{ fontFamily: font.body }}>
      {/* Until now */}
      <div style={{ background: "#F4F1EA", padding: "56px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, margin: 0 }}>
          Until now.
        </h2>
      </div>

      {/* WE SEE YOU text */}
      <div style={{ background: "#F4F1EA", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.navy, marginBottom: 16 }}>
          WE SEE YOU
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, letterSpacing: "-0.02em", margin: "0 0 40px" }}>
          Every one of them is a FoundHer.
        </h2>

        <div style={{ maxWidth: 520, margin: "0 auto 48px", textAlign: "left" }}>
          {[
            "She builds from vision, not permission.",
            "She uses AI as her team, her budget, and her advantage.",
            "She lives the life on her way up.",
            "She doesn't wait for permission to begin.",
          ].map((line) => (
            <p key={line} style={{ fontFamily: font.display, fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 22px)", color: C.navy, lineHeight: 1.5, margin: 0, padding: "12px 0", borderBottom: `1px solid ${C.navy}` }}>{line}</p>
          ))}
        </div>

        <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px,3.5vw,42px)", color: C.navy, margin: "0 0 12px" }}>
          She is a FoundHer.
        </h3>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontWeight: 400, fontSize: 16, color: C.coral, margin: 0 }}>
          Yes, the H is silent. No, she is not.
        </p>
      </div>
    </section>
  );
}

// ─── AI BIZ OPS ────────────────────────────────────────────────────────────

function AIBizOps() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "#1B2A4A", padding: "80px 7%", textAlign: "center", fontFamily: font.body }}>
      <p style={{ fontFamily: font.body, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8973E", marginBottom: 24 }}>
        AI BIZ OPS
      </p>
      <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: isMobile ? 36 : 52, lineHeight: 1.1, color: "#F4F1EA", marginBottom: 24, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        You don't need investors. You don't need a team. You don't need permission. You have AI.
      </h2>
      <p style={{ fontFamily: font.body, fontSize: 20, fontStyle: "italic", color: "#B8973E", marginBottom: 16 }}>
        The human layer that makes the agents work for real businesses.
      </p>
    </section>
  );
}

// ─── BUILD LAUNCH SCALE ────────────────────────────────────────────────────

function BuildLaunchScale() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "#1B2A4A", padding: "80px 7%", fontFamily: font.body }}>
      <p style={{ fontFamily: font.body, fontSize: 20, color: "#F4F1EA", fontStyle: "italic", textAlign: "center", marginTop: 0, marginBottom: 48, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
        You're the CEO, the accountant, the marketer, the admin, and the janitor. Until now.
      </p>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, maxWidth: 1100, margin: "0 auto" }}>
        {["Build.", "Launch.", "Scale."].map((heading) => (
          <div key={heading} style={{ flex: 1 }}>
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 32, color: "#F4F1EA", marginBottom: 0, marginTop: 0 }}>{heading}</h3>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <button style={{ background: "transparent", border: "1px solid #B8973E", color: "#B8973E", padding: "14px 36px", fontSize: 14, letterSpacing: "0.1em", cursor: "pointer", fontFamily: font.body, borderRadius: 0 }}>
          See Everything Inside →
        </button>
      </div>
    </section>
  );
}

// ─── PRICING TIERS ─────────────────────────────────────────────────────────

function PricingTiers() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tiers = [
    {
      name: "The FoundHer",
      price: "$27",
      descriptor: "The tools. The roadmap. You drive.",
      features: [
        "AI Biz Ops platform access",
        "Curated AI tool stack for founders",
        "Incorporation + EIN filing guides",
        "Legal document library",
        "Wholesale account setup guides",
        "Member pricing on The Cuff",
      ],
      cta: "Join The FoundHer",
      bg: "#FFFFFF",
      border: "1px solid #E8E3D8",
      textColor: "#1B2A4A",
      priceColor: "#1B2A4A",
      perMonthColor: "#7A7569",
      descriptorColor: "#7A7569",
      dividerColor: "#E8E3D8",
      btnBg: "#1B2A4A",
      btnColor: "#F4F1EA",
      featured: false,
    },
    {
      name: "The Builder",
      price: "$97",
      descriptor: "AI agents running your business. Your team runs on AI.",
      features: [
        "Everything in The FoundHer",
        "AI agents replace employees",
        "Inbox Intelligence agent",
        "Inbox Cleanup agent",
        "Content creation agents",
        "Financial tracking agents",
        "New agents added monthly",
      ],
      cta: "Join The Builder",
      bg: "#1B2A4A",
      border: "none",
      textColor: "#F4F1EA",
      priceColor: "#F4F1EA",
      perMonthColor: "#B8973E",
      descriptorColor: "#B8973E",
      dividerColor: "rgba(244,241,234,0.2)",
      btnBg: "#B8973E",
      btnColor: "#F4F1EA",
      featured: true,
    },
    {
      name: "The Concierge",
      price: "$497",
      descriptor: "Not sure where to start? We build it with you.",
      features: [
        "Everything in The Builder",
        "Done-with-you onboarding",
        "1:1 strategy sessions",
        "Custom agent configuration",
        "Priority access to new tools",
        "Quarterly business review",
      ],
      cta: "Join The Concierge",
      bg: "#FFFFFF",
      border: "1px solid #E8E3D8",
      textColor: "#1B2A4A",
      priceColor: "#1B2A4A",
      perMonthColor: "#7A7569",
      descriptorColor: "#7A7569",
      dividerColor: "#E8E3D8",
      btnBg: "#1B2A4A",
      btnColor: "#F4F1EA",
      featured: false,
    },
  ];

  return (
    <section style={{ background: "#F4F1EA", padding: "80px 7%", fontFamily: font.body }}>
      <p style={{ fontFamily: font.body, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8973E", textAlign: "center", marginBottom: 16 }}>
        MEMBERSHIP
      </p>
      <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 42, color: "#1B2A4A", textAlign: "center", marginBottom: 8 }}>
        Choose your level.
      </h2>
      <p style={{ fontFamily: font.body, fontSize: 16, color: "#1B2A4A", textAlign: "center", marginBottom: 48, opacity: 0.7 }}>
        Every tier includes full access to the AI Biz Ops platform.
      </p>

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
        {tiers.map((t) => (
          <div key={t.name} style={{ flex: 1, background: t.bg, border: t.border, borderRadius: 4, padding: "40px 32px", display: "flex", flexDirection: "column" }}>
            {t.featured && (
              <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8973E", textAlign: "center", marginBottom: 12, marginTop: 0 }}>
                MOST POPULAR
              </p>
            )}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 48, color: t.priceColor }}>{t.price}</span>
              <span style={{ fontSize: 18, color: t.perMonthColor }}>/mo</span>
            </div>
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: t.textColor, marginBottom: 8, marginTop: 0 }}>{t.name}</h3>
            <p style={{ fontFamily: font.body, fontSize: 14, color: t.descriptorColor, marginBottom: 24, marginTop: 0 }}>{t.descriptor}</p>
            <div style={{ height: 1, background: t.dividerColor, marginBottom: 24 }} />
            <div style={{ flex: 1 }}>
              {t.features.map((f) => (
                <p key={f} style={{ fontFamily: font.body, fontSize: 14, color: t.textColor, lineHeight: 1.8, margin: 0 }}>{f}</p>
              ))}
            </div>
            <button style={{ background: t.btnBg, color: t.btnColor, padding: "14px 28px", fontSize: 14, letterSpacing: "0.1em", border: "none", cursor: "pointer", width: "100%", marginTop: 32, borderRadius: 4, fontFamily: font.body, fontWeight: 600 }}>
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── RUNNER BREAK ───────────────────────────────────────────────────────────

function RunnerBreak() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <img
        src="/images/FH_runner.png"
        alt="FoundHer runner"
        style={{ width: "100vw", height: isMobile ? "70vh" : "90vh", objectFit: "cover", objectPosition: "center top", display: "block", margin: 0, padding: 0 }}
      />
      <div style={{ background: "#F4F1EA", padding: "80px 24px", textAlign: "center" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 3vw, 32px)", color: "#C16044", display: "block", marginBottom: 16 }}>
          Own your place.
        </span>
        <span style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#1B3A6B", display: "block" }}>
          Wear the brand of FoundHers.
        </span>
      </div>
    </>
  );
}

// ─── THE CUFF ───────────────────────────────────────────────────────────────

function TheCuff() {
  return (
    <section style={{ fontFamily: font.body }}>
      {/* Full-width lifestyle image */}
      <img src="/images/FH_cuff-lifestyle-networking.png" alt="FoundHer wearing The Cuff at a business gathering" style={{ width: "100%", display: "block", objectFit: "cover" }} />

      {/* Copy block on cream */}
      <div style={{ background: "#F4F1EA", padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: font.display, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(18px, 2vw, 22px)", color: C.coral, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.6, marginBottom: 48 }}>
            Not every woman is a FoundHer. But every FoundHer wears The Mark.
          </p>

          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: "clamp(32px, 4.5vw, 52px)", color: C.navy, lineHeight: 1.2, marginBottom: 40 }}>
            A doctor wears a white coat.<br />A FoundHer wears The Cuff.
          </h2>

          <p style={{ fontFamily: font.body, fontSize: 17, color: C.navy, lineHeight: 1.8, fontWeight: 300, marginBottom: 0 }}>
            A FoundHer isn't someone who hangs a shingle. A dentist, chiropractor, attorney, financial advisor, or physician has a license to lean on. A FoundHer builds from nothing — no credential, no safety net. Just vision, will, and the courage to begin anyway.
          </p>
        </div>
      </div>

      {/* Two-box image — 50% width, centered */}
      <div style={{ textAlign: "center", background: "#F4F1EA", paddingBottom: 0 }}>
        <img src="/images/FH_boxed-cuffs-official.png" alt="The FoundHer Cuff — Terracotta and Navy" style={{ width: "50%", display: "inline-block", objectFit: "cover" }} />
      </div>

      {/* Price block on cream */}
      <div style={{ background: "#F4F1EA", padding: "48px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontSize: 15, color: C.navy, lineHeight: 1.8, fontWeight: 400, marginBottom: 8 }}>
          Two colorways. One credential.
        </p>
        <p style={{ fontFamily: font.body, fontSize: 15, color: C.navy, lineHeight: 1.8, fontWeight: 400, marginBottom: 40 }}>
          Terracotta. Navy. Both gold-plated hardware.
        </p>
        <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: C.coral, marginBottom: 8 }}>
          The Cuff.
        </h3>
        <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: C.navy, marginBottom: 16 }}>
          $297
        </p>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 16, color: C.navy, fontWeight: 400 }}>
          Pre-order yours. Ships Q4 2026.
        </p>
      </div>
    </section>
  );
}

// ─── DESIGNED FOR LIFE ──────────────────────────────────────────────────────

// @ts-ignore — temporarily hidden from render
function DesignedForLife() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const groups = [
    {
      eyebrow: "ACCESSORIES & JEWELRY",
      headline: "The Stack.",
      body: "Three pieces. One identity. Worn by women who build.",
      image: "/images/FH_arm_stack.png",
      imagePosition: "center top",
      reverse: false,
    },
    {
      eyebrow: "EVERYDAY CARRY",
      headline: "The Sleeve. The Case.",
      body: "For the MacBook she builds on. For the phone she runs on.",
      image: "/images/FH_hero-image-final.png",
      imagePosition: "center top",
      reverse: true,
    },
    {
      eyebrow: "THE FOUNDHERS LIFE",
      headline: "Live it out loud.",
      body: "The towel. The Tesla. The life that comes after the build.",
      image: "/images/FH_beach-towel.png",
      imagePosition: "center center",
      reverse: false,
    },
  ];

  return (
    <section id="collection" style={{ fontFamily: font.body }}>
      <div style={{ padding: "96px 24px 64px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1B3A6B", marginBottom: 16 }}>
          THE COLLECTION
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)", color: "#1B3A6B", marginBottom: 16 }}>
          Designed for Life.
        </h2>
        <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: 18, color: "#1B3A6B", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
          Every object we create belongs to a life built with intention.
        </p>
      </div>

      {groups.map((g) => (
        <div
          key={g.headline}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : g.reverse ? "row-reverse" : "row",
            minHeight: isMobile ? "auto" : 400,
          }}
        >
          <div style={{ width: isMobile ? "100%" : "55%", height: isMobile ? "50vh" : "auto" }}>
            <img
              src={g.image}
              alt={g.headline}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: g.imagePosition, display: "block" }}
            />
          </div>
          <div
            style={{
              width: isMobile ? "100%" : "45%",
              background: "#F4F1EA",
              padding: isMobile ? "48px 24px" : "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1B3A6B", margin: 0 }}>
              {g.eyebrow}
            </p>
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 4vw, 56px)", color: "#1B3A6B", marginTop: 16, marginBottom: 0 }}>
              {g.headline}
            </h3>
            <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: 18, color: "#1B3A6B", lineHeight: 1.8, marginTop: 24 }}>
              {g.body}
            </p>
            <p style={{ fontFamily: font.body, fontWeight: 400, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C16044", marginTop: 40 }}>
              Coming Soon.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── FOUNDER ─────────────────────────────────────────────────────────────────

function Founder() {
  return (
    <section style={{ background: C.offwhite, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <p style={{ color: C.navy, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>FROM THE FOUNDER</p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.navy, lineHeight: 1.2, marginBottom: 32, letterSpacing: "-0.02em" }}>
          I didn't build FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup> to sell you something. I built it so we could finally own who we are.
        </h2>

        <div style={{ width: "85%", margin: "0 auto 40px" }}>
          <img
            src="/images/FH_Founder.png"
            alt="Mills Gardner, Founder"
            style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center center", display: "block" }}
          />
        </div>

        <div>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>For fifty years, I was a founder without the word for it.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>At every dinner party, every school pickup, every social gathering — the question: "So, what do you do?" And the explanation that followed. The justification. The pitch nobody asked for. Because "founder" wasn't in the vernacular. "Entrepreneur" was barely spoken. There was no title for the woman who got up every day, with no guarantee of success, no safety net, no one telling her she was doing the right thing — and built anyway.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>That woman existed. She always existed. We just didn't have a name for her.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>We do now.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>And because of AI, she doesn't need what she used to need. No VC gatekeepers. No engineering team. No office. No agency. With a laptop and an idea, an entire business can be built in days. New founders are emerging in nearly every family. New millionaires are being created every week. The playing field didn't just level — it opened.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup> exists to celebrate who we are and what we've always been capable of. The brand. The credential. The lifestyle we've earned.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>The lifestyle is the proof.</p>
          <p style={{ fontSize: 13, color: C.navy, fontWeight: 600, letterSpacing: "0.05em" }}>— Mills Gardner, Founder</p>
          <p style={{ fontSize: 13, color: C.navy, fontWeight: 600, letterSpacing: "0.05em", marginTop: 4 }}>FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup>, PBC</p>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", marginTop: 16 }}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer Mark" style={{ width: 60 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>
        </div>

      </div>
    </section>
  );
}

// ─── HORSE SECTION ──────────────────────────────────────────────────────────

function HorseSection() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <img
        src="/images/FH_Official_horse_portrait.png"
        alt="Woman kissing horse wearing FoundHer helmet cover"
        style={{ width: "100%", height: isMobile ? "65vh" : "85vh", objectFit: "cover", objectPosition: "center center", display: "block", margin: 0, padding: 0 }}
      />
      <hr style={{ border: "none", borderTop: "1px solid #1B3A6B", margin: 0 }} />
      <div style={{ background: "#F4F1EA", padding: "80px 24px", textAlign: "center" }}>
        <span style={{ fontFamily: font.body, fontWeight: 300, fontSize: "clamp(16px, 2vw, 22px)", color: "#1B3A6B", display: "block", marginBottom: 24 }}>
          Whatever your passions, wherever you go, and everywhere in between, let people know:
        </span>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 64px)", color: "#C16044", display: "block" }}>
          You Mean Business.
        </span>
      </div>
    </>
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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ fontFamily: font.body, background: C.white }}>
      <Nav />
      <main>
        <ColorBar />
        <Hero />
        <ColorBar />
        <Philosophy />
        <ColorBar />
        <Collage />
        <ColorBar />
        <SheCouldBeAnyone />
        <ColorBar />
        <LifestyleBreak />
        <ColorBar />
        <WeSeeYou />
        <ColorBar />
        <AIBizOps />
        <ColorBar />
        <BuildLaunchScale />
        <ColorBar />
        <PricingTiers />
        <ColorBar />
        <RunnerBreak />
        <ColorBar />
        <TheCuff />
        <ColorBar />
        <Founder />
        <ColorBar />
        <HorseSection />
        <ColorBar />
        <RichLife />
      </main>
      <ColorBar />
      <Footer />
    </div>
  );
}
