import Image from "next/image";

const CHECKLIST_ITEMS = ["Pick a template", "Customize it", "Launch"] as const;

const TEMPLATE_IMAGES = [
  { src: "/images/template-designo.png", alt: "Designo template" },
  { src: "/images/template-vellox.png", alt: "Vellox template" },
  { src: "/images/template-ai-chatbot.png", alt: "AI Chatbot template" },
] as const;

export default function FeatureSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "rgb(246, 246, 246)",
        padding: "80px 0",
      }}
    >
      <div
        className="feature-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* PART 1: Heading + Subtext */}
        <div
          className="feature-header-row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          {/* Left: large heading */}
          <div style={{ flex: "0 0 auto", maxWidth: "50%" }}>
            <h2
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "80px",
                fontWeight: 800,
                lineHeight: "1.0",
                color: "rgb(8, 8, 8)",
                margin: 0,
                letterSpacing: "-1px",
              }}
            >
              Fully
              <br />
              responsive
              <br />
              and
              <br />
              customizable
            </h2>
          </div>

          {/* Right: subtext */}
          <div
            style={{
              flex: "0 0 auto",
              maxWidth: "40%",
              paddingTop: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: "16px",
                color: "rgb(112, 112, 112)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              No more website woes—just powerful solutions at your fingertips
            </p>
          </div>
        </div>

        {/* PART 2: 3 Feature Cards */}
        <div
          className="feature-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {/* Card 1: Built with global standards */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Image
              src="/images/feature-icon-1.svg"
              alt=""
              width={40}
              height={40}
              style={{ display: "block", marginBottom: "8px" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.3",
                color: "rgb(8, 8, 8)",
                margin: 0,
              }}
            >
              Built with global standards
            </h3>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: "15px",
                color: "rgb(112, 112, 112)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Unlock brilliance—build your website the smart way.
            </p>
            <a
              href="#"
              style={{
                backgroundColor: "rgb(4, 72, 244)",
                color: "white",
                borderRadius: "9999px",
                padding: "12px 20px",
                fontSize: "15px",
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                display: "inline-flex",
                alignItems: "center",
                marginTop: "8px",
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              Browse Templates
            </a>
          </div>

          {/* Card 2: Scale up 2x faster */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Image
              src="/images/feature-icon-2.svg"
              alt=""
              width={40}
              height={40}
              style={{ display: "block", marginBottom: "8px" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.3",
                color: "rgb(8, 8, 8)",
                margin: 0,
              }}
            >
              Scale up 2x faster
            </h3>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: "15px",
                color: "rgb(112, 112, 112)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Unlock brilliance—build your website the smart way.
            </p>
          </div>

          {/* Card 3: Never leave Framer (blue) */}
          <div
            style={{
              backgroundColor: "rgb(4, 72, 244)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              color: "white",
            }}
          >
            <Image
              src="/images/framer-icon.svg"
              alt=""
              width={40}
              height={40}
              style={{ display: "block", marginBottom: "8px" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.3",
                color: "white",
                margin: 0,
              }}
            >
              Never leave Framer
            </h3>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Unlock brilliance — build
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {CHECKLIST_ITEMS.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "white",
                    fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  }}
                >
                  <span style={{ fontSize: "12px", lineHeight: "1" }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 3: Browse Strip */}
        <div
          className="feature-browse-strip"
          style={{
            backgroundColor: "rgb(26, 26, 26)",
            borderRadius: "20px",
            padding: "60px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Left: text + CTA */}
          <div style={{ flex: "1 1 auto", maxWidth: "400px" }}>
            <h2
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "42px",
                fontWeight: 700,
                color: "white",
                lineHeight: "1.1",
                margin: 0,
              }}
            >
              Browse from our quality templates
            </h2>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "16px",
                lineHeight: "1.6",
              }}
            >
              Unlock brilliance—build your website the smart way.
            </p>
            <a
              href="#"
              style={{
                backgroundColor: "white",
                color: "rgb(8, 8, 8)",
                borderRadius: "9999px",
                padding: "14px 28px",
                fontSize: "16px",
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Browse Templates
            </a>
          </div>

          {/* Right: template preview images */}
          <div
            className="feature-strip-images"
            style={{
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {TEMPLATE_IMAGES.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={200}
                height={140}
                style={{
                  width: "200px",
                  height: "140px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .feature-strip-images {
            flex-wrap: wrap !important;
          }
          .feature-strip-images img {
            width: 160px !important;
            height: 110px !important;
          }
        }
        @media (max-width: 767px) {
          .feature-container {
            padding: 0 20px !important;
            gap: 40px !important;
          }
          .feature-header-row {
            flex-direction: column !important;
          }
          .feature-header-row > div {
            max-width: 100% !important;
          }
          .feature-header-row h2 {
            font-size: 48px !important;
          }
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-browse-strip {
            flex-direction: column !important;
            padding: 40px 24px !important;
          }
          .feature-browse-strip > div:first-child {
            max-width: 100% !important;
          }
          .feature-strip-images {
            width: 100% !important;
            overflow-x: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
