import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section
      style={{
        backgroundColor: "rgb(246, 246, 246)",
        padding: "80px 0",
        width: "100%",
      }}
    >
      <div
        className="benefits-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* Left: heading + subtext */}
        <div
          className="benefits-text"
          style={{
            minWidth: "320px",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: "80px",
              fontWeight: 800,
              lineHeight: "1.0",
              color: "rgb(8, 8, 8)",
              margin: 0,
            }}
          >
            Easily
            <br />
            build
            <br />
            sites
            <br />
            with
            <br />
            our
            <br />
            templates
          </h2>
          <p
            style={{
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: "16px",
              color: "rgb(112, 112, 112)",
              lineHeight: "1.6",
              marginTop: "24px",
              marginBottom: 0,
              maxWidth: "340px",
            }}
          >
            No more website woes—just powerful solutions at your fingertips
          </p>
        </div>

        {/* Right: device mockup images */}
        <div
          className="benefits-devices"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: "16px",
            flexShrink: 1,
          }}
        >
          {/* Desktop (largest) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                width: 360,
                height: 240,
                backgroundColor: "rgb(26, 26, 26)",
                position: "relative",
              }}
            >
              <Image
                src="/images/responsive-desktop.jpg"
                alt="Desktop"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: 14,
                color: "rgb(112, 112, 112)",
                margin: 0,
              }}
            >
              Desktop
            </p>
          </div>

          {/* Tablet (medium) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                width: 220,
                height: 240,
                backgroundColor: "rgb(26, 26, 26)",
                position: "relative",
              }}
            >
              <Image
                src="/images/responsive-tablet.jpg"
                alt="Tablet"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: 14,
                color: "rgb(112, 112, 112)",
                margin: 0,
              }}
            >
              Tablet
            </p>
          </div>

          {/* Mobile (smallest) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                width: 140,
                height: 240,
                backgroundColor: "rgb(26, 26, 26)",
                position: "relative",
              }}
            >
              <Image
                src="/images/responsive-mobile.jpg"
                alt="Mobile"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: 14,
                color: "rgb(112, 112, 112)",
                margin: 0,
              }}
            >
              Mobile
            </p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          .benefits-container {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .benefits-devices {
            width: 100%;
            justify-content: flex-start;
            overflow-x: auto;
          }
        }
        @media (max-width: 767px) {
          .benefits-container {
            padding: 0 20px !important;
          }
          .benefits-text h2 {
            font-size: 52px !important;
          }
        }
      `}</style>
    </section>
  );
}
