import { useState, useEffect } from "react";
import { createCheckoutSession } from '../api/checkout';

const C = {
  bg: "#FFFCF7",
  cream: "#FDF4E9",
  blush: "#FEF0EC",
  espresso: "#1A110A",
  taupe: "#786860",
  gold: "#C08B2A",
  coral: "#E05C3A",
  plum: "#2A1535",
  sand: "#EDE4D8",
};

const font = {
  display: "'Fraunces', serif",
  body: "'Plus Jakarta Sans', sans-serif",
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
        background: C.bg,
        borderBottom: `1px solid ${C.sand}`,
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
        {/* Logo */}
        <div style={{ fontSize: 20, fontWeight: 700, fontFamily: font.display, letterSpacing: "-0.02em", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ color: C.espresso }}>Found</span>
          <span style={{ color: C.gold }}>Her</span>
          <span style={{ color: C.espresso }}> AI™</span>
        </div>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
            {menuOpen ? (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.espresso, transform: "translateY(7px) rotate(45deg)", transition: "all 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "transparent" }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.espresso, transform: "translateY(-7px) rotate(-45deg)", transition: "all 0.2s" }} />
              </>
            ) : (
              <>
                <span style={{ display: "block", width: 22, height: 2, background: C.espresso }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.espresso }} />
                <span style={{ display: "block", width: 22, height: 2, background: C.espresso }} />
              </>
            )}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="mailto:hello@foundherai.ai" style={{ color: C.espresso, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>Contact</a>
            <button
              onClick={() => scrollTo("foundhers-club")}
              style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font.body }}
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
            background: C.bg,
            borderTop: `1px solid ${C.sand}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <a href="mailto:hello@foundherai.ai" style={{ color: C.espresso, fontSize: 16, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>Contact</a>
          <button
            onClick={() => scrollTo("foundhers-club")}
            style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textAlign: "center", marginTop: 8 }}
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
        background: C.bg,
        paddingTop: 128,
        paddingBottom: 96,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: "center",
        fontFamily: font.body,
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p
          style={{
            color: C.gold,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 24,
            fontFamily: font.body,
          }}
        >
          FOR WOMEN WHO BUILD BUSINESSES — FOUNDERS. CREATORS. EMPIRE BUILDERS.
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 700,
            color: C.espresso,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            fontFamily: font.display,
          }}
        >
          You don't need investors. You don't need a team. You don't need permission. You have AI. And us.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: C.taupe,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          The FoundHers Club opens September 8th. First Class membership — $38.
        </p>

        <button
          onClick={() => scrollTo("foundhers-club")}
          style={{
            background: C.coral,
            color: "#FFFFFF",
            border: "none",
            borderRadius: 0,
            padding: "16px 36px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: font.body,
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
    <section style={{ background: C.cream, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>
          WOMEN BUILDING IN THE AGE OF AI
        </p>
        <h2 style={{ color: C.espresso, fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em", fontFamily: font.display }}>
          You're not behind.<br />You're early.
        </h2>
        <p style={{ color: C.taupe, fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.7, marginBottom: 48 }}>
          Women are building the next era of business — with AI, without permission, and without apology. You belong here.
        </p>
        <a href="#foundhers-club" style={{ display: "inline-block", background: C.coral, color: "#FFFFFF", borderRadius: 0, padding: "16px 36px", fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em" }}>
          I want in
        </a>
      </div>
    </section>
  );
}

// ─── PURPOSE ─────────────────────────────────────────────────────────────────

function Purpose() {
  return (
    <section style={{ background: C.blush, padding: "80px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
          OUR PURPOSE
        </p>
        <h2 style={{ color: C.espresso, fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, fontFamily: font.display }}>
          FoundHer AI is the home base for women building businesses in the age of AI — the tools, the community, and the voice that says: she was always going to win.
        </h2>
      </div>
    </section>
  );
}


// ─── LIFESTYLE IMAGE ──────────────────────────────────────────────────────────

function LifestyleImage() {
  return (
    <section style={{ background: C.cream, padding: "40px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <img
          src="/foundher-lifestyle.jpg"
          alt="Women wearing FoundHer AI gear"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
        />
      </div>
    </section>
  );
}

// ─── FOUNDHERS CLUB ────────────────────────────────────────────────────────────
// NOTE: Run in Supabase SQL editor:
// alter table foundher_club_waitlist enable row level security;
// create policy "Allow public inserts" on foundher_club_waitlist for insert with check (true);

function FoundHersClub() {
  return (
    <section id="foundhers-club" style={{ background: C.bg, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img
            src="/foundhers-club-badge.png"
            alt="FoundHers Club Badge"
            style={{ width: 180, height: "auto", display: "block" }}
          />
        </div>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
          THE FOUNDHERS CLUB — FOUNDING MEMBER & CLUB MEMBERSHIP
        </p>
        <h2 style={{ color: C.espresso, fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em", fontFamily: font.display }}>
          Your people are assembling.
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto 32px", maxWidth: 500, color: C.taupe, fontSize: 17, lineHeight: 2, textAlign: "left", display: "inline-block" }}>
          <li>✦ Virtual co-working rooms</li>
          <li>✦ Community of women AI founders</li>
          <li>✦ First access to tee drops & Agent Series</li>
          <li>✦ Monthly newsletter</li>
          <li>✦ FoundHers Summit early access</li>
          <li>✦ Your seat before anyone else</li>
        </ul>
        <p style={{ color: C.espresso, fontSize: "clamp(18px, 2.5vw, 22px)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 16px" }}>
          The FoundHers Club opens September 8th — the day after Labor Day, when the kids are back in school and it's time to build.
        </p>
        <p style={{ color: C.gold, fontSize: 16, fontWeight: 600, marginBottom: 56, fontStyle: "italic", fontFamily: font.display }}>
          Join before launch and lock in your founding member status. Built for women who mean business.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 56 }}>

          <div style={{ background: C.cream, border: `2px solid ${C.gold}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.coral, color: "#FFFFFF", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", padding: "4px 16px", borderRadius: 0, whiteSpace: "nowrap" }}>
              FOUNDING MEMBER — ORIGINAL CLASS
            </div>
            <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>FOUNDING MEMBER</p>
            <p style={{ color: C.espresso, fontSize: 36, fontWeight: 700, marginBottom: 8, fontFamily: font.display }}>$38<span style={{ fontSize: 16, fontWeight: 400, color: C.taupe, fontFamily: font.body }}> one-time</span></p>
            <p style={{ color: C.espresso, fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: font.display }}>For the woman who builds anyway.</p>
            <p style={{ color: C.taupe, fontSize: 15, fontWeight: 400, fontStyle: "italic", marginBottom: 24, fontFamily: font.body }}>You've shown up through the fear, the debt, and the 3am doubt. This is your seat at the table — and the hat that says you earned it.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", color: C.taupe, fontSize: 15, lineHeight: 2 }}>
              <li>✦ FoundHers Club hat — wear it like the badge it is</li>
              <li>✦ Founding Member status — locked in forever</li>
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
              style={{ display: "block", width: "100%", textAlign: "center", background: C.coral, color: "#FFFFFF", borderRadius: 0, padding: "14px 24px", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: font.body }}
            >
              I'm a Founding Member — $38
            </button>
          </div>

          <div style={{ background: C.cream, border: `1px solid ${C.sand}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#FFFFFF", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", padding: "4px 16px", borderRadius: 0, whiteSpace: "nowrap" }}>
              CLUB MEMBER
            </div>
            <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>CLUB MEMBER</p>
            <p style={{ color: C.espresso, fontSize: 36, fontWeight: 700, marginBottom: 24, fontFamily: font.display }}>$29<span style={{ fontSize: 16, fontWeight: 400, color: C.taupe, fontFamily: font.body }}>/mo</span></p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", color: C.taupe, fontSize: 15, lineHeight: 2 }}>
              <li>✦ Everything in Founding</li>
              <li>✦ Monthly tee drop shipped to you</li>
              <li>✦ Priority Agent Series access</li>
              <li>✦ FoundHer Box quarterly drops</li>
              <li>✦ Premium co-working rooms</li>
              <li>✦ Summit early access & discounts</li>
            </ul>
            <a
              href="#foundhers-club"
              style={{ display: "block", textAlign: "center", background: C.espresso, color: "#FFFFFF", borderRadius: 0, padding: "14px 24px", fontSize: 15, fontWeight: 600, textDecoration: "none", fontFamily: font.body }}
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
    <section id="waitlist" style={{ background: C.plum, padding: "80px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
          GET IN THE LOOP
        </p>
        <h2 style={{ color: "#FFFCF7", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2, fontFamily: font.display }}>
          Follow the founders who are building right now.
        </h2>
        <div style={{ maxWidth: 560, margin: "0 auto 40px", borderRadius: 0, overflow: "hidden", border: `1px solid rgba(255,255,255,0.12)` }}>
          <video
            controls
            playsInline
            style={{ width: "100%", height: "560px", objectFit: "cover", display: "block" }}
          >
            <source src="/liz-bryant.mp4" type="video/mp4" />
          </video>
          <div style={{ background: "rgba(255,255,255,0.06)", padding: "24px 32px", textAlign: "center" }}>
            <h3 style={{ color: "#FFFCF7", fontSize: 22, fontWeight: 700, marginBottom: 4, fontFamily: font.display }}>Liz Bryant</h3>
            <p style={{ color: C.gold, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Founder, Locals Mark</p>
            <a href="https://www.instagram.com/localsmarkco" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, textDecoration: "none" }}>
              Follow Liz's founder journey → @localsmarkco
            </a>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
          Women building businesses in the age of AI — their journeys, their tools, their wins. Subscribe and get a front row seat.
        </p>
        {submitted ? (
          <p style={{ color: C.gold, fontWeight: 600, fontSize: 17 }}>You're in. We'll be in touch. 🖤</p>
        ) : (
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1, minWidth: 240, padding: "14px 20px", borderRadius: 0, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#FFFCF7", fontSize: 15, fontFamily: font.body, outline: "none" }}
            />
            <button
              onClick={handleSubmit}
              style={{ background: C.coral, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, whiteSpace: "nowrap" }}
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
        background: C.espresso,
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        padding: "48px 24px",
        fontFamily: font.body,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: font.display }}>
          <span style={{ color: "#FFFCF7" }}>Found</span>
          <span style={{ color: C.gold }}>Her</span>
          <span style={{ color: "#FFFCF7" }}> AI™</span>
        </div>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>
          Building AI ventures for the people everyone else is building past.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <a href="https://adaptz.ai" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>Adaptz.ai</a>
          <a href="mailto:hello@foundherai.ai" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 FoundHer AI, PBC · foundherai.ai · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ fontFamily: font.body }}>
      <Nav />
      <main>
        <Hero />
        <BuiltBetter />
        <LifestyleImage />
        <Purpose />
        <FoundHersClub />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
