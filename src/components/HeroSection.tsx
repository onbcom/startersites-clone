import Image from "next/image";

const BRAND_LOGOS = [
  { src: "/images/brand-logo-1.svg", alt: "Brand", width: 87, height: 27 },
  { src: "/images/brand-logo-2.svg", alt: "Brand", width: 82, height: 26 },
  { src: "/images/brand-logo-3.svg", alt: "Brand", width: 74, height: 23 },
  { src: "/images/brand-logo-4.svg", alt: "Brand", width: 87, height: 27 },
  { src: "/images/brand-logo-5.svg", alt: "Brand", width: 87, height: 27 },
] as const;

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          height: 737px;
          background: transparent;
          overflow: hidden;
          position: relative;
        }
        .hero-inner {
          width: 100%;
          height: 737px;
          padding: 100px 60px 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 32px;
          position: relative;
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
          line-height: 1.0;
          margin: 0;
          max-width: 1080px;
        }
        .hero-float-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0;
          position: relative;
          height: 110px;
        }
        .hero-float-left {
          position: absolute;
          left: 0;
          transform: rotate(3deg);
          width: 108px;
          height: 104px;
          flex-shrink: 0;
        }
        .hero-float-right {
          position: absolute;
          left: 779px;
          transform: rotate(-3deg);
          width: 136px;
          height: 100px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
        }
        .hero-cta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .hero-bottom-row {
          position: absolute;
          bottom: 60px;
          left: 60px;
          right: 60px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        }
        .marquee-wrap {
          overflow: hidden;
          display: flex;
          max-width: 700px;
        }
        @media (max-width: 1024px) {
          .hero-section { height: auto; }
          .hero-inner { padding: 80px 32px 60px; height: auto; }
          .hero-h1 { font-size: 60px; letter-spacing: -2.4px; }
          .hero-float-row { display: none; }
          .hero-bottom-row { position: static; margin-top: 32px; justify-content: flex-start; }
        }
        @media (max-width: 640px) {
          .hero-inner { padding: 80px 20px 40px; }
          .hero-h1 { font-size: 40px; letter-spacing: -1.6px; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-inner">
          {/* Badge */}
          <div className="hero-badge-row">
            <Image src="/images/framer-icon.svg" width={24} height={24} alt="Framer" />
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              color: "rgb(112, 112, 112)",
              letterSpacing: "-0.24px",
              margin: 0,
            }}>
              Template Featured in
            </p>
          </div>

          {/* Heading */}
          <h1 className="hero-h1">
            Building quality Framer templates for creators &amp; founders.
          </h1>

          {/* Floating decorative images */}
          <div className="hero-float-row">
            <div className="hero-float-left">
              <Image
                src="/images/hero-float-framer.svg"
                alt=""
                width={108}
                height={104}
                style={{ width: "108px", height: "104px" }}
              />
            </div>
            <div className="hero-float-right">
              <Image
                src="/images/hero-float-card.png"
                alt=""
                width={136}
                height={100}
                style={{ width: "136px", height: "100px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hero-cta-row">
            <a href="#templates" style={{
              backgroundColor: "rgb(4, 72, 244)",
              color: "white",
              borderRadius: "40px",
              padding: "14px 24px 14px 20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Switzer', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              <Image src="/images/framer-icon.svg" width={20} height={20} alt="" />
              Browse Templates
            </a>
            <a href="#feature" style={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(8, 8, 8)",
              borderRadius: "40px",
              padding: "14px 24px",
              fontFamily: "'Switzer', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Framerstore Features
            </a>
          </div>
        </div>

        {/* Brand logos marquee — bottom right */}
        <div className="hero-bottom-row">
          <div className="marquee-wrap">
            <div className="marquee-track" style={{ gap: "60px" }}>
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ flexShrink: 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
