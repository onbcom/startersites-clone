import Image from "next/image";

interface Template {
  name: string;
  price: number;
  category: string;
  image: string;
}

const templates: Template[] = [
  { name: "Designo", price: 39, category: "Agency Template", image: "/images/template-designo.png" },
  { name: "Vellox", price: 39, category: "Agency Template", image: "/images/template-vellox.png" },
  { name: "Haven Estate", price: 49, category: "Real Estate Template", image: "/images/template-haven-estate.png" },
  { name: "AI Chatbot", price: 59, category: "AI Template", image: "/images/template-ai-chatbot.png" },
  { name: "William Thompson", price: 49, category: "Photography Template", image: "/images/template-william-thompson.png" },
  { name: "Educore", price: 29, category: "Online Course Template", image: "/images/template-educore.png" },
];

function TemplateCard({ template }: { template: Template }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image area */}
      <div style={{ position: "relative", overflow: "hidden", height: "401px", flexShrink: 0 }}>
        <Image
          src={template.image}
          alt={template.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Info row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-onest)",
              fontSize: "22px",
              fontWeight: 600,
              color: "rgb(8, 8, 8)",
              lineHeight: "26.4px",
              margin: 0,
            }}
          >
            {template.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-onest)",
              fontSize: "18px",
              fontWeight: 500,
              color: "rgb(8, 8, 8)",
              lineHeight: "23.4px",
              margin: 0,
            }}
          >
            ${template.price}
          </p>
        </div>

        {/* Seller avatars */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/images/seller-avatar.jpg"
            alt="Seller"
            width={32}
            height={32}
            style={{ borderRadius: "50%" }}
          />
          <Image
            src="/images/framerstore-icon.png"
            alt="Framerstore"
            width={26}
            height={26}
          />
        </div>
      </div>

      {/* Category row */}
      <div style={{ padding: "0 20px 16px" }}>
        <p
          style={{
            fontFamily: "Switzer, sans-serif",
            fontSize: "14px",
            color: "rgb(112, 112, 112)",
            margin: 0,
          }}
        >
          {template.category}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedTemplates() {
  return (
    <section
      style={{
        backgroundColor: "rgb(246, 246, 246)",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Left: Multi-line heading */}
          <div>
            {["Featured", "Framer", "templates"].map((word) => (
              <span
                key={word}
                style={{
                  display: "block",
                  fontFamily: "var(--font-onest)",
                  fontSize: "80px",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  color: "rgb(8, 8, 8)",
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Right: Rating badge */}
          <div style={{ textAlign: "right", paddingBottom: "8px" }}>
            <p
              style={{
                fontFamily: "var(--font-onest)",
                fontSize: "18px",
                fontWeight: 700,
                color: "rgb(8, 8, 8)",
                margin: 0,
              }}
            >
              4.9/5{" "}
              <span style={{ color: "rgb(4, 72, 244)" }}>★★★★★</span>
            </p>
            <p
              style={{
                fontFamily: "Switzer, sans-serif",
                fontSize: "14px",
                color: "#707070",
                margin: "4px 0 0",
              }}
            >
              Loved by 1000+ creators
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "40px",
          }}
          className="featured-templates-grid"
        >
          {templates.map((template) => (
            <TemplateCard key={template.name} template={template} />
          ))}
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (max-width: 768px) {
          .featured-templates-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 390px) {
          .featured-templates-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
