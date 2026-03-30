import Image from "next/image";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.15)" />
    <path
      d="M5 9l3 3 5-5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M10.64 7.88L16.18 1.5H14.83L10.04 7.03L6.18 1.5H1.5L7.32 9.93L1.5 16.62H2.85L7.91 10.77L11.98 16.62H16.66L10.64 7.88ZM8.59 9.99L7.99 9.15L3.35 2.49H5.54L9.12 7.84L9.72 8.68L14.84 15.67H12.65L8.59 9.99Z"
      fill="rgba(255,255,255,0.6)"
    />
  </svg>
);

const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
    <path
      d="M3.2 6.2C4.8 7.8 7.2 8.6 9.8 8.4M14.8 6.2C12.6 9.6 10.2 12.2 6.6 14.2M9 1.5C7.2 4.2 5.4 5.8 2.4 7.2"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M1.5 5H3.5V12.5H1.5V5ZM2.5 3.8C1.84 3.8 1.3 3.26 1.3 2.6C1.3 1.94 1.84 1.4 2.5 1.4C3.16 1.4 3.7 1.94 3.7 2.6C3.7 3.26 3.16 3.8 2.5 3.8ZM12.5 12.5H10.5V8.7C10.5 7.4 10 6.9 9.2 6.9C8.3 6.9 7.8 7.5 7.8 8.8V12.5H5.8V5H7.7V5.9C8.1 5.2 8.9 4.8 9.8 4.8C11.4 4.8 12.5 5.9 12.5 8V12.5Z"
      fill="rgba(255,255,255,0.5)"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
    <circle cx="7" cy="7" r="2.8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
    <circle cx="10.5" cy="3.5" r="0.6" fill="rgba(255,255,255,0.5)" />
  </svg>
);

const TwitterSmallIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M8.28 6.13L12.74 1H11.63L7.79 5.45L4.74 1H1L5.68 7.71L1 13.12H2.11L6.17 8.39L9.41 13.12H13.15L8.28 6.13ZM6.73 7.77L6.23 7.07L2.5 1.8H4.22L7.18 6.08L7.68 6.78L11.64 12.36H9.92L6.73 7.77Z"
      fill="rgba(255,255,255,0.5)"
    />
  </svg>
);

const DribbbleSmallIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" />
    <path
      d="M2.6 4.8C3.9 6.1 5.9 6.8 8 6.6M11.4 4.8C9.6 7.5 7.7 9.6 4.8 11.3M7 1.5C5.6 3.7 4.2 4.9 1.8 6"
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const BADGES = [
  "Instant access",
  "Responsive design",
  "No coding required",
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(34, 34, 34)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 0 40px",
        width: "100%",
      }}
    >
      <div
        className="footer-container"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* Top row */}
        <div
          className="footer-top-row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "80px",
          }}
        >
          {/* Left column */}
          <div
            className="footer-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              maxWidth: "560px",
              flexShrink: 1,
            }}
          >
            {/* CTA Heading */}
            <h2
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "76px",
                fontWeight: 700,
                lineHeight: "76px",
                color: "white",
                margin: 0,
              }}
            >
              Customize and build a stunning website today.
            </h2>

            {/* Badges */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {BADGES.map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                    fontSize: "16px",
                    color: "white",
                  }}
                >
                  <CheckIcon />
                  {label}
                </div>
              ))}
            </div>

            {/* Company info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Image
                src="/images/logo-light.svg"
                width={119}
                height={25}
                alt="FlowGrid"
              />
              <p
                style={{
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                drop us a line
              </p>
              <a
                href="mailto:hello@flowgrid.com"
                style={{
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "16px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                hello@flowgrid.com
              </a>
            </div>

            {/* Social icons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <a href="#" aria-label="X (Twitter)" style={{ display: "flex" }}>
                <XIcon />
              </a>
              <a href="#" aria-label="Dribbble" style={{ display: "flex" }}>
                <DribbbleIcon />
              </a>
            </div>
          </div>

          {/* Right column: newsletter */}
          <div
            className="footer-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              maxWidth: "400px",
              flexShrink: 0,
              width: "100%",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-onest, 'Onest', sans-serif)",
                fontSize: "28px",
                fontWeight: 600,
                color: "white",
                margin: 0,
              }}
            >
              Sign up for our newsletter:
            </h3>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li
                style={{
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                • Be the first to access new template releases
              </li>
              <li
                style={{
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                • Unlock special discounts
              </li>
            </ul>

            {/* Email form */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <input
                type="email"
                placeholder="Type your email"
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "40px",
                  padding: "14px 20px",
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "15px",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                type="button"
                style={{
                  backgroundColor: "rgb(4, 72, 244)",
                  color: "white",
                  borderRadius: "40px",
                  padding: "14px 24px",
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "15px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "20px",
          }}
        />

        {/* Bottom row */}
        <div
          className="footer-bottom-row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            marginTop: "-40px",
          }}
        >
          {/* Left: changelog / 404 links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
            }}
          >
            {["Changelog", "404"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: social links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              aria-label="LinkedIn"
              style={{ display: "flex" }}
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{ display: "flex" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter X"
              style={{ display: "flex" }}
            >
              <TwitterSmallIcon />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              style={{ display: "flex" }}
            >
              <DribbbleSmallIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          .footer-top-row {
            flex-direction: column !important;
            gap: 48px !important;
          }
          .footer-left {
            max-width: 100% !important;
          }
          .footer-right {
            max-width: 100% !important;
          }
          .footer-left h2 {
            font-size: 56px !important;
            line-height: 56px !important;
          }
        }
        @media (max-width: 767px) {
          .footer-container {
            padding: 0 20px !important;
          }
          .footer-left h2 {
            font-size: 42px !important;
            line-height: 42px !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
