import Image from "next/image";

const benefits = [
  {
    icon: "/images/brand-logo-1.svg",
    label: "Built for Framer creators",
    image: "/images/feature-mockup-1.png",
    width: 500,
  },
  {
    icon: "/images/brand-logo-2.svg",
    label: "Mobile-first templates",
    image: "/images/feature-mockup-2.png",
    width: 422,
  },
  {
    icon: "/images/brand-logo-3.svg",
    label: "Instant CMS integration",
    image: "/images/feature-mockup-3.png",
    width: 356,
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" style={{ background: "rgb(246,246,246)" }}>
      <div
        className="benefits-outer"
        style={{
          width: "1440px",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER ROW */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Left: heading */}
          <h2
            data-reveal
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            <span style={{ color: "rgb(8,8,8)" }}>Easily build sites with our </span>
            <span style={{ color: "rgb(4,72,244)" }}>templates</span>
          </h2>

          {/* Right: subtext */}
          <p
            style={{
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgb(112,112,112)",
              maxWidth: "360px",
              margin: 0,
              lineHeight: 1.6,
              flexShrink: 0,
            }}
          >
            No more website woes—just powerful solutions at your fingertips
          </p>
        </div>

        {/* BODY — BENEFIT CARDS */}
        <div
          className="benefits-cards"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "flex-end",
            width: "1320px",
            maxWidth: "100%",
            height: "565px",
          }}
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="benefit-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "white",
                borderRadius: "30px",
                overflow: "hidden",
                height: "565px",
                width: benefit.width,
                flexShrink: 0,
              }}
            >
              {/* Text area */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Icon */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={benefit.icon}
                  width={32}
                  height={32}
                  alt=""
                />
                {/* Label */}
                <p
                  style={{
                    fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgb(8,8,8)",
                    margin: 0,
                  }}
                >
                  {benefit.label}
                </p>
              </div>

              {/* Phone mockup image — fills remaining space */}
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <Image
                  src={benefit.image}
                  fill
                  alt=""
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .benefits-cards {
            flex-direction: column !important;
            height: auto !important;
            align-items: stretch !important;
          }
          .benefit-card {
            width: 100% !important;
            height: auto !important;
            max-height: 400px !important;
          }
        }
        @media (max-width: 640px) {
          .benefits-cards {
            gap: 16px !important;
          }
          .benefits-outer {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
