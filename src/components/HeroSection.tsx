import Image from "next/image";

const BRAND_LOGOS = [1, 2, 3, 4, 5] as const;

const NUMBER_SCALE = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
];

export default function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "737px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 0 40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
        className="hero-container"
      >
        {/* Badge row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
            fontSize: "13px",
            color: "rgb(112, 112, 112)",
          }}
        >
          <span>Template Featured in</span>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {BRAND_LOGOS.map((n) => (
              <Image
                key={n}
                src={`/images/brand-logo-${n}.svg`}
                alt=""
                width={80}
                height={24}
                style={{ height: "24px", width: "auto", opacity: 0.6 }}
              />
            ))}
          </div>
        </div>

        {/* Heading block */}
        <div className="hero-heading-block" style={{ display: "flex", flexDirection: "column" }}>
          {/* Line 1: "Building quality Framer" */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: "1.0",
              color: "rgb(8, 8, 8)",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Building quality Framer
          </h1>

          {/* Line 2: framer-icon inline + "templates for" */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Image
              src="/images/framer-icon.svg"
              width={57}
              height={57}
              alt=""
              className="rounded-lg"
              style={{ borderRadius: "10px", flexShrink: 0 }}
            />
            <h1
              className="hero-h1"
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "104px",
                fontWeight: 800,
                lineHeight: "1.0",
                color: "rgb(8, 8, 8)",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              templates for
            </h1>
          </div>

          {/* Line 3: hero-mockup thumbnail + "creators" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Image
              src="/images/hero-mockup.png"
              width={136}
              height={99}
              alt=""
              className="rounded-lg"
              style={{ borderRadius: "10px", flexShrink: 0 }}
            />
            <h1
              className="hero-h1"
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "104px",
                fontWeight: 800,
                lineHeight: "1.0",
                color: "rgb(8, 8, 8)",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              creators
            </h1>
          </div>

          {/* Line 4: "& founders." */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: "1.0",
              color: "rgb(8, 8, 8)",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            &amp; founders.
          </h1>
        </div>

        {/* CTA row */}
        <div
          className="hero-cta-row"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          {/* Browse Templates button */}
          <a
            href="#"
            style={{
              backgroundColor: "rgb(4, 72, 244)",
              color: "white",
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "-0.16px",
              padding: "16px 28px 16px 20px",
              height: "54px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Browse Templates
            <Image
              src="/images/icon-arrow.svg"
              width={16}
              height={16}
              alt=""
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Framerstore Features button (ghost) */}
          <a
            href="#"
            style={{
              backgroundColor: "rgba(0,0,0,0.04)",
              color: "rgb(8, 8, 8)",
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: "16px",
              fontWeight: 400,
              padding: "16px 20px",
              height: "54px",
              borderRadius: "9999px",
              border: "1px solid rgba(8,8,8,0.12)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Framerstore Features
          </a>
        </div>

        {/* Bottom stats row */}
        <div
          className="hero-stats-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: number scale */}
          <div
            className="hero-number-scale"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: "11px",
              color: "rgb(160, 160, 160)",
            }}
          >
            {NUMBER_SCALE.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>

          {/* Right: rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: "14px",
              color: "rgb(112, 112, 112)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src="/images/icon-star.svg"
                  width={14}
                  height={14}
                  alt=""
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontWeight: 700,
                color: "rgb(8, 8, 8)",
              }}
            >
              4.9/5
            </span>
            <span>Loved by 1000+ creators</span>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .hero-container {
            padding: 0 20px !important;
            gap: 24px !important;
          }
          .hero-h1 {
            font-size: 52px !important;
            line-height: 52px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .hero-number-scale {
            display: none !important;
          }
          .hero-stats-row {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
