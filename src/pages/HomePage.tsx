import { useState, useEffect } from "react";

const C = {
  white: "#FFFFFF",
  offwhite: "#F7F7F7",
  black: "#0D0D0D",
  coral: "#C16044",
  gray: "#6B6B6B",
  lightgray: "#F0F0F0",
};

const font = {
  display: "'Fraunces', serif",
  body: "'Plus Jakarta Sans', sans-serif",
};

const Divider = () => <div style={{ height: 4, background: C.coral, width: "100%" }} />;

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
        <img src="/images/FH_mark_official.png" alt="FoundHer AI" style={{ height: 40, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

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
        <img src="/images/FH_hero-image-final.png" alt="FoundHer AI" style={{ width: "100%", height: "65vh", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        <div style={{ background: C.white, padding: "40px 24px 64px" }}>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.black, display: "block" }}>Live</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.coral, display: "block", marginBottom: 24 }}>Proudly.</span>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
            This is the brand for women founders — the women brave enough to build...through the fears, through the pivots, to the triumphs.
          </p>
          <img src="/images/FH_mark_official.png" alt="FoundHer Mark" style={{ width: 60, display: "block", margin: "16px auto 0" }} />
        </div>
      </section>
    );
  }

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", fontFamily: font.body }}>
      <img
        src="/images/FH_hero-image-final.png"
        alt="FoundHer AI"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "100vh", padding: "200px 0 0 7%" }}>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 80, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#FFFFFF", display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>Live</span>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 80, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.coral, display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>Proudly.</span>
      </div>
      <div style={{ position: "absolute", right: "7%", top: "50%", transform: "translateY(-50%)", maxWidth: 420, background: "rgba(255,255,255,0.92)", padding: "48px 40px", zIndex: 2 }}>
        <p style={{ fontFamily: font.body, fontSize: 17, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
          This is the brand for women founders — the women brave enough to build...through the fears, through the pivots, to the triumphs.
        </p>
        <img src="/images/FH_mark_official.png" alt="FoundHer Mark" style={{ width: 60, display: "block", margin: "16px auto 0" }} />
      </div>
    </section>
  );
}

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────

function Philosophy() {
  return (
    <section style={{ background: C.white, padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 60, height: 3, background: C.coral, margin: "0 auto 40px" }} />
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.coral, lineHeight: 1.2, textAlign: "center", margin: 0 }}>
          The goal was never the business.<br />The goal was the life.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.gray, lineHeight: 1.6, margin: "24px auto 0", textAlign: "center" }}>
          AI is the leverage. Freedom is the destination.
        </p>
      </div>
    </section>
  );
}

// ─── WE SEE YOU ─────────────────────────────────────────────────────────────

function WeSeeYou() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const lines = [
    "She's selling on Amazon.",
    "She's building an Etsy shop.",
    "She has a Substack.",
    "She has a YouTube channel.",
    "She's an OnlyFans creator.",
    "She's building a Shopify store.",
    "She's selling digital products.",
    "She's a real estate agent building a personal brand.",
    "She's creating AI automations for clients.",
    "She has a blog that makes $500 a month.",
    "She has an Instagram with 4,000 followers.",
    "She has 2 million followers.",
    "She's just getting started.",
    "She's scaling.",
    "She's doing it her way.",
  ];

  return (
    <section style={{ background: C.offwhite, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, textAlign: "center", marginBottom: 16 }}>
          WE SEE YOU
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.coral, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
          Every FoundHer is building something.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "8px 48px", marginBottom: 48 }}>
          {lines.map((line) => (
            <p key={line} style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 17, color: C.gray, lineHeight: 2, margin: 0 }}>{line}</p>
          ))}
        </div>
        <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(24px,3vw,36px)", color: C.black, textAlign: "center" }}>
          She is a Found<span style={{ color: C.coral }}>Her</span>.
        </p>
      </div>
    </section>
  );
}

// ─── COLLECTION ──────────────────────────────────────────────────────────────

function Collection() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const categories = [
    { title: "Accessories & Jewelry", body: "Pieces designed for women who build — from the desk to the world. Limited releases. Intentional design." },
    { title: "AI Agents & Tools", body: "Elegant automation built for the way you actually work. More time. More freedom. More life." },
    { title: "Everyday Carry", body: "Phone cases. MacBook accessories. Objects she uses every day while building." },
  ];

  return (
    <section id="collection" style={{ background: C.offwhite, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, textAlign: "center", marginBottom: 16 }}>
          THE COLLECTION
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.coral, textAlign: "center", marginBottom: 16 }}>
          Designed to Live.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 17, color: C.gray, textAlign: "center", maxWidth: 540, margin: "0 auto 56px", lineHeight: 1.7 }}>
          Every object we create belongs to a life built with intention.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 48 }}>
          {categories.map((c) => (
            <div key={c.title} style={{ borderTop: `2px solid ${C.coral}`, paddingTop: 24 }}>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: C.black, marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontFamily: font.body, fontSize: 15, color: C.gray, lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 16, color: C.gray, textAlign: "center", marginTop: 56 }}>
          First collection arriving soon.
        </p>
      </div>
    </section>
  );
}

// ─── FIRST COLLECTION ────────────────────────────────────────────────────────

function FirstCollection() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const objects = [
    { number: "01", title: "The FoundHer Bracelet", body: "A quiet reminder that she chose to bet on herself.", image: "/images/bracelet-editorial.jpg" },
    { number: "02", title: "The FoundHer MacBook Sleeve", body: "The instrument she uses to build her future.", image: "/images/macbook-sleeve-editorial.jpg" },
    { number: "03", title: "The FoundHer Phone Case", body: "Because her business is always with her.", image: "/images/phone-case-editorial.jpg" },
    { number: "04", title: "The FoundHer Beach Towel", body: "She built the business so she could be here.", image: "/images/beach-towel-editorial.jpg" },
    { number: "05", title: "The FoundHer Helmet Cover", body: "For founders whose freedom is found outside the office. Elegant beige equestrian helmet cover with the FoundHer Mark.", image: "/images/helmet-cover-editorial.jpg" },
    { number: "06", title: "The FoundHer Vehicle Mark", body: "A premium matte decal featuring only the FoundHer Mark. Not a bumper sticker. A quiet declaration that she is building something of her own.", image: "/images/vehicle-mark-editorial.jpg" },
  ];

  return (
    <section style={{ background: C.white, padding: "96px 0", fontFamily: font.body }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, textAlign: "center", marginBottom: 16 }}>
          THE FOUNDHER OBJECTS
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px,3.5vw,42px)", color: C.coral, textAlign: "center", marginBottom: 64, letterSpacing: "-0.02em" }}>
          Designed to Live.
        </h2>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        {objects.map((obj, i) => (
          <div key={obj.title} style={{ display: "flex", flexDirection: isMobile ? "column" : (i % 2 === 0 ? "row" : "row-reverse"), alignItems: "center", justifyContent: "center", gap: isMobile ? 0 : 80, marginBottom: i < objects.length - 1 ? 80 : 0 }}>
            <div style={{ flexShrink: 0, width: isMobile ? "60%" : 220, margin: isMobile ? "0 auto" : undefined }}>
              <img src={obj.image} alt={obj.title} style={{ width: "100%", height: "auto", aspectRatio: "1", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: 1, padding: isMobile ? "32px 0 0" : 0, textAlign: isMobile ? "center" : (i % 2 === 0 ? "left" : "right") }}>
              <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.coral, marginBottom: 8 }}>{obj.number}</p>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.black, marginBottom: 10 }}>{obj.title}</h3>
              <p style={{ fontFamily: font.body, fontSize: 15, color: C.gray, lineHeight: 1.7, marginBottom: 12, maxWidth: 340, margin: isMobile ? "0 auto 12px" : undefined, marginLeft: i % 2 !== 0 && !isMobile ? "auto" : undefined }}>{obj.body}</p>
              <p style={{ fontFamily: font.body, fontSize: 11, color: C.coral, letterSpacing: "0.1em", textTransform: "uppercase" }}>Coming Soon</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── AI ──────────────────────────────────────────────────────────────────────

function AISection() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tools = [
    { title: "Launch", body: "From idea to live product. Research, strategy, copy — handled." },
    { title: "Create", body: "Content, campaigns, social — a creative engine that sounds like you." },
    { title: "Operate", body: "Workflows, decisions, operations — your business runs while you live." },
  ];

  return (
    <section style={{ background: C.black, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: C.coral, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            INTELLIGENT TOOLS
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Technology that gives you your time back.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            The best AI doesn't add to your workload. It quietly removes it — so you can spend your hours on the life you're actually building.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 2 }}>
          {tools.map((t) => (
            <div key={t.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "40px 32px" }}>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: "#FFFFFF", marginBottom: 12 }}>{t.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{t.body}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 48, fontFamily: font.display, fontStyle: "italic", fontSize: 17, color: "rgba(255,255,255,0.4)" }}>
          Available exclusively through FoundHer.
        </p>
      </div>
    </section>
  );
}

// ─── FOUNDER ─────────────────────────────────────────────────────────────────

function Founder() {
  return (
    <section style={{ background: C.offwhite, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <p style={{ color: C.coral, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>FROM THE FOUNDER</p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.coral, lineHeight: 1.2, marginBottom: 32, letterSpacing: "-0.02em" }}>
          I didn't build FoundHer AI to sell you something. I built it to give you something back.
        </h2>

        <div style={{ width: "85%", margin: "0 auto 40px" }}>
          <img
            src="/images/FH_Founder.png"
            alt="Mills Gardner, Founder"
            style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center center", display: "block" }}
          />
        </div>

        <div>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>For 30 years I built companies — real ones, hard ones, ones that required me to fight for every inch. A handful of wins. A bucketful of fails. Each time, I got up and got back at it. That's the founder's story.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>But at 58, after a pitch, the venture capitalists in that room told me I was too old to be a founder. I believed them. I stopped. And sadly, I retired.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Then AI arrived. And I started again. At 71.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Not because I needed to. Because I was born to build — and if you're reading this, you probably were too. That's what lives in a founder's blood. AI is the partner that finally lets us build real businesses without VC, without office leases, without an engineering team.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>FoundHer AI exists for every woman who has ever built something from nothing — and never had a name for what she was doing.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Now she does. You're a founder. Now you can proudly name and own who you are.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>We have arrived. And now the world is finally going to see what we women can do.</p>
          <p style={{ fontSize: 13, color: C.coral, fontWeight: 600, letterSpacing: "0.05em" }}>— Mills Gardner, Founder</p>
          <p style={{ fontSize: 13, color: C.coral, fontWeight: 600, letterSpacing: "0.05em", marginTop: 4 }}>FoundHer AI, PBC</p>
          <img src="/images/FH_mark_official.png" alt="FoundHer Mark" style={{ width: 60, display: "block", marginTop: 16 }} />
        </div>

      </div>
    </section>
  );
}

// ─── LIFESTYLE ───────────────────────────────────────────────────────────────

function Lifestyle() {
  return (
    <section style={{ background: C.white, padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 56, flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
          <img
            src="/images/lifestyle-horse-helmet-foundher.jpg"
            alt="Woman in a beige riding helmet cover with the FoundHer mark kissing the nose of a fawn thoroughbred horse"
            style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ color: C.coral, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: font.body }}>
            THE LIFESTYLE
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.coral, lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Designed for women who build beautiful lives.
          </h2>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.gray, lineHeight: 1.75, marginBottom: 24 }}>
            Every piece we create reflects the woman who wears it — confident, intentional, and building something real. From the coffee shop to the coastline, from the stable to the studio.
          </p>
          <button
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "14px 28px", fontFamily: font.body, fontWeight: 600, fontSize: 15, cursor: "pointer" }}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
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
          <a href="https://foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>FoundHer AI</a>
          <a href="mailto:hello@foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 FoundHer AI, PBC · foundherai.ai · All rights reserved.
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
        <Hero />
        <Divider />
        <Philosophy />
        <Divider />
        <WeSeeYou />
        <Divider />
        <Collection />
        <Divider />
        <FirstCollection />
        <Divider />
        <AISection />
        <Divider />
        <Founder />
        <Divider />
        <Lifestyle />
      </main>
      <Footer />
    </div>
  );
}
