import { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from '../api/checkout';

const stripePromise = loadStripe('pk_live_51R1zvlCps5fpuWPnL80EVc0k2eCojZ42BoAqDVBZU0r8moOVgsW9rC4qfJM5XF9zA7z8QPSV9JqqP4slSrMXrNZ300OxmU4NMg');

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
            <a href="mailto:hello@foundherai.ai" style={{ color: C.ink, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <button
              onClick={() => scrollTo("box")}
              style={{ background: C.gold, color: C.white, border: "none", borderRadius: 6, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
            >
              Join Now
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
          <a href="mailto:hello@foundherai.ai" style={{ color: C.ink, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <button
            onClick={() => scrollTo("box")}
            style={{ background: C.gold, color: C.white, border: "none", borderRadius: 6, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: 8 }}
          >
            Join Now
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
          You don't need investors. You don't need a team. You don't need permission. You have AI. And us.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: C.muted,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          The FoundHers Club opens September 8th. First Class membership — $38.
        </p>

        <button
          onClick={() => scrollTo("foundhers-club")}
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
          Save My Seat →
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
        <a href="#foundhers-club" style={{ display: "inline-block", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "16px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em" }}>
          I want in — show me the Club
        </a>
      </div>
    </section>
  );
}

// ─── PURPOSE ─────────────────────────────────────────────────────────────────

function Purpose() {
  return (
    <section style={{ background: "#F4F1EA", padding: "80px 24px", fontFamily: "Inter, sans-serif", textAlign: "center" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ color: "#B8973E", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
          OUR PURPOSE
        </p>
        <h2 style={{ color: "#1C1A17", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}>
          FoundHer AI is the home base for women building businesses in the age of AI — the tools, the community, and the voice that says: she was always going to win.
        </h2>
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

        <div style={{ width: "100%", marginBottom: 64 }}>
          <img
            src="/foundher-lifestyle.jpg"
            alt="Women wearing FoundHer AI gear"
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>

          {/* 01 - Tee Drop */}
          <div style={{ background: "#111111", border: "1px solid #222222", borderRadius: 12, padding: "48px 36px" }}>
            <p style={{ color: "#B8973E", fontSize: 48, fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>01</p>
            <h3 style={{ color: "#FDFCF8", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Tee Drop</h3>
            <p style={{ color: "#7A7569", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              A monthly limited-edition founder tee. Bold sayings. Black or brown. Ships in a printed poly bag. The uniform for women who build.
            </p>
            <p style={{ color: "#FDFCF8", fontSize: 32, fontWeight: 800, marginBottom: 24 }}>$29<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/mo</span></p>
            <button
              onClick={async () => {
                await stripePromise;
                const { url } = await createCheckoutSession('price_1Tm6ccCps5fpuWPnyGULSbMK');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
            >
              Order Now — Ships August
            </button>
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
            <button
              onClick={async () => {
                await stripePromise;
                const { url } = await createCheckoutSession('price_1Tm6dPCps5fpuWPnNwmgFJcC');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
            >
              Order Now — Ships August
            </button>
          </div>

          {/* 03 - Agent */}
          <div style={{ background: "#111111", border: "1px solid #222222", borderRadius: 12, padding: "48px 36px" }}>
            <p style={{ color: "#B8973E", fontSize: 48, fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>03</p>
            <h3 style={{ color: "#FDFCF8", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Agent Series</h3>
            <p style={{ color: "#7A7569", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              For a fraction of the cost of a human assistant, deploy AI agents trained to handle your email, social media, content, and more. Built for solo founders who move fast.
            </p>
            <p style={{ color: "#FDFCF8", fontSize: 32, fontWeight: 800, marginBottom: 24 }}>From $47<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/mo</span></p>
            <a href="#waitlist" style={{ display: "block", textAlign: "center", background: "transparent", color: "#B8973E", border: "1px solid #B8973E", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Join the Waitlist
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── FOUNDHERS CLUB ────────────────────────────────────────────────────────────
// NOTE: Run in Supabase SQL editor:
// alter table foundher_club_waitlist enable row level security;
// create policy "Allow public inserts" on foundher_club_waitlist for insert with check (true);

function FoundHerClub() {
  return (
    <section id="foundhers-club" style={{ background: "#000000", padding: "96px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <img
            src="/foundhers-club-badge.png"
            alt="FoundHers Club Badge"
            style={{ width: 180, height: "auto", display: "block" }}
          />
        </div>
        <p style={{ color: "#B8973E", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
          THE FOUNDHERS CLUB — FIRST CLASS & CLUB MEMBERSHIP
        </p>
        <h2 style={{ color: "#FDFCF8", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
          Your people are assembling.
        </h2>
        <p style={{ color: "#FDFCF8", fontSize: "clamp(18px, 2.5vw, 22px)", lineHeight: 1.7, marginBottom: 16, maxWidth: 640, margin: "0 auto 16px" }}>
          The FoundHers Club opens September 8th — the day after Labor Day, when the kids are back in school and it's time to build.
        </p>
        <p style={{ color: "#7A7569", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, marginBottom: 16, maxWidth: 640, margin: "0 auto 16px" }}>
          Including virtual co-working rooms — because the best work happens when you're surrounded by women who get it.
        </p>
        <p style={{ color: "#B8973E", fontSize: 16, fontWeight: 600, marginBottom: 56, fontStyle: "italic" }}>
          Join before launch and lock in your founding member status. Free to join. Built for women who mean business.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 56 }}>

          <div style={{ background: "#111111", border: "2px solid #B8973E", borderRadius: 12, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#B8973E", color: "#000000", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap" }}>
              FOUNDING OFFER
            </div>
            <p style={{ color: "#B8973E", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>FIRST CLASS MEMBER</p>
            <p style={{ color: "#FDFCF8", fontSize: 36, fontWeight: 800, marginBottom: 8 }}>$38<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}> one-time</span></p>
            <p style={{ color: "#B8973E", fontSize: 14, fontWeight: 600, marginBottom: 24, fontStyle: "italic" }}>Includes your FoundHers Club hat — shipped free.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", color: "#7A7569", fontSize: 15, lineHeight: 2 }}>
              <li>✦ FoundHers Club hat shipped to your door</li>
              <li>✦ First Class status — locked in forever</li>
              <li>✦ Community access September 8th</li>
              <li>✦ Virtual co-working rooms</li>
              <li>✦ First access to tee drops</li>
              <li>✦ First access to Agent Series</li>
              <li>✦ Your seat before anyone else</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession('price_1Tm7jzCps5fpuWPnjE142af7');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
            >
              I'm First Class — $38
            </button>
          </div>

          <div style={{ background: "#111111", border: "2px solid #B8973E", borderRadius: 12, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#B8973E", color: "#000000", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap" }}>
              CLUB MEMBER
            </div>
            <p style={{ color: "#B8973E", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>CLUB MEMBER</p>
            <p style={{ color: "#FDFCF8", fontSize: 36, fontWeight: 800, marginBottom: 24 }}>$29<span style={{ fontSize: 16, fontWeight: 400, color: "#7A7569" }}>/mo</span></p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", color: "#7A7569", fontSize: 15, lineHeight: 2 }}>
              <li>✦ Everything in Founding</li>
              <li>✦ Monthly tee drop shipped to you</li>
              <li>✦ Priority Agent Series access</li>
              <li>✦ FoundHer Box quarterly drops</li>
              <li>✦ Premium co-working rooms</li>
              <li>✦ Summit early access & discounts</li>
            </ul>
            <a
              href="#box"
              style={{ display: "block", textAlign: "center", background: "#B8973E", color: "#000000", borderRadius: 6, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            >
              I'm in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WAITLIST ─────────────────────────────────────────────────────────────────

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;
    try {
      await fetch("https://vaexhwpzgtihqfnxiylp.supabase.co/rest/v1/foundher_waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY || "",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ""}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({ email: email.trim(), created_at: new Date().toISOString() })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" style={{ background: "#000000", padding: "80px 24px", fontFamily: "Inter, sans-serif", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <p style={{ color: "#B8973E", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
          STAY IN THE LOOP
        </p>
        <h2 style={{ color: "#FDFCF8", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
          We're building. We're sourcing.<br />We ship in August.
        </h2>
        <p style={{ color: "#7A7569", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
          Get early access, founding member pricing, and first pick of the tee drops.
        </p>
        {submitted ? (
          <p style={{ color: "#B8973E", fontWeight: 700, fontSize: 17 }}>You're in. We'll be in touch. 🖤</p>
        ) : (
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1, minWidth: 240, padding: "14px 20px", borderRadius: 6, border: "1px solid #333", background: "#111", color: "#FDFCF8", fontSize: 15, fontFamily: "Inter, sans-serif", outline: "none" }}
            />
            <button
              onClick={handleSubmit}
              style={{ background: "#B8973E", color: "#000000", border: "none", borderRadius: 6, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}
            >
              Count me in
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
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
        <Purpose />
        <FoundHerBox />
        <FoundHerClub />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
