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
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          height: 635px;
          overflow: hidden;
          background: transparent;
        }

        /* Shared h1 style */
        .hero-h1 {
          position: absolute;
          font-family: 'Onest', sans-serif;
          font-size: 104px;
          font-weight: 800;
          color: rgb(8, 8, 8);
          letter-spacing: -4.16px;
          line-height: 1.0;
          margin: 0;
          white-space: nowrap;
        }

        /* Line 1: "Building quality Framer" */
        .hero-h1-l1 {
          top: 98px;
          left: 60px;
        }

        /* Line 2: "templates for" */
        .hero-h1-l2 {
          top: 226px;
          left: 200px;
        }

        /* Line 3: "creators & founders." */
        .hero-h1-l3 {
          top: 354px;
          left: 60px;
        }

        /* Floating image — Framer icon (left of line 2) */
        .hero-float-icon {
          position: absolute;
          top: 223px;
          left: 57px;
          width: 113px;
          height: 110px;
          transform: rotate(3deg);
          flex-shrink: 0;
        }

        /* Floating image — card (right of line 2) */
        .hero-float-card {
          position: absolute;
          top: 225px;
          left: 839px;
          width: 141px;
          height: 107px;
          transform: rotate(-3deg);
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* CTA row */
        .hero-cta-row {
          position: absolute;
          top: 521px;
          left: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }

        /* Badge + marquee container — bottom right */
        .hero-badge-marquee {
          position: absolute;
          right: 60px;
          bottom: 60px;
          width: 453px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .hero-badge-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: rgb(112, 112, 112);
          letter-spacing: -0.24px;
          margin: 0;
          white-space: nowrap;
        }

        /* Marquee visible section with fade mask */
        .hero-marquee-section {
          overflow: hidden;
          width: 453px;
          height: 30px;
          display: flex;
          align-items: center;
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%);
        }

        /* Hero-specific marquee animation (577px = one set of 5 logos with 32px gaps) */
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-577px); }
        }
        .hero-marquee-section .marquee-track {
          animation: hero-marquee 15s linear infinite !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            height: auto;
            overflow: visible;
            padding: 80px 32px 60px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .hero-h1 {
            position: static !important;
            width: auto !important;
            font-size: 60px !important;
            letter-spacing: -2.4px !important;
          }
          .hero-h1-l1, .hero-h1-l2, .hero-h1-l3 { display: none !important; }
          .hero-h1-mobile { display: block; }
          .hero-float-icon, .hero-float-card { display: none; }
          .hero-cta-row {
            position: static !important;
          }
          .hero-badge-marquee {
            position: static !important;
            align-items: flex-start;
            width: 100%;
          }
          .hero-marquee-section {
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 80px 20px 40px; }
          .hero-h1-mobile { font-size: 40px !important; letter-spacing: -1.6px !important; }
          .hero-cta-row { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>

      <section className="hero-section">
        {/* H1 Line 1: "Building quality Framer" */}
        <h1 className="hero-h1 hero-h1-l1">
          Building quality Framer
        </h1>

        {/* Float icon — Framer logo, sits left of line 2 */}
        <div className="hero-float-icon">
          <Image
            src="/images/hero-float-framer.svg"
            alt=""
            width={113}
            height={110}
            style={{ width: "113px", height: "110px" }}
          />
        </div>

        {/* H1 Line 2: "templates for" */}
        <h1 className="hero-h1 hero-h1-l2">
          templates for
        </h1>

        {/* Float card — template preview, sits right of line 2 */}
        <div className="hero-float-card">
          <Image
            src="/images/hero-float-card.png"
            alt=""
            width={141}
            height={107}
            style={{ width: "141px", height: "107px", objectFit: "cover" }}
          />
        </div>

        {/* H1 Line 3: "creators & founders." */}
        <h1 className="hero-h1 hero-h1-l3">
          creators &amp; founders.
        </h1>

        {/* Mobile-only single heading (hidden on desktop) */}
        <h1
          className="hero-h1 hero-h1-mobile"
          style={{ display: "none", fontSize: "60px", letterSpacing: "-2.4px" }}
        >
          Building quality Framer templates for creators &amp; founders.
        </h1>

        {/* CTA row */}
        <div className="hero-cta-row">
          <a
            href="#templates"
            style={{
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
            }}
          >
            <Image src="/images/framer-icon.svg" width={20} height={20} alt="" />
            Browse Templates
          </a>
          <a
            href="#feature"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(8, 8, 8)",
              borderRadius: "40px",
              padding: "14px 24px",
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

        {/* Badge + logo marquee — bottom right */}
        <div className="hero-badge-marquee">
          <p className="hero-badge-text">Template Featured in</p>
          <div className="hero-marquee-section">
            <div className="marquee-track" style={{ gap: "32px", alignItems: "center" }}>
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
