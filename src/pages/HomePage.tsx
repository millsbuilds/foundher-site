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
  display: "'Fraunces', serif",
  body: "'Plus Jakarta Sans', sans-serif",
};

const Divider = () => <div style={{ height: 4, background: C.navy, width: "100%" }} />;

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
        <img src="/images/FH_hero-image-final.png" alt="FoundHer AI" style={{ width: "100%", height: "90vh", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
        <div style={{ background: C.white, padding: "40px 24px 64px" }}>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.black, display: "block" }}>Built by women.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.coral, display: "block", marginBottom: 24 }}>Powered by AI.</span>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
            This is the brand for women who build. Whatever you're building, AI is making it possible. The moment is yours.
          </p>
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 16 }}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer Mark" style={{ width: 60 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>
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
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "100vh", padding: "0 0 0 7%", justifyContent: "center" }}>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 80, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#FFFFFF", display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>Built by women.</span>
        <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 80, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.coral, display: "block", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>Powered by AI.</span>
      </div>
      <div style={{ position: "absolute", right: "7%", top: "50%", transform: "translateY(-50%)", maxWidth: 420, background: "rgba(255,255,255,0.92)", padding: "48px 40px", zIndex: 2 }}>
        <p style={{ fontFamily: font.body, fontSize: 17, color: C.gray, lineHeight: 1.75, marginBottom: 0 }}>
          This is the brand for women who build. Whatever you're building, AI is making it possible. The moment is yours.
        </p>
        <span style={{ position: "relative", display: "inline-flex", alignItems: "center", marginTop: 16 }}><img src="/images/FH_mark_navy_terra_v2.png" alt="FoundHer Mark" style={{ width: 60 }} /><sup style={{ fontSize: 10, color: "inherit", verticalAlign: "super", marginLeft: 2 }}>™</sup></span>
      </div>
    </section>
  );
}

// ─── IDENTITY STATEMENT ─────────────────────────────────────────────────────

function IdentityStatement() {
  return (
    <div style={{ background: "#F4F1EA", padding: "64px 24px", textAlign: "center" }}>
      <span style={{ fontFamily: font.body, fontWeight: 300, fontSize: "clamp(16px, 2vw, 22px)", color: "#1B3A6B", display: "block", marginBottom: 16 }}>
        You've been building something.
      </span>
      <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#1B3A6B", display: "block" }}>
        Now you have a title for it.
      </span>
    </div>
  );
}

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────

function Philosophy() {
  return (
    <section style={{ background: C.white, padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 60, height: 3, background: C.navy, margin: "0 auto 40px" }} />
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, lineHeight: 1.2, textAlign: "center", margin: 0 }}>
          The goal is never the business.<br />The goal is the life.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.gray, lineHeight: 1.6, margin: "24px auto 0", textAlign: "center" }}>
          Build the business. Live the lifestyle. AI makes both possible.
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
      <img src="/images/FH_yacht.png" alt="FoundHer yacht" style={imgStyle("center center")} />
      <img src="/images/FH_Beach-towel-scene.png" alt="Beach towel with FoundHer mark" style={imgStyle("center center")} />
    </section>
  );
}

// ─── WE SEE YOU ─────────────────────────────────────────────────────────────

function WeSeeYou() {
  return (
    <section style={{ background: C.offwhite, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.navy, textAlign: "center", marginBottom: 16 }}>
          WE SEE YOU
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.navy, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
          Every FoundHer is building something.
        </h2>
        <div style={{ marginBottom: 48 }}>
          {[
            "She's selling on Amazon.",
            "She's building an Etsy shop.",
            "She's building a media company.",
            "She has a YouTube channel.",
            "She's building a Shopify store.",
            "She's selling digital products.",
            "She's creating AI automations for clients.",
            "She's creating a product line.",
            "She's building roadways and bridges.",
            "She has a blog that makes $500 a month.",
            "She has an Instagram with 4,000 followers.",
            "She has 2 million followers.",
            "She's still on her parents' payroll — and building anyway.",
            "She's just getting started.",
            "She's scaling.",
            "She's doing it her way.",
          ].map((line) => (
            <p key={line} style={{ fontFamily: font.display, fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 24px)", color: C.black, lineHeight: 1.4, margin: 0, padding: "16px 0", borderBottom: `1px solid ${C.navy}` }}>{line}</p>
          ))}
        </div>
        <p style={{ fontFamily: font.display, fontWeight: 400, fontSize: 18, color: C.gray, textAlign: "center", maxWidth: 640, margin: "48px auto", lineHeight: 1.7 }}>
          A FoundHer isn't someone who hangs a shingle. A dentist, chiropractor, attorney, financial advisor, or physician who has a license to lean on. A FoundHer builds from nothing — no credential, no safety net. Just vision, will, and the courage to begin anyway.
        </p>
        <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(24px,3vw,36px)", color: C.black, textAlign: "center" }}>
          She is a Found<span style={{ color: C.coral }}>Her</span>.
        </p>
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
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#1B3A6B", display: "block" }}>
          Wear the brand of FoundHers.
        </span>
      </div>
    </>
  );
}

// ─── THE CUFF ───────────────────────────────────────────────────────────────

function TheCuff() {
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
    <section style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse", minHeight: isMobile ? "auto" : 600 }}>
      <div style={{ width: isMobile ? "100%" : "55%", height: isMobile ? "50vh" : "auto" }}>
        <img
          src="/images/FH_boxed-logo-cuff.png"
          alt="The FoundHer Cuff"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
      </div>
      <div style={{ width: isMobile ? "100%" : "45%", background: "#F4F1EA", padding: isMobile ? "48px 24px" : "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1B3A6B", margin: 0 }}>
          THE FOUNDHERS STACK
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px, 4vw, 56px)", color: "#1B3A6B", marginTop: 16, marginBottom: 0 }}>
          The Cuff.
        </h2>
        <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: 18, color: "#1B3A6B", lineHeight: 1.8, marginTop: 24 }}>
          Get the gift of ownership. In you.
        </p>
        <p style={{ fontFamily: font.body, fontWeight: 400, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C16044", marginTop: 40 }}>
          Coming Soon.
        </p>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid #1B3A6B", margin: 0 }} />
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
          I didn't build FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup> to sell you something. I built it to give you back to yourself.
        </h2>

        <div style={{ width: "85%", margin: "0 auto 40px" }}>
          <img
            src="/images/FH_Founder.png"
            alt="Mills Gardner, Founder"
            style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center center", display: "block" }}
          />
        </div>

        <div>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>For a long time, the game was rigged.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Not loudly. Not with signs on the door. Just quietly, consistently — in the rooms where funding decisions got made, in the doubt that greeted a woman's pitch, in the math that said women-led companies received less than 2% of venture capital while delivering better returns.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>The venture capital gatekeepers had all the leverage.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Then AI happened.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>Suddenly the woman with the vision didn't need a room full of believers. She didn't need permission, a co-founder with the right pedigree, or a pre-seed check from someone who couldn't see what she saw. There is no need for pre-seed funding anymore. She needs the AI tools, the will to learn them, and the audacity to start anyway.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>The playing field didn't just level. It opened.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>FoundHer AI<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup> exists for the women who walked through that opening. Who are building right now with a laptop, a vision, and AI tools that replaced what used to cost a quarter million dollars to assemble.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>No $400,000 engineering team. No office lease. No agency retainer. No photographer. No marketing department. No CFO, no COO, no gatekeeper in a title. No waiting for someone else to believe in you before you could begin.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>AI replaced all of it.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>One woman. One vision. Iterate until it works. Scale when it's ready. Live the life while you're building it — because you're not waiting anymore.</p>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>This is the brand for those women.</p>
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
        <Hero />
        <Divider />
        <IdentityStatement />
        <Divider />
        <Philosophy />
        <Divider />
        <LifestyleBreak />
        <Divider />
        <WeSeeYou />
        <Divider />
        <RunnerBreak />
        <Divider />
        <TheCuff />
        {/* <Divider /> */}
        {/* <DesignedForLife /> */}
        {/* <Divider /> */}
        <Founder />
        <Divider />
        <HorseSection />
      </main>
      <Footer />
    </div>
  );
}
