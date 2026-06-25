import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";

const C = {
  white: "#FFFFFF",
  cream: "#F4F1EA",
  ink: "#1C1A17",
  gold: "#B8973E",
  muted: "#6B6560",
  border: "#E5E2DB",
};

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
        borderBottom: `1px solid ${C.border}`,
        fontFamily: "Inter, sans-serif",
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
        {/* Logo */}
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ color: C.ink }}>Found</span>
          <span style={{ color: C.gold }}>Her</span>
          <span style={{ color: C.ink }}> AI™</span>
        </div>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
            {menuOpen ? (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.ink, transform: "translateY(7px) rotate(45deg)", transition: "all 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "transparent" }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.ink, transform: "translateY(-7px) rotate(-45deg)", transition: "all 0.2s" }} />
              </>
            ) : (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.ink }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.ink }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.ink }} />
              </>
            )}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <button onClick={() => scrollTo("ventures")} style={{ background: "none", border: "none", cursor: "pointer", color: C.ink, fontSize: 15, fontWeight: 500, fontFamily: "Inter, sans-serif" }}>Our Ventures</button>
            <button onClick={() => scrollTo("resources")} style={{ background: "none", border: "none", cursor: "pointer", color: C.ink, fontSize: 15, fontWeight: 500, fontFamily: "Inter, sans-serif" }}>Resources</button>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.ink, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <button
              onClick={() => scrollTo("waitlist")}
              style={{ background: C.gold, color: C.white, border: "none", borderRadius: 6, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
            >
              Join the Waitlist
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: C.white,
            borderTop: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <button onClick={() => scrollTo("ventures")} style={{ background: "none", border: "none", cursor: "pointer", color: C.ink, fontSize: 16, fontWeight: 500, fontFamily: "Inter, sans-serif", textAlign: "left", padding: "4px 0" }}>Our Ventures</button>
          <button onClick={() => scrollTo("resources")} style={{ background: "none", border: "none", cursor: "pointer", color: C.ink, fontSize: 16, fontWeight: 500, fontFamily: "Inter, sans-serif", textAlign: "left", padding: "4px 0" }}>Resources</button>
          <a href="mailto:hello@foundherai.ai" style={{ color: C.ink, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <button
            onClick={() => scrollTo("waitlist")}
            style={{ background: C.gold, color: C.white, border: "none", borderRadius: 6, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: 8 }}
          >
            Join the Waitlist
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        background: C.white,
        paddingTop: 128,
        paddingBottom: 96,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p
          style={{
            color: C.gold,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          FOR WOMEN WHO BUILD BUSINESSES — FOUNDERS. CREATORS. EMPIRE BUILDERS.
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 800,
            color: C.ink,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          You don't need investors. You don't need a team. You don't need permission. You have AI.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: C.muted,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          The best is being built right now.
        </p>

        <button
          onClick={() => scrollTo("ventures")}
          style={{
            background: C.ink,
            color: C.white,
            border: "none",
            borderRadius: 6,
            padding: "16px 32px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          See What We're Building →
        </button>
      </div>
    </section>
  );
}

// ─── BUILT BETTER ────────────────────────────────────────────────────────────

function BuiltBetter() {
  return (
    <section style={{ background: "#000000", padding: "96px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#B8973E", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>
          WOMEN BUILDING IN THE AGE OF AI
        </p>
        <h2 style={{ color: "#FDFCF8", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
          You're not behind.<br />You're early.
        </h2>
        <p style={{ color: "#7A7569", fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.7, marginBottom: 48 }}>
          Women are building the next era of business — with AI, without permission, and without apology. You belong here.
        </p>
        <a href="#box" style={{ display: "inline-block", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "16px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em" }}>
          I'm in — show me the box
        </a>
      </div>
    </section>
  );
}

// ─── FOUNDHER BOX ─────────────────────────────────────────────────────────────

function FoundHerBox() {
  return (
    <section id="box" style={{ background: "#0A0A0A", padding: "96px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ color: "#B8973E", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>
          FOUNDHER BOX
        </p>
        <h2 style={{ color: "#FDFCF8", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, textAlign: "center", letterSpacing: "-0.02em" }}>
          Built better. By her.
        </h2>
        <p style={{ color: "#7A7569", fontSize: 17, textAlign: "center", marginBottom: 72, lineHeight: 1.6 }}>
          First box ships August. Founding member pricing locked in today.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>

          {/* 01 - Tee Drop */}
          <div style={{ background: "#111111", border: "1px solid #222222", borderRadius: 12, padding: "48px 36px" }}>
            <p style={{ color: "#B8973E", fontSize: 48, fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>01</p>
            <h3 style={{ color: "#FDFCF8", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Tee Drop</h3>
            <p style={{ color: "#7A7569", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              A monthly limited-edition founder tee. Bold sayings. Black or brown. Ships in a printed poly bag. The uniform for women who build.
            </p>
            <p style={{ color: "#FDFCF8", fontSize: 32, fontWeight: 800, marginBottom: 24 }}>$29<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/mo</span></p>
            <a href="#stripe-tee" style={{ display: "block", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Order Now — Ships August
            </a>
          </div>

          {/* 02 - FoundHer Box */}
          <div style={{ background: "#111111", border: "2px solid #B8973E", borderRadius: 12, padding: "48px 36px", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#B8973E", color: "#000000", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 16px", borderRadius: 20 }}>
              MOST POPULAR
            </div>
            <p style={{ color: "#B8973E", fontSize: 48, fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>02</p>
            <h3 style={{ color: "#FDFCF8", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The FoundHer Box</h3>
            <p style={{ color: "#7A7569", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Quarterly box with a founder tee, a 30-day AI agent, prompt cards, self-care, and a partner founder product. Everything a builder actually needs.
            </p>
            <p style={{ color: "#FDFCF8", fontSize: 32, fontWeight: 800, marginBottom: 24 }}>$49<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/quarter</span></p>
            <a href="#stripe-box" style={{ display: "block", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Order Now — Ships August
            </a>
          </div>

          {/* 03 - Agent */}
          <div style={{ background: "#111111", border: "1px solid #222222", borderRadius: 12, padding: "48px 36px" }}>
            <p style={{ color: "#B8973E", fontSize: 48, fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>03</p>
            <h3 style={{ color: "#FDFCF8", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Agent</h3>
            <p style={{ color: "#7A7569", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              A dedicated AI agent built for your business. Not a chatbot. A builder tool. Priced for founders, not VCs. Waitlist opening soon.
            </p>
            <p style={{ color: "#FDFCF8", fontSize: 32, fontWeight: 800, marginBottom: 24 }}>$47<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/mo</span></p>
            <a href="#waitlist" style={{ display: "block", textAlign: "center", background: "transparent", color: "#B8973E", border: "1px solid #B8973E", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Join the Waitlist
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── VISION ───────────────────────────────────────────────────────────────────

function Vision() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="vision"
      style={{
        background: C.cream,
        padding: "96px 24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
          The Mission
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 700,
            color: C.ink,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          The media company for women who build in the AI economy.
        </h2>
        <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 28 }}>
          FoundHer AI produces the events, content, and community that women founders actually need — without the gatekeepers, the cohorts, or the equity asks. We're building the stage, the mic, and the network.
        </p>
        <p style={{ fontSize: 16, fontStyle: "italic", color: C.gold, marginBottom: 36 }}>
          Annual Summit. Podcast. Newsletter.
        </p>
        <a
          href="#box"
          style={{
            display: "inline-block",
            background: C.gold,
            color: C.white,
            border: "none",
            borderRadius: 6,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            textDecoration: "none",
          }}
        >
          Order Your First Box — Ships August
        </a>
      </div>
    </section>
  );
}

// ─── RESOURCES ────────────────────────────────────────────────────────────────

function Resources() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="resources"
      style={{ background: C.cream, padding: "96px 24px", fontFamily: "Inter, sans-serif" }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
          For Women Founders
        </p>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 28 }}>
          The tools, resources, and community we wish had existed.
        </h2>
        <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 24 }}>
          We're curating the best AI tools, legal resources, and founder infrastructure — vetted, affordable, and built for women who are building without a safety net. No gatekeepers. No cohorts. Just what works.
        </p>
        <p style={{ fontSize: 16, fontStyle: "italic", color: C.gold, marginBottom: 36 }}>
          Founding member pricing. First box ships August.
        </p>
        <a
          href="#box"
          style={{
            display: "inline-block",
            background: C.ink,
            color: C.white,
            border: "none",
            borderRadius: 6,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            textDecoration: "none",
          }}
        >
          Order Now — $29/mo
        </a>
      </div>
    </section>
  );
}

// ─── FOUNDER ──────────────────────────────────────────────────────────────────

function Founder() {
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
    <section
      id="founder"
      style={{ background: C.white, padding: "96px 24px", fontFamily: "Inter, sans-serif" }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: 56,
        }}
      >
        {/* Photo */}
        <div style={{ flexShrink: 0, textAlign: "center" }}>
          <img
            src="/mills-photo.jpg"
            alt="Mills Gardner"
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${C.border}`,
              background: C.cream,
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Text */}
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            The Founder
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Mills Gardner
          </h2>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
            Founder, FoundHer AI, PBC
          </p>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
            Mills Gardner is a serial entrepreneur who founded, scaled, and sold multiple companies over a 30-year career — then retired. When AI arrived, she came back. Now she builds solo using AI tools, ships faster than teams of ten, and has zero interest in asking anyone's permission. She started FoundHer AI for every woman who recognized herself in that sentence.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── WAITLIST ─────────────────────────────────────────────────────────────────

function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("foundher_waitlist").insert([
      { email: email.trim(), created_at: new Date().toISOString() },
    ]);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message.includes("duplicate") ? "You're already on the list!" : "Something went wrong. Please try again.");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section
      id="waitlist"
      style={{ background: C.ink, padding: "96px 24px", fontFamily: "Inter, sans-serif" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            color: C.cream,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          The FoundHer Resource Platform is coming.
        </h2>
        <p style={{ fontSize: 18, color: C.gold, fontWeight: 600, marginBottom: 20 }}>
          AI tools. Legal resources. Community. At a fraction of the cost.
        </p>
        <p style={{ fontSize: 16, color: "#A09A93", lineHeight: 1.7, marginBottom: 48 }}>
          We're building a platform where women founders get everything they need to build in the AI economy — without going it alone. Join the founding member waitlist and be first in.
        </p>

        {status === "success" ? (
          <div style={{ background: "#2A261F", borderRadius: 8, padding: "24px 32px", color: C.cream, fontSize: 17, fontWeight: 600 }}>
            You're in. We'll be in touch before launch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: `2px solid ${C.gold}` }}>
              <input
                ref={inputRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  fontSize: 16,
                  border: "none",
                  outline: "none",
                  background: "#2A261F",
                  color: C.cream,
                  fontFamily: "Inter, sans-serif",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: C.gold,
                  color: C.white,
                  border: "none",
                  padding: "14px 24px",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: status === "loading" ? "wait" : "pointer",
                  fontFamily: "Inter, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {status === "loading" ? "Joining..." : "Join the Waitlist"}
              </button>
            </div>
            {status === "error" && (
              <p style={{ color: "#E07070", fontSize: 14, margin: 0 }}>{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: C.ink,
        borderTop: "1px solid #2A261F",
        padding: "48px 24px",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
          <span style={{ color: C.cream }}>Found</span>
          <span style={{ color: C.gold }}>Her</span>
          <span style={{ color: C.cream }}> AI™</span>
        </div>
        <p style={{ fontSize: 15, color: "#A09A93", marginBottom: 28, lineHeight: 1.6 }}>
          Building AI ventures for the people everyone else is building past.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <a href="https://adaptz.ai" target="_blank" rel="noopener noreferrer" style={{ color: "#A09A93", fontSize: 14, textDecoration: "none" }}>Adaptz.ai</a>
          <button onClick={() => scrollTo("resources")} style={{ background: "none", border: "none", cursor: "pointer", color: "#A09A93", fontSize: 14, fontFamily: "Inter, sans-serif" }}>Incubator</button>
          <a href="mailto:hello@foundherai.ai" style={{ color: "#A09A93", fontSize: 14, textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontSize: 13, color: "#6B6560" }}>
          © 2026 FoundHer AI, PBC · foundherai.ai · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <BuiltBetter />
        <FoundHerBox />
        <Vision />
        <Resources />
        <Founder />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
