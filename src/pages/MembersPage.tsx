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
  { name: "The Stack", image: "/images/FH_navy-stack.png", image2: "/images/FH_terracotta-stack.png", copy: "The complete bracelet set. Every piece you need." },
  { name: "The Tote", image: "/images/FH_everyday-tote-product-shot.png", image2: "/images/FH_everyday-tote-lifestyle.png", copy: "Natural canvas. Navy panels. Built to carry it all." },
  { name: "The Beach Towel", image: "/images/FH_beach-towel-medley-terracotta.png", image2: "/images/FH_navy-towel-medley.png", imageWidths: ["65%", "35%"] as const, imageHeight: 500, imageFit: "contain" as const, imageBg: "#F4F1EA", copy: "The brand at the beach." },
  { name: "The MacBook Sleeve", image: "/images/FH_macbook-sleeves-shoot.png", copy: "Four colorways. One mark." },
  { name: "The Dog Bandana", image: "/images/FH_dog-bandana.png", image2: "/images/FH_bandana-lifestyle.png", imageHeight: 500, copy: "A girl and her dog." },
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
            <div key={p.name} style={{ background: C.white, overflow: "hidden", ...(p.name === "The Beach Towel" ? { gridColumn: "1 / -1" } : {}) }}>
              {p.image2 ? (
                <div style={{ display: "flex", width: "100%", height: p.imageHeight ?? 400, gap: 8 }}>
                  <img src={p.image} alt={`${p.name} product`} style={{ flex: `1 1 ${p.imageWidths?.[0] ?? "50%"}`, minWidth: 0, height: "100%", objectFit: p.imageFit ?? "cover", objectPosition: "center", display: "block", backgroundColor: p.imageBg }} />
                  {p.name === "The Beach Towel" ? (
                    <div style={{ flex: `1 1 ${p.imageWidths?.[1] ?? "50%"}`, minWidth: 0, height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                      <div style={{ flex: 1, backgroundColor: C.coral }} />
                      <div style={{ flex: 1, backgroundColor: C.navy }} />
                      <img src={p.image2} alt={`${p.name} lifestyle`} style={{ flex: 2, minHeight: 0, width: "100%", objectFit: "contain", objectPosition: "center", display: "block", backgroundColor: "#F4F1EA" }} />
                    </div>
                  ) : (
                    <img src={p.image2} alt={`${p.name} lifestyle`} style={{ flex: `1 1 ${p.imageWidths?.[1] ?? "50%"}`, minWidth: 0, height: "100%", objectFit: p.imageFit ?? "cover", objectPosition: "center", display: "block", backgroundColor: p.imageBg }} />
                  )}
                </div>
              ) : (
                <img src={p.image} alt={p.name} style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }} />
              )}
              <div style={{ padding: "32px 32px 36px" }}>
                <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: 28, color: C.navy, marginBottom: 10 }}>{p.name}</h3>
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
