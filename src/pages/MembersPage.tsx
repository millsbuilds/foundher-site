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
  { name: "The Stack", image: "/images/FH_arm_stack.png", copy: "The complete bracelet set. Every piece you need." },
  { name: "The Tote", image: "/images/bracelet-editorial.jpg", copy: "Natural canvas. Navy panels. Built to carry it all." },
  { name: "The Beach Towel", image: "/images/FH_Beach-towel-scene.png", copy: "The brand at the beach." },
  { name: "The MacBook Sleeve", image: "/images/macbook-sleeve-editorial.jpg", copy: "Four colorways. One mark." },
  { name: "The Canvas Pouch", image: "/images/phone-case-editorial.jpg", copy: "Comes with The Stack. Available separately." },
  { name: "The Dog Bandana", image: "/images/helmet-cover-editorial.jpg", copy: "Even your dog is a FoundHer." },
];

export default function MembersPage() {
  return (
    <div style={{ fontFamily: font.body }}>
      {/* Hero */}
      <section style={{ background: C.navy, padding: "120px 24px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: font.body, fontWeight: 600, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cream, marginBottom: 16 }}>
          THE SHOP
        </p>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(36px,5vw,56px)", color: C.cream, letterSpacing: "-0.02em", marginBottom: 16 }}>
          This is what's waiting for you.
        </h1>
        <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 18, color: C.cream, fontWeight: 400, opacity: 0.8 }}>
          Available exclusively to FoundHers. Purchase The Cuff to unlock.
        </p>
      </section>

      {/* Product Grid */}
      <section style={{ background: C.cream, padding: "80px 24px 120px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 48 }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} style={{ background: C.white, overflow: "hidden" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "32px 32px 36px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 28, color: C.navy, marginBottom: 10 }}>{p.name}</h3>
                <p style={{ fontFamily: font.body, fontSize: 16, color: C.navy, lineHeight: 1.6, marginBottom: 24, fontWeight: 300 }}>{p.copy}</p>
                <p style={{ fontFamily: font.display, fontStyle: "italic", fontSize: 15, color: C.coral, margin: 0 }}>Purchase The Cuff to unlock.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
