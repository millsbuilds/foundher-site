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
            <a href="https://merch.foundherai.ai" target="_blank" rel="noopener noreferrer" style={{ color: C.ink, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Merch</a>
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
          <a href="https://merch.foundherai.ai" target="_blank" rel="noopener noreferrer" style={{ color: C.ink, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Merch</a>
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
          FOR WOMEN WHO BUILD
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
          You don't need investors. You don't need a team. You don't need permission. You need the right tools — and someone who's already built with them.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: C.muted,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          FoundHer AI is what that looks like.
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
          The platform where women founders access the tools, resources, and community to build in the AI economy — at a fraction of the cost of going it alone.
        </h2>
        <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 28 }}>
          Most platforms were built for founders who already have funding, a team, and a network. FoundHer AI is being built for everyone else. We're creating a space where women founders get access to the AI tools, legal resources, and infrastructure they need — without the gatekeepers, the cohorts, or the equity asks. This is the platform we wish had existed when we started.
        </p>
        <p style={{ fontSize: 16, fontStyle: "italic", color: C.gold, marginBottom: 36 }}>
          Platform launching 2026. Founding member waitlist open.
        </p>
        <button
          onClick={() => scrollTo("waitlist")}
          style={{
            background: "transparent",
            color: C.gold,
            border: `2px solid ${C.gold}`,
            borderRadius: 6,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Join the Founding Member Waitlist →
        </button>
      </div>
    </section>
  );
}

// ─── VENTURES ─────────────────────────────────────────────────────────────────

type BadgeStyle = "filled" | "outline";

function VentureCard({
  badge,
  badgeStyle,
  name,
  description,
  link,
}: {
  badge: string;
  badgeStyle: BadgeStyle;
  name: string;
  description: string;
  link: string;
}) {
  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: 4,
          background: badgeStyle === "filled" ? C.gold : "transparent",
          color: badgeStyle === "filled" ? C.white : C.gold,
          border: badgeStyle === "outline" ? `1.5px solid ${C.gold}` : "none",
          alignSelf: "flex-start",
        }}
      >
        {badge}
      </span>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: C.ink, margin: 0 }}>{name}</h3>
      <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.65, margin: 0 }}>{description}</p>
      <a
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: C.gold, fontSize: 14, fontWeight: 600, textDecoration: "none", marginTop: "auto" }}
      >
        {link} →
      </a>
    </div>
  );
}

function Ventures() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="ventures"
      style={{ background: C.white, padding: "96px 24px", fontFamily: "Inter, sans-serif" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Built by FoundHer AI
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Proof that it works.
          </h2>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.65, maxWidth: 640, margin: "0 auto" }}>
            Our ventures span AI intelligence, wellness, and productivity — all built without investors, without a team, and without permission.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 24,
          }}
        >
          <VentureCard
            badge="Live"
            badgeStyle="filled"
            name="Adaptz.ai™"
            description="The AI displacement intelligence platform. Helping professionals assess their risk and adapt before the window closes."
            link="adaptz.ai"
          />
          <VentureCard
            badge="Coming Soon"
            badgeStyle="outline"
            name="Flowse™"
            description="Not a task app. Not a to-do list. A Done list. 5 tasks. Every day."
            link="flowse.app"
          />
          <VentureCard
            badge="In Development"
            badgeStyle="outline"
            name="SafeSalt™"
            description="A performance and wellness brand built around the science of sodium. For the athlete and the health-conscious."
            link="safesalt.health"
          />
          <VentureCard
            badge="In Development"
            badgeStyle="outline"
            name="SafeSupplements.Health"
            description="Physician-formulated supplements for the health-conscious. Built with Dr. RS Isaac Gardner, MD."
            link="safesupplements.health"
          />
        </div>
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
          Launching 2026. Join the waitlist to be first in.
        </p>
        <button
          onClick={() => scrollTo("waitlist")}
          style={{
            background: C.ink,
            color: C.white,
            border: "none",
            borderRadius: 6,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Join the Founding Member Waitlist →
        </button>
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
            Mills Gardner spent eight years as a corporate executive of an Inc. 500 company before becoming a serial entrepreneur. In 2013, she pitched a real estate crowdfunding platform to investors and was told she was too old to build. She retired. Then AI arrived. Within months she was building tech stacks, launching platforms, and developing ventures — without investors, without a team, without startup capital. She came out of retirement and launched Adaptz.ai™, now used by more than 9,000 professionals navigating AI displacement. She believes the next generation of world-changers will be women who finally have the tools to match their vision.
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
        <Vision />
        <Ventures />
        <Resources />
        <Founder />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
