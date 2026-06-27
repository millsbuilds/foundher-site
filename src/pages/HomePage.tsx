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

  sand: "#EDE4D8",
};

const font = {
  display: "'Fraunces', serif",
  body: "'Plus Jakarta Sans', sans-serif",
};

const Divider = () => <hr style={{ border: "none", borderTop: `1px solid ${C.sand}`, margin: 0 }} />;

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
              style={{ background: C.espresso, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font.body }}
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
            style={{ background: C.espresso, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "12px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, textAlign: "center", marginTop: 8 }}
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
      <section style={{ background: C.cream, fontFamily: font.body }}>
        <div style={{ overflow: "hidden" }}>
          <img src="/images/mills-hero.jpg" alt="Mills Gardner, Founder of FoundHer AI" style={{ width: "100%", height: 400, objectFit: "cover", objectPosition: "center top", display: "block" }} />
          <div style={{ background: C.espresso, padding: "12px 20px", textAlign: "center" }}>
            <p style={{ fontFamily: font.body, fontSize: 13, fontWeight: 600, color: C.gold, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>Mills Gardner</p>
            <p style={{ fontFamily: font.body, fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "4px 0 0" }}>Founder</p>
          </div>
        </div>
        <div style={{ padding: "48px 24px 64px" }}>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Build.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Launch.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Scale.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.gold, display: "block" }}>Together.</span>
          <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 180, height: 180, display: "block", margin: "16px 0 0 0" }} />
          <div style={{ width: 48, height: 2, background: C.gold, margin: "20px 0" }} />
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}>
            The FoundHers Club is where women who build with AI come together as colleagues, not competitors — to find their people, their tools, and their edge.
          </p>
          <button onClick={() => scrollTo("foundhers-club")} style={{ width: "100%", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "14px 28px", border: "none", borderRadius: 0, cursor: "pointer" }}>
            Join the FoundHers Club →
          </button>
          <p style={{ fontFamily: font.body, fontSize: 12, color: C.taupe, letterSpacing: "0.03em", marginTop: 20 }}>
            ⚡ The membership site goes live September 8th · Founding Member spots are limited
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ display: "flex", minHeight: "80vh", fontFamily: font.body }}>
      <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
        <img src="/images/mills-hero.jpg" alt="Mills Gardner, Founder of FoundHer AI" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", maxHeight: 700 }} />
        <div style={{ background: C.espresso, padding: "12px 20px", textAlign: "center" }}>
          <p style={{ fontFamily: font.body, fontSize: 13, fontWeight: 600, color: C.gold, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>Mills Gardner</p>
          <p style={{ fontFamily: font.body, fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "4px 0 0" }}>Founder</p>
        </div>
      </div>
      <div style={{ flex: 1, background: C.cream, display: "flex", alignItems: "center", padding: "80px 56px" }}>
        <div>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Build.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Launch.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.espresso, display: "block" }}>Scale.</span>
          <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: C.gold, display: "block" }}>Together.</span>
          <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 180, height: 180, display: "block", margin: "16px 0 0 0" }} />
          <div style={{ width: 48, height: 2, background: C.gold, margin: "20px 0" }} />
          <p style={{ fontFamily: font.body, fontSize: 17, color: C.taupe, lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}>
            The FoundHers Club is where women who build with AI come together as colleagues, not competitors — to find their people, their tools, and their edge.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("foundhers-club")} style={{ background: C.espresso, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: font.body, whiteSpace: "nowrap" }}>
              Join the FoundHers Club →
            </button>
            <button onClick={() => scrollTo("foundhers-club")} style={{ background: "transparent", color: C.espresso, border: `1.5px solid ${C.espresso}`, borderRadius: 0, padding: "14px 24px", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: font.body, whiteSpace: "nowrap" }}>
              How It Works
            </button>
          </div>
          <p style={{ fontFamily: font.body, fontSize: 12, color: C.taupe, marginTop: 20, letterSpacing: "0.03em" }}>
            ⚡ The membership site goes live September 8th · Founding Member spots are limited
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
    { icon: "⚡", title: "Online Community", body: "Virtual co-working rooms, live sessions, and a private community of women who are building right now. Share tips, tools, and apps that actually work. Show up, stay accountable, move forward." },
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
          FoundHers Club is the home base for women building businesses in the age of AI — the tools, the community, and the voice that says: she was always going to win.
        </h2>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.taupe, lineHeight: 1.8, maxWidth: 660, margin: "16px auto 0", textAlign: "center" }}>
          AI gave women founders something extraordinary — the freedom to build alone. No team required. No office lease. No permission. Just a laptop and a dream.
        </p>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.taupe, lineHeight: 1.8, maxWidth: 660, margin: "16px auto 0", textAlign: "center" }}>
          But freedom and isolation can look a lot alike. And women? We're wired for connection. We think out loud. We collaborate. We lift each other up.
        </p>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.taupe, lineHeight: 1.8, maxWidth: 660, margin: "16px auto 0", textAlign: "center" }}>
          The FoundHers Club closes that gap. Here, you get the best of both worlds — the independence AI makes possible, and the community that makes it sustainable. Connected, supported, and building alongside women who actually get it.
        </p>
      </div>
    </section>
  );
}

// ─── MEMBERSHIP BENEFITS ─────────────────────────────────────────────────────

function MembershipBenefits() {
  return (
    <section style={{ background: C.cream, padding: "80px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
          <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 140, height: 140, flexShrink: 0 }} />
          <div>
            <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>WHAT YOU GET</p>
            <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.espresso, lineHeight: 1.1, margin: 0 }}>Membership Benefits</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {[
            { title: "Online Community", body: "A private community of women building businesses with AI. Show up, get support, move forward — together." },
            { title: "Monthly Tee Drops", body: "A new FoundHer AI tee shipped to your door every month — part of the Merch Club. Wear the brand. Own the identity." },
            { title: "Members-Only Podcast", body: "Founder stories, AI tools, real talk — a weekly podcast exclusively for FoundHers Club members." },
            { title: "Virtual Co-Working Rooms", body: "Drop in, get focused, get things done. Alongside other women who are building right now." },
            { title: "AI Agents & Tools", body: "Exclusive access to AI agents built for women-owned businesses. Run your business without a team." },
            { title: "Annual FoundHers Summit", body: "Early access and discounts to our annual gathering of women founders. The room you want to be in." },
          ].map((benefit) => (
            <div key={benefit.title} style={{ borderTop: `2px solid ${C.gold}`, paddingTop: 24 }}>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.espresso, marginBottom: 10 }}>{benefit.title}</h3>
              <p style={{ fontSize: 15, color: C.taupe, lineHeight: 1.7, margin: 0 }}>{benefit.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button
            onClick={() => document.getElementById("foundhers-club")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: C.espresso, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "16px 40px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: font.body }}
          >
            See Membership Options →
          </button>
        </div>
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
    <section id="foundhers-club" style={{ background: C.bg, padding: "64px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 40, marginBottom: 40, flexWrap: "wrap" }}>
          <img
            src="/images/fh-seal.png"
            alt="FoundHers Club Badge"
            style={{ width: 220, height: "auto", flexShrink: 0 }}
          />
          <div style={{ textAlign: "left" }}>
            <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12, fontFamily: font.body }}>THE FOUNDHERS CLUB</p>
            <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: C.espresso, lineHeight: 1.1, margin: 0 }}>Your people are assembling.</h2>
          </div>
        </div>
        <p style={{ fontFamily: font.body, fontSize: 18, color: C.taupe, textAlign: "center", maxWidth: 620, margin: "0 auto 48px", lineHeight: 1.7 }}>
          The FoundHers Club is where women who build businesses come to stay in the game. Monthly merch drops. A members-only podcast. Virtual co-working rooms. Our annual FoundHers Summit. And a community of women who actually get it.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto 48px", maxWidth: 500, fontFamily: font.body, fontSize: 16, color: C.taupe, lineHeight: 2.2, textAlign: "left", display: "inline-block" }}>
          <li>⚡ Private online community of women AI founders</li>
          <li>⚡ Members-only founder podcast — weekly</li>
          <li>⚡ Virtual co-working rooms — show up and build</li>
          <li>⚡ Monthly tee drops — with Merch Club membership</li>
          <li>⚡ Annual FoundHers Summit — early access & discounts</li>
          <li>⚡ AI tools & agents — built for members</li>
        </ul>

        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 20, color: C.gold, textAlign: "center", marginBottom: 0 }}>
          Opens September 8th
        </p>
      </div>
    </section>
  );
}

// ─── FOUNDHERS CLUB TIERS ────────────────────────────────────────────────────

function FoundHersClubTiers() {
  return (
    <section style={{ background: C.bg, padding: "64px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>

          {/* FOUNDHERS CLUB */}
          <div style={{ background: C.cream, border: `1.5px solid ${C.sand}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              CLUB MEMBER
            </div>
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.taupe, marginBottom: 16 }}>FOUNDHERS CLUB</p>
            <p style={{ marginBottom: 0 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$9</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>/mo</span>
            </p>
            <div style={{ height: 1, background: C.sand, margin: "20px 0" }} />
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              Your home base. Community, co-working rooms, founder podcast, and AI tools — all for less than a coffee a week.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ Private online community</li>
              <li>⚡ Virtual co-working rooms</li>
              <li>⚡ Members-only founder podcast — weekly</li>
              <li>⚡ AI tools & agents built for founders</li>
              <li>⚡ Share tips, apps & what's working</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession('price_1TmeqtCps5fpuWPnvPKjRaEc');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              Join the Club — $9/mo
            </button>
          </div>

          {/* MERCH CLUB */}
          <div style={{ background: "#FFFFFF", border: `2px solid ${C.gold}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.coral, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              MOST POPULAR
            </div>
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>MERCH CLUB</p>
            <p style={{ marginBottom: 0 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$29</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>/mo</span>
            </p>
            <div style={{ height: 1, background: C.sand, margin: "20px 0" }} />
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              Everything in the FoundHers Club plus a brand new FoundHer AI tee shipped to your door every month. Wear the movement.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ Everything in FoundHers Club</li>
              <li>⚡ Monthly tee drop — new design every month</li>
              <li>⚡ Shipped via our Fourthwall store</li>
              <li>⚡ You pay shipping — we handle everything else</li>
              <li>⚡ First access to limited drops & collab designs</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession('price_1TmeuaCps5fpuWPnBxvpfliN');
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              Join the Merch Club — $29/mo
            </button>
          </div>

          {/* POWER CIRCLE + CLUB */}
          <div style={{ background: "#FFFFFF", border: `2px solid ${C.gold}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              POWER CIRCLE
            </div>
            <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 60, height: 60, display: "block", marginBottom: 12 }} />
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>POWER CIRCLE + CLUB</p>
            <p style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$49</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>one-time</span>
            </p>
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, marginBottom: 0 }}>+ $9/mo</p>
            <div style={{ height: 2, background: C.gold, margin: "20px 0" }} />
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.espresso, marginBottom: 8 }}>For the woman who builds anyway.</h3>
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              You've shown up through the fear, the debt, and the 3am doubt. The $38 is your founding badge — and the hat that says you were here first. Then just $9/mo to stay in the club.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ FoundHers Club hat — wear it like the badge it is</li>
              <li>⚡ Founding Member status — locked in forever</li>
              <li>⚡ Locked in at $9/mo — never pays more</li>
              <li>⚡ Community access September 8th</li>
              <li>⚡ Everything in FoundHers Club</li>
              <li>⚡ First access to AI agents</li>
              <li>⚡ Your seat before anyone else</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession(['price_1TmhCgCps5fpuWPn09VGDReE', 'price_1TmhBMCps5fpuWPn6ZkVgsdO']);
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              Join the Power Circle — $49 + $9/mo
            </button>
          </div>

          {/* POWER CIRCLE + MERCH */}
          <div style={{ background: "#FFFFFF", border: `2px solid ${C.gold}`, borderRadius: 0, padding: "40px 32px", textAlign: "left", position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.gold, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", padding: "5px 20px", borderRadius: 0, whiteSpace: "nowrap" }}>
              POWER CIRCLE
            </div>
            <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 60, height: 60, display: "block", marginBottom: 12 }} />
            <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>POWER CIRCLE + MERCH</p>
            <p style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.espresso }}>$49</span>
              <span style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, marginLeft: 8 }}>one-time</span>
            </p>
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, marginBottom: 0 }}>+ $29/mo</p>
            <div style={{ height: 2, background: C.gold, margin: "20px 0" }} />
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.espresso, marginBottom: 8 }}>For the woman who builds anyway.</h3>
            <p style={{ fontFamily: font.body, fontSize: 14, color: C.taupe, fontStyle: "italic", lineHeight: 1.6, marginBottom: 24 }}>
              Everything in the Merch Club — plus Founding Member status, the hat, and first access to everything we build. The full package.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", fontFamily: font.body, fontSize: 14, color: C.taupe, lineHeight: 2 }}>
              <li>⚡ FoundHers Club hat — wear it like the badge it is</li>
              <li>⚡ Founding Member status — locked in forever</li>
              <li>⚡ Everything in Merch Club</li>
              <li>⚡ Monthly tee drop included</li>
              <li>⚡ Community access September 8th</li>
              <li>⚡ First access to AI agents</li>
              <li>⚡ Your seat before anyone else</li>
            </ul>
            <button
              onClick={async () => {
                const { url } = await createCheckoutSession(['price_1TmhSvCps5fpuWPnADdNnYfZ', 'price_1TmhSvCps5fpuWPndBVhyvBd']);
                if (url) window.location.href = url;
              }}
              style={{ display: "block", width: "100%", textAlign: "center", background: C.espresso, color: "#FFFFFF", fontFamily: font.body, fontWeight: 600, fontSize: 15, padding: "16px 24px", border: "none", borderRadius: 0, cursor: "pointer" }}
            >
              Join the Power Circle — $49 + $29/mo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AI AGENTS ────────────────────────────────────────────────────────────────

function AIAgents() {
  return (
    <section style={{ background: C.espresso, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            MEMBER TOOLS
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)", color: "#FFFCF7", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Run a million-dollar business.<br />Without a single employee.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            FoundHers Club members get exclusive access to AI agents built specifically for women-owned businesses. These aren't generic tools — they're built for the way we actually work.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { icon: "⚡", title: "The Launch Agent", body: "Takes your idea from concept to live product. Competitor research, pricing strategy, launch copy — done." },
            { icon: "📣", title: "The Marketing Agent", body: "Writes your emails, social posts, and ad copy. Knows your brand voice. Runs while you sleep." },
            { icon: "💰", title: "The Revenue Agent", body: "Identifies your highest-leverage revenue moves. Upsell strategies, pricing optimization, retention plays." },
            { icon: "🛠", title: "The Operations Agent", body: "Your virtual COO. Manages workflows, vendor comms, and the 100 things that eat your day." },
            { icon: "📊", title: "The Analytics Agent", body: "Turns your numbers into decisions. Know what's working, what's not, and exactly what to do next." },
            { icon: "🎙", title: "The Content Agent", body: "Podcasts, blogs, newsletters — a full content engine that sounds like you and never runs out of ideas." },
          ].map((agent) => (
            <div key={agent.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "32px 28px" }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{agent.icon}</div>
              <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: "#FFFCF7", marginBottom: 12 }}>{agent.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{agent.body}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 48, fontFamily: font.display, fontStyle: "italic", fontSize: 18, color: C.gold }}>
          Available exclusively to FoundHers Club members. First access to Founding Members.
        </p>
      </div>
    </section>
  );
}

// ─── LIZ BRYANT SPOTLIGHT ────────────────────────────────────────────────────

function LizSpotlight() {
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
    <section style={{ background: C.cream, padding: "96px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: 56, flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>

        {/* LEFT: Video */}
        <div style={{ flex: isMobile ? "none" : "0 0 340px", width: isMobile ? "100%" : undefined, maxWidth: "100%" }}>
          <video
            controls
            playsInline
            style={{ width: "100%", display: "block", borderRadius: 0, border: `1px solid ${C.sand}` }}
          >
            <source src="/liz-bryant.mp4" type="video/mp4" />
          </video>
        </div>

        {/* RIGHT: Byline + copy */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            FOUNDER SPOTLIGHT
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(22px, 2.5vw, 32px)", color: C.espresso, lineHeight: 1.3, marginBottom: 24 }}>
            Follow the founders building right now.
          </h2>
          <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 22, color: C.espresso, marginBottom: 4 }}>Liz Bryant</h3>
          <p style={{ fontFamily: font.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>
            Founder, Locals Mark
          </p>
          <p style={{ fontFamily: font.body, fontSize: 15, color: C.taupe, lineHeight: 1.75, marginBottom: 24 }}>
            Women building businesses in the age of AI — their journeys, their breakthroughs, their real talk. A front row seat to what it actually looks like.
          </p>
          <a
            href="https://www.instagram.com/localsmarkco"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: font.body, fontSize: 14, color: C.gold, textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}
          >
            Follow her journey → @localsmarkco
          </a>
        </div>

      </div>
    </section>
  );
}

// ─── MILLS ABOUT ─────────────────────────────────────────────────────────────

function MillsAbout() {
  return (
    <section style={{ background: C.cream, padding: "80px 24px", fontFamily: font.body }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>FROM THE FOUNDER</p>
        <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.espresso, lineHeight: 1.2, marginBottom: 32, letterSpacing: "-0.02em" }}>
          You have the dream.<br />We've got the roadmap.
        </h2>

        <div style={{ overflow: "hidden" }}>
          <div style={{ float: "left", marginRight: 40, marginBottom: 24, width: 340 }}>
            <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 80, height: 80, display: "block", marginBottom: 16 }} />
            <img
              src="/images/mills-boat.jpg"
              alt="Mills Gardner, Founder of FoundHer AI"
              style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>

          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>At 58, I didn't choose to retire. My last pitch ended with a VC group telling me I was too old to be a founder. No funding meant no team, no engineers, no way forward. So I walked away.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>For 12 years, I was done.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>Then AI arrived — and everything changed. Suddenly a founder didn't need a team of engineers, office space, or equipment. They just needed to master the tools. No VC gatekeepers deciding who was too old, too young, or too anything. No proof of concept runway. Just a laptop, a vision, and the willingness to learn.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>Hello, unretirement.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>I've won big. I've lost even bigger. That's the founder story nobody tells you about. At 71, I can tell you this: every barrier that stood in the way of generations of female founders is gone. The playing field is level. The rules have finally changed.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>In the past month, I built a business from scratch using AI. It's already scaling. No team. No office. No permission. Just a laptop and everything I've learned across five decades of building.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>I'm not here to run the show. I'm here to open the door. This is for the next generation of women who are ready to step through it — and I'll be right there with you, building alongside you.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20 }}>There is room in this world for every one of us to succeed in our dreams. Here, you are among women helping women. No competition. Just momentum.</p>
          <p style={{ fontSize: 16, color: C.taupe, lineHeight: 1.8, marginBottom: 20, borderTop: `1px solid ${C.sand}`, paddingTop: 24 }}>FoundHer AI, PBC is a Public Benefit Corporation — which means we're legally structured to put mission before profit. The membership fees keep the lights on and the tools running. Everything else goes back into building more resources for the next generation of women founders. This isn't a business built to make me rich. It's built to make you unstoppable.</p>
          <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 18, color: C.espresso, lineHeight: 1.6, marginBottom: 8 }}>"It's about time women were rewarded for being the natural builders we've always been."</p>
          <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 20, color: C.gold, lineHeight: 1.6, marginBottom: 8 }}>"Dream big. Dream bigger than you ever thought possible."</p>
          <p style={{ fontSize: 14, color: C.gold, fontWeight: 600, letterSpacing: "0.05em" }}>— Mills Gardner, Founder, FoundHer AI, PBC</p>
        </div>

      </div>
    </section>
  );
}

// ─── LIFESTYLE IMAGE ──────────────────────────────────────────────────────────

function LifestyleImage() {
  return (
    <section style={{ background: C.bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 56, flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
          <img
            src="/foundher-lifestyle.jpg"
            alt="Women wearing FoundHer AI gear"
            style={{ width: "100%", height: 480, objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <img src="/images/fh-seal.png" alt="FoundHers Club" style={{ width: 140, height: 140, display: "block", marginBottom: 16 }} />
          <p style={{ color: C.gold, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: font.body }}>
            THE COMMUNITY
          </p>
          <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.espresso, lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.02em" }}>
            FoundHers are everywhere. Join the club.
          </h2>
          <p style={{ fontFamily: font.body, fontSize: 16, color: C.taupe, lineHeight: 1.75, marginBottom: 24 }}>
            From the home office to the coffee shop to the kitchen table at midnight — women who build are showing up. In the hats. In the tees. In the community. In the work. Join the women who stopped waiting and started building.
          </p>
          <button
            onClick={() => document.getElementById("foundhers-club")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: C.espresso, color: "#FFFFFF", border: "none", borderRadius: 0, padding: "14px 28px", fontFamily: font.body, fontWeight: 600, fontSize: 15, cursor: "pointer" }}
          >
            Join Us →
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
          Build. Launch. Scale. Together.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
          <a href="https://foundherai.ai" style={{ fontFamily: font.body, color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none" }}>FoundHer AI</a>
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
        <Divider />
        <ThreePillars />
        <Divider />
        <Purpose />
        <Divider />
        <MembershipBenefits />
        <Divider />
        <LizSpotlight />
        <Divider />
        <AIAgents />
        <Divider />
        <FoundHersClub />
        <Divider />
        <MillsAbout />
        <Divider />
        <FoundHersClubTiers />
        <Divider />
        <LifestyleImage />
      </main>
      <Footer />
    </div>
  );
}
