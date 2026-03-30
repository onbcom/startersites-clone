import Image from "next/image";

interface Template {
  name: string;
  price: number;
  category: string;
  slug: string;
  image: string;
}

const templates: Template[] = [
  { name: "Designo", price: 39, category: "Agency Template", slug: "designo", image: "/images/template-designo.png" },
  { name: "Vellox", price: 39, category: "Agency Template", slug: "vellox", image: "/images/template-vellox.png" },
  { name: "Haven Estate", price: 49, category: "Real Estate Template", slug: "haven-estate", image: "/images/template-haven-estate.png" },
  { name: "AI Chatbot", price: 59, category: "AI Template", slug: "ai-chatbot", image: "/images/template-ai-chatbot.png" },
  { name: "William Thompson", price: 49, category: "Photography Template", slug: "william-thompson", image: "/images/template-william-thompson.png" },
  { name: "Educore", price: 29, category: "Online Course Template", slug: "educore", image: "/images/template-educore.png" },
];

const avatars = [
  { src: "/images/avatar-jake.jpg", alt: "Jake" },
  { src: "/images/avatar-emily.jpg", alt: "Emily" },
  { src: "/images/avatar-ryan.jpg", alt: "Ryan" },
  { src: "/images/avatar-sophia.jpg", alt: "Sophia" },
  { src: "/images/avatar-brandon.jpg", alt: "Brandon" },
];

function TemplateCard({ template }: { template: Template }) {
  return (
    <a
      href={`/templates/${template.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {/* Image area */}
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          height: "401.602px",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <Image
          src={template.image}
          alt={template.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 427px"
        />
      </div>

      {/* Info area */}
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Row 1: name + price */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            {template.name}
          </p>
          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            ${template.price}
          </p>
        </div>

        {/* Row 2: category + framer badge */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Switzer', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgb(112,112,112)",
              margin: 0,
            }}
          >
            {template.category}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Image
              src="/images/framerstore-icon.png"
              width={32}
              height={32}
              alt="Framer"
              style={{ borderRadius: "8px" }}
            />
            <Image
              src="/images/avatar-jake.jpg"
              width={32}
              height={32}
              alt="Creator"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedTemplates() {
  return (
    <section style={{ background: "rgb(246,246,246)" }}>
      <div
        style={{
          width: "1440px",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            data-reveal
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: "48px",
              fontWeight: 700,
              color: "rgb(8,8,8)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Featured Framer templates
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {/* Stacked avatars */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              {avatars.map((avatar, index) => (
                <Image
                  key={avatar.alt}
                  src={avatar.src}
                  width={34}
                  height={34}
                  alt={avatar.alt}
                  style={{
                    borderRadius: "50%",
                    marginLeft: index === 0 ? "0px" : "-8px",
                    display: "block",
                    border: "2px solid rgb(246,246,246)",
                  }}
                />
              ))}
            </div>

            {/* Rating + text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }}>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: "14px", fontWeight: 600, color: "rgb(8,8,8)" }}>
                  4.9/<span style={{ color: "rgb(4,72,244)" }}>5</span>
                </span>
                <span style={{ color: "rgb(250,180,0)", fontSize: "12px", letterSpacing: "1px" }}>★★★★★</span>
              </div>
              <span style={{ fontFamily: "'Switzer', sans-serif", fontSize: "13px", fontWeight: 400, color: "rgb(112,112,112)" }}>
                Loved by 1000+ creators
              </span>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div
          className="featured-templates-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 530px)",
            gap: "20px",
            width: "1320px",
            height: "1080px",
          }}
        >
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .featured-templates-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            height: auto !important;
          }
        }
        @media (max-width: 640px) {
          .featured-templates-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
