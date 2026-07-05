
const C = {
  navy: "#1B3A6B",
  coral: "#C16044",
  cream: "#F4F1EA",
  white: "#FFFFFF",
};

const font = {
  display: "'Fraunces', serif",
  body: "'Plus Jakarta Sans', sans-serif",
};

const PRODUCTS = [
  { name: "The Stack", image: "/images/FH_arm_stack.png", copy: "Three pieces. One identity. Worn by women who build." },
  { name: "The Cuff", image: "/images/FH_boxed-logo-cuff.png", copy: "The signature piece. Gold, enamel, unmistakable." },
  { name: "The Tote", image: "/images/bracelet-editorial.jpg", copy: "Carry everything. Announce nothing. Let them wonder." },
  { name: "The Beach Towel", image: "/images/FH_Beach-towel-scene.png", copy: "Take the brand to the sand." },
  { name: "The MacBook Sleeve", image: "/images/macbook-sleeve-editorial.jpg", copy: "For the laptop she builds on." },
  { name: "The Canvas Pouch", image: "/images/phone-case-editorial.jpg", copy: "Small but deliberate. Like every move she makes." },
  { name: "The Dog Bandana", image: "/images/helmet-cover-editorial.jpg", copy: "Even her dog knows she means business." },
];

export default function MembersPage() {
  return (
    <div style={{ fontFamily: font.body }}>
      {/* Hero */}
      <section style={{ background: C.navy, padding: "120px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cream, marginBottom: 16 }}>
          FOUNDHERS ONLY
        </p>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px,5vw,56px)", color: C.cream, letterSpacing: "-0.02em", marginBottom: 16 }}>
          This is what's waiting for you.
        </h1>
        <p style={{ fontFamily: font.body, fontSize: 18, color: "rgba(244,241,234,0.7)", fontWeight: 300 }}>
          Available exclusively to FoundHers.
        </p>
      </section>

      {/* Product Grid */}
      <section style={{ background: C.cream, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 40 }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} style={{ background: C.white, overflow: "hidden" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "28px 28px 32px" }}>
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 24, color: C.navy, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontFamily: font.body, fontSize: 15, color: C.navy, lineHeight: 1.6, marginBottom: 20, fontWeight: 300 }}>{p.copy}</p>
                <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 14, color: C.coral, margin: 0 }}>Available to FoundHers.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
