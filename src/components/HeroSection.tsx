import Image from "next/image";

const AVATARS = [
  { src: "/images/avatar-jake.jpg", alt: "Jake" },
  { src: "/images/avatar-emily.jpg", alt: "Emily" },
  { src: "/images/avatar-ryan.jpg", alt: "Ryan" },
  { src: "/images/avatar-sophia.jpg", alt: "Sophia" },
  { src: "/images/avatar-brandon.jpg", alt: "Brandon" },
] as const;

const BRAND_LOGOS = [
  { src: "/images/brand-logo-1.svg", width: 132, height: 34 },
  { src: "/images/brand-logo-2.svg", width: 104, height: 31 },
  { src: "/images/brand-logo-3.svg", width: 87, height: 27 },
  { src: "/images/brand-logo-4.svg", width: 130, height: 28 },
  { src: "/images/brand-logo-5.svg", width: 135, height: 34 },
] as const;

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          width: 1440px;
          height: 737.203px;
          background: transparent;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 40px;
          position: relative;
        }
        .hero-main-content {
          width: 1440px;
          height: 737.203px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 60px;
          padding: 200px 60px 60px;
          position: relative;
          z-index: 1;
        }
        .hero-text-block {
          width: 1080px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .hero-badge-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
        }
        .hero-h1 {
          font-family: 'Onest', sans-serif;
          font-size: 104px;
          font-weight: 800;
          color: rgb(8, 8, 8);
          letter-spacing: -4.16px;
          line-height: 104px;
          margin: 0;
        }
        .hero-cta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .hero-marquee-row {
          width: 1320px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }
        .hero-loved-by {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
        }
        .hero-avatar-stack {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
        }
        @media (max-width: 1024px) {
          .hero-section {
            width: 100%;
            height: auto;
          }
          .hero-main-content {
            width: 100%;
            height: auto;
            padding: 160px 32px 60px;
          }
          .hero-text-block {
            width: 100%;
          }
          .hero-h1 {
            font-size: 60px;
            line-height: 60px;
            letter-spacing: -2.4px;
          }
          .hero-marquee-row {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
        }
        @media (max-width: 640px) {
          .hero-main-content {
            padding: 120px 20px 40px;
          }
          .hero-h1 {
            font-size: 40px;
            line-height: 40px;
            letter-spacing: -1.6px;
          }
          .hero-cta-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Absolutely positioned hero mockup image */}
        <Image
          src="/images/hero-mockup.png"
          alt=""
          width={900}
          height={737}
          priority
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "auto",
            height: "100%",
            objectFit: "cover",
            opacity: 0.9,
          }}
        />

        {/* Main content block */}
        <div className="hero-main-content">
          {/* TEXT BLOCK */}
          <div className="hero-text-block">
            {/* Badge row */}
            <div className="hero-badge-row">
              <Image
                src="/images/framer-icon.svg"
                width={57}
                height={57}
                alt="Framer"
              />
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "rgb(112, 112, 112)",
                  letterSpacing: "-0.24px",
                  lineHeight: "19.2px",
                  margin: 0,
                }}
              >
                Template Featured in
              </p>
            </div>

            {/* Heading */}
            <h1 className="hero-h1">
              Building quality Framer templates for creators &amp; founders.
            </h1>

            {/* CTA buttons row */}
            <div className="hero-cta-row">
              {/* Primary button */}
              <a
                href="/templates"
                style={{
                  backgroundColor: "rgb(4, 72, 244)",
                  color: "white",
                  borderRadius: "40px",
                  padding: "16px 28px 16px 20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                  overflow: "hidden",
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Browse Templates
                <Image
                  src="/images/icon-arrow.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </a>

              {/* Secondary button */}
              <a
                href="#feature"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(8, 8, 8)",
                  borderRadius: "40px",
                  padding: "16px 28px 16px 20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                  overflow: "hidden",
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Framerstore Features
              </a>
            </div>
          </div>

          {/* BRAND MARQUEE ROW */}
          <div className="hero-marquee-row">
            {/* Left side: loved-by avatars */}
            <div className="hero-loved-by">
              <div className="hero-avatar-stack">
                {AVATARS.map((avatar) => (
                  <Image
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={34}
                    height={34}
                    style={{
                      borderRadius: "50%",
                      width: "34px",
                      height: "34px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#707070",
                  margin: 0,
                }}
              >
                5 Loved by
              </p>
            </div>

            {/* Right side: marquee of brand logos */}
            <div
              className="marquee-container"
              style={{ overflow: "hidden", display: "flex", flexDirection: "row" }}
            >
              <div
                className="marquee-track"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "60px",
                  animation: "marquee 20s linear infinite",
                  width: "max-content",
                }}
              >
                {/* First set */}
                {BRAND_LOGOS.map((logo) => (
                  <Image
                    key={`a-${logo.src}`}
                    src={logo.src}
                    alt=""
                    width={logo.width}
                    height={logo.height}
                    style={{ flexShrink: 0 }}
                  />
                ))}
                {/* Duplicate for infinite scroll */}
                {BRAND_LOGOS.map((logo) => (
                  <Image
                    key={`b-${logo.src}`}
                    src={logo.src}
                    alt=""
                    width={logo.width}
                    height={logo.height}
                    style={{ flexShrink: 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
