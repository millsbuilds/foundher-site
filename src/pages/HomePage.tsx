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
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (isMobile) {
    return (
      <section style={{ background: C.bg, fontFamily: font.body }}>
        <img
          src="/images/mills-hero.jpg"
          alt="Mills Gardner — Built Better. By Her."
          style={{ width: "100%", height: 400, objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
        <div style={{ padding: "48px 24px 64px" }}>
          <div style={{ display: "flex", gap: 24, marginBottom: 32, alignItems: "center" }}>
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral }}>BUILD.</span>
            <span style={{ width: 1, height: 20, background: C.sand, display: "inline-block" }} />
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold }}>LAUNCH.</span>
            <span style={{ width: 1, height: 20, background: C.sand, display: "inline-block" }} />
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.espresso }}>GROW.</span>
          </div>

          <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px,4vw,54px)", color: C.espresso, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
            The world is about to see what we can do.
          </h1>

          <p style={{ fontFamily: font.body, fontSize: 17, color: C.taupe, lineHeight: 1.75, maxWidth: 420, marginBottom: 36 }}>
            AI just untied our hands. No venture capital. No team. No office lease. No permission. For the first time, women who build have every tool they need — and each other.
          </p>

          <button
            onClick={() => scrollTo("foundhers-club")}
            style={{ width: "100%", background: C.coral, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "14px 28px", border: "none", borderRadius: 0, cursor: "pointer" }}
          >
            Join the FoundHers Club →
          </button>

          <p style={{ fontFamily: font.body, fontSize: 12, color: C.taupe, letterSpacing: "0.05em", marginTop: 24 }}>
            ⚡ Opens September 8th  ·  Founding Member spots are limited
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ display: "flex", minHeight: "100vh", fontFamily: font.body }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <img
          src="/images/mills-hero.jpg"
          alt="Mills Gardner — Built Better. By Her."
          style={{ width: "100%", height: "100vh", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
      </div>
      <div style={{ flex: 1, background: C.bg, display: "flex", alignItems: "center", padding: "120px 64px 80px 48px" }}>
        <div>
          <div style={{ display: "flex", gap: 24, marginBottom: 32, alignItems: "center" }}>
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral }}>BUILD.</span>
            <span style={{ width: 1, height: 20, background: C.sand, display: "inline-block" }} />
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold }}>LAUNCH.</span>
            <span style={{ width: 1, height: 20, background: C.sand, display: "inline-block" }} />
            <span style={{ fontFamily: font.display, fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.espresso }}>GROW.</span>
          </div>

          <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px,4vw,54px)", color: C.espresso, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
            The world is about to see what we can do.
          </h1>

          <p style={{ fontFamily: font.body, fontSize: 17, color: C.taupe, lineHeight: 1.75, maxWidth: 420, marginBottom: 36 }}>
            AI just untied our hands. No venture capital. No team. No office lease. No permission. For the first time, women who build have every tool they need — and each other.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => scrollTo("foundhers-club")}
              style={{ background: C.coral, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "14px 28px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              Join the FoundHers Club →
            </button>
            <button
              onClick={() => scrollTo("pillars")}
              style={{ background: "transparent", color: C.espresso, fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "14px 28px", border: `1.5px solid ${C.espresso}`, borderRadius: 0, cursor: "pointer" }}
            >
              How It Works
            </button>
          </div>

          <p style={{ fontFamily: font.body, fontSize: 12, color: C.taupe, letterSpacing: "0.05em", marginTop: 24 }}>
            ⚡ Opens September 8th  ·  Founding Member spots are limited
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── THREE PILLARS ───────────────────────────────────────────────────────────

function ThreePillars() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pillars = [
    { icon: "⚡", title: "Online Community", body: "Virtual co-working rooms, live sessions, and a private community of women who are building right now. Show up, stay accountable, move forward." },
    { icon: "🎙", title: "Founder Stories", body: "Real stories from women in the middle of it — the pivots, the breakthroughs, the 3am moments. Our members-only podcast drops every week." },
    { icon: "🛠", title: "AI Tools & Roadmaps", body: "Built-for-founders AI tools, early access to new launches, and a roadmap that evolves with you. No fluff. Just what works." },
  ];

  return (
    <section id="pillars" style={{ background: C.cream, padding: "80px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, textAlign: "center", marginBottom: 56 }}>
          WHAT WE'RE BUILDING TOGETHER
        </p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 48 }}>
          {pillars.map((p) => (
            <div key={p.title}>
              <div style={{ fontFamily: font.display, fontSize: 48, color: C.coral, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.espresso, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontFamily: font.body, fontSize: 15, color: C.taupe, lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PURPOSE ─────────────────────────────────────────────────────────────────

function Purpose() {
  return (
    <section style={{ background: C.bg, padding: "80px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 48, height: 1, background: C.sand, margin: "0 auto 40px" }} />
        <h2 style={{ fontFamily: font.display, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,40px)", color: C.espresso, lineHeight: 1.4, textAlign: "center", margin: 0 }}>
          FoundHer AI is the home base for women building businesses in the age of AI — the tools, the community, and the voice that says: she was always going to win.
        </h2>
      </div>
    </section>
  );
}

// ─── LIFESTYLE IMAGE ──────────────────────────────────────────────────────────

function LifestyleImage() {
  return (
    <section style={{ background: C.bg, padding: "0 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <img
          src="/foundher-lifestyle.jpg"
          alt="Women wearing FoundHer AI gear"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <p style={{ fontFamily: font.body, fontSize: 13, color: C.taupe, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", marginTop: 24 }}>
          WOMEN BUILDING IN THE AGE OF AI
        </p>
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
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <img
            src="/foundhers-club-badge.png"
            alt="FoundHers Club Badge"
            style={{ width: 120, height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: 24 }}>
          THE FOUNDHERS CLUB
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px,5vw,56px)", color: C.espresso, lineHeight: 1.1, textAlign: "center", marginBottom: 16 }}>
          Your people are assembling.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.taupe, textAlign: "center", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
          The FoundHers Club is an online community for women building businesses with AI. Co-working rooms. Founder stories. A members-only podcast. And the people who get it.
        </p>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 20, color: C.gold, textAlign: "center", marginBottom: 56 }}>
          Opens September 8th
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 780, margin: "0 auto" }}>

          {/* FOUNDING MEMBER */}
          <div style={{ background: "#FFFFFF", border: `2px solid ${C.gold}`, borderRadius: 0, padding: "40px 36px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.coral, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              FOUNDING MEMBER — ORIGINAL CLASS
            </div>
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>FOUNDING MEMBER</p>
            <p style={{ marginBottom: 0 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$38</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>+ $29/mo</span>
            </p>
            <div style={{ height: 1, background: C.sand, margin: "20px 0" }} />
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.espresso, marginBottom: 8 }}>For the woman who builds anyway.</h3>
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              You've shown up through the fear, the debt, and the 3am doubt. The $38 is your founding badge — and the hat that says you were here first. Then $29/mo to stay in the club.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ FoundHers Club hat — shipped to your door</li>
              <li>⚡ Founding Member status — locked in forever</li>
              <li>⚡ Community access September 8th</li>
              <li>⚡ Virtual co-working rooms</li>
              <li>⚡ Members-only founder podcast</li>
              <li>⚡ First access to Agent Series</li>
              <li>⚡ Your seat before anyone else</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession('price_1Tm7jzCps5fpuWPnjE142af7');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: C.coral, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              I'm a Founding Member — $38 + $29/mo
            </button>
          </div>

          {/* CLUB MEMBER */}
          <div style={{ background: C.cream, border: `1.5px solid ${C.sand}`, borderRadius: 0, padding: "40px 36px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              CLUB MEMBER
            </div>
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.taupe, marginBottom: 16 }}>CLUB MEMBER</p>
            <p style={{ marginBottom: 0 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$29</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>/mo</span>
            </p>
            <div style={{ height: 1, background: C.sand, margin: "20px 0" }} />
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              Full access to the FoundHers Club community, co-working rooms, and members-only podcast. Join after launch.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ Online community access</li>
              <li>⚡ Virtual co-working rooms</li>
              <li>⚡ Members-only founder podcast</li>
              <li>⚡ Monthly founder stories</li>
              <li>⚡ Summit early access & discounts</li>
            </ul>
            <a
              href="#foundhers-club"
              style={{ display: "block", width: "100%", textAlign: "center", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer", textDecoration: "none", boxSizing: "border-box" }}
            >
              Join the Club — $29/mo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LIZ BRYANT / WAITLIST ───────────────────────────────────────────────────

function LizSpotlight() {
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
    <section id="waitlist" style={{ background: C.plum, padding: "96px 24px", fontFamily: font.body, textAlign: "center" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>
          FOUNDER SPOTLIGHT
        </p>
        <h2 style={{ fontFamily: font.display, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(28px,3vw,40px)", color: "#FFFFFF", marginBottom: 48 }}>
          Follow the founders building right now.
        </h2>

        <video
          controls
          playsInline
          style={{ width: "100%", maxWidth: 680, display: "block", margin: "0 auto 32px", borderRadius: 0, border: "1px solid rgba(192,139,42,0.25)" }}
        >
          <source src="/liz-bryant.mp4" type="video/mp4" />
        </video>

        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 0, padding: "24px 32px", maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: "#FFFFFF", marginBottom: 4 }}>Liz Bryant</h3>
          <p style={{ fontFamily: font.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase", marginBottom: 12 }}>FOUNDER, LOCALS MARK</p>
          <a href="https://www.instagram.com/localsmarkco" target="_blank" rel="noopener noreferrer" style={{ fontFamily: font.body, fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Follow her journey → @localsmarkco
          </a>
        </div>

        <p style={{ fontFamily: font.body, fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 560, margin: "40px auto 40px" }}>
          Women building businesses in the age of AI — their journeys, their breakthroughs, their real talk. Subscribe for a front row seat.
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
              style={{ flex: 1, minWidth: 240, padding: "14px 20px", borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#FFFCF7", fontSize: 15, fontFamily: font.body, outline: "none" }}
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
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 24px",
        fontFamily: font.body,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
          <span style={{ color: C.sand }}>Found</span>
          <span style={{ color: C.gold }}>Her</span>
          <span style={{ color: C.sand }}> AI™</span>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: 28, lineHeight: 1.6 }}>
          Building AI ventures for the people everyone else is building past.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <a href="https://adaptz.ai" target="_blank" rel="noopener noreferrer" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>Adaptz.ai</a>
          <a href="mailto:hello@foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>Contact</a>
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
    <div style={{ fontFamily: font.body, background: C.bg }}>
      <Nav />
      <main>
        <Hero />
        <ThreePillars />
        <Purpose />
        <LifestyleImage />
        <FoundHersClub />
        <LizSpotlight />
      </main>
      <Footer />
    </div>
  );
}
